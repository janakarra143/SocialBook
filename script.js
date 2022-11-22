var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height')
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle('dark-mode-on');
    document.body.classList.toggle('dark-theme');
    if(localStorage.getItem('theme')=='light'){
        localStorage.setItem('theme', 'dark')
    }
    else{
        localStorage.setItem('theme', 'light')
    }
}

if(localStorage.getItem('theme')=='light'){
    darkBtn.classList.remove('dark-mode-on');
    document.body.classList.remove('dark-theme')
}

else if(localStorage.getItem('theme')=='dark'){
    darkBtn.classList.add('dark-mode-on');
    document.body.classList.add('dark-theme')
}

else{
    localStorage.setItem('theme', 'light')
}
