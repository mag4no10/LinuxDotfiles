function fish_greeting
end

#function fish_prompt
#    echo (set_color red)"┌["(set_color cyan)"$hostname"(set_color red)"]─["(set_color yellow)(date "+%H:%M-%d/%m")(set_color red)"]─["(set_color blue)"$PWD"(set_color red)"]"
#    echo (set_color red)"└╼"(set_color green)"$USER"(set_color yellow)(set_color yellow)"\$"(set_color normal)
#end

set PATH ~/.local/bin /snap/bin /usr/sandbox/ /usr/local/bin /usr/bin /bin /usr/local/games /usr/games /usr/share/games /usr/local/sbin /usr/sbin /sbin $PATH

alias ls='ls --color=auto'
alias dir='dir --color=auto'
alias vdir='vdir --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'

alias bat="batcat --paging=never"
alias kb0="echo 0 > /sys/class/leds/asus::kbd_backlight/brightness"
alias kb1="echo 1 > /sys/class/leds/asus::kbd_backlight/brightness"
alias kb2="echo 2 > /sys/class/leds/asus::kbd_backlight/brightness" 
alias kb3="echo 3 > /sys/class/leds/asus::kbd_backlight/brightness"