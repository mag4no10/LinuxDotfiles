const messageId = 'honey:couponResProxy';
let fetchCounter = 0;
let xhrCounter = 0;


const handleFetch = async (functionCall, reqData) => {
  const [url] = reqData;
  fetchCounter += 1;
  const requestId = `${fetchCounter}${url}`;

  window.postMessage({ messageId, type: 'request', requestId }, window.location.origin);

  try {
    await functionCall;

    window.postMessage({ messageId, type: 'response', requestId }, window.location.origin);
  } catch (err) {
    // do nothing
  }
};

// Proxy fetch
function overrideFetch() {
  window.fetch = new Proxy(window.fetch, {
    apply: async (targetFn, thisArg, argArray) => {
      const functionCall = targetFn.apply(thisArg, argArray);

      handleFetch(functionCall, argArray);

      return functionCall;
    },
  });
}


const handleXHRSend = (thisArg, argArray) => {
  const argsString = JSON.stringify(argArray);
  xhrCounter += 1;
  const requestId = `${xhrCounter}${argsString}`;

  window.postMessage({ messageId, type: 'request', requestId }, window.location.origin);

  thisArg.addEventListener('loadend', (event) => {
    window.postMessage({ messageId, type: 'response', requestId }, window.location.origin);

    return event;
  });
};


// Proxy XHR.send
function overrideXMLHttpRequestSend() {
  const proxyXHRSend = new Proxy(window.XMLHttpRequest.prototype.send, {
    apply: async (target, thisArg, argArray) => {
      const call = target.apply(thisArg, argArray);

      handleXHRSend(thisArg, argArray);

      return call;
    },
  });

  window.XMLHttpRequest.prototype.send = proxyXHRSend;
}


const isProxyAvailable = !!window.Proxy;
if (isProxyAvailable) {
  overrideFetch();
  overrideXMLHttpRequestSend();
}
