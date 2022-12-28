# Theme based on Bira theme from oh-my-zsh: https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/bira.zsh-theme
# Some code stolen from oh-my-fish clearance theme: https://github.com/bpinto/oh-my-fish/blob/master/themes/clearance/

function __user_host
  set -l content 
  if [ (id -u) = "0" ];
    echo -n (set_color --bold red)
  else
    echo -n (set_color --bold magenta)
  end
  echo -n $USER@(hostname|cut -d . -f 1) (set color normal)
end

function __current_path
  echo -n (set_color --bold brblue) (pwd) (set_color normal) 
end

function __current_ip
  echo -n (hostname -I) | sed 's/ *$//'
end

function fish_prompt
  echo -n (set_color --bold magenta)"╭─"(set_color normal)
  __user_host
  echo -n " ["
  __current_ip
  echo -n "]"
  __current_path
  echo -e ''
  echo (set_color --bold magenta)"╰─"(set_color --bold magenta)"  "(set_color normal)
end

function fish_right_prompt
  set -l st $status

  if [ $st != 0 ];
    echo (set_color red) ↵ $st(set_color normal)
  end
end
