var test = document.querySelector('.title')
var picBox = document.getElementById('picbox');
var slideWidth = picBox.offsetWidth;
var slideCount = picBox.children.length;
var totalWidth = slideWidth * slideCount;
// picBox.style.width = totalWidth +'px';
var currentIndex = 0;
var dots = document.querySelectorAll('.dot');
var beforeBtn = document.querySelector('.before');
var nextBtn = document.querySelector('.next');
var timer;
var titles = document.querySelectorAll('.title');
updateTitle(currentIndex);
var bottomBox = document.querySelector('.bottom-box');
var linearBox = document.querySelector('.linear');

function slideTo(index) {
    picBox.style.transform = `translateX(-${index * slideWidth}px)`;
    currentIndex = index;
    updateDots();
    updateTitle(currentIndex);
    updateBackground(currentIndex);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slideTo(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    slideTo(currentIndex);
}

function updateDots() {
    for (var i = 0; i < dots.length; i++) {
    if (i === currentIndex) {
        dots[i].classList.add('active');
    } else {
        dots[i].classList.remove('active');
    }
    }
}

function startSlide() {
    timer = setInterval(nextSlide, 3000);
}

function stopSlide() {
    clearInterval(timer);
}

startSlide();

beforeBtn.addEventListener('click', function() {
    stopSlide();
    previousSlide();
});

nextBtn.addEventListener('click', function() {
    stopSlide();
    nextSlide();
});

dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
    stopSlide();
    slideTo(index);
    });
});

var container = document.querySelector('.container');
container.addEventListener('mouseover', stopSlide);
container.addEventListener('mouseout', startSlide);

function updateTitle(index) {
    for (var i = 0; i < titles.length; i++) {
        if (i === index) {
            titles[i].style.display = 'block';
        } else {
            titles[i].style.display = 'none';
        }
    }
}
function updateBackground(index) {
    var colors = ['#1f160d', '#37282a', '#7a766b', '#345a33', '#738caf', '#433120', '#4e4231', '#423019', '#4e5b77'];
    var color = colors[index % colors.length];
    bottomBox.style.backgroundColor = color;
    
    var linearGradient = `linear-gradient(to top, ${color}, transparent)`;
    linearBox.style.background = linearGradient;
}


// 在页面加载完成后执行以下代码
window.addEventListener('DOMContentLoaded', function() {
    // 调用初始状态的背景颜色
    updateBackground(0);
});