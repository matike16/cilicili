function showpop() {
    let PopUp = document.getElementById('mypop-up');
    PopUp.style.display = 'block';
    setTimeout(function(){
    PopUp.style.opacity = '1';
    PopUp.querySelector('.pop-up-content').style.opacity = '1';
    },100);
}

function hidepop() {
    let PopUp = document.getElementById('mypop-up');
    PopUp.style.opacity = '0';
    PopUp.querySelector('.pop-up-content').style.opacity = '0';
    setTimeout(function(){
    PopUp.style.display = 'none';
    },500);
}

document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.headerspan');
    button.addEventListener('click', showpop);

    let close = document.querySelector('.pop-up button');
    close.addEventListener('click', hidepop);
});
