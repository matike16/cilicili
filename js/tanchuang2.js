// 游戏中心弹窗
var gamecartoon1 = document.getElementById('gamecartoon1');
var hideTimeout1;

function showcartoon1() {
  gamecartoon1.style.display = 'block';
  setTimeout(function() {
    gamecartoon1.classList.add('fade-in');
  }, 10);
}

function hidecartoon1() {
  hideTimeout1 = setTimeout(function() {
    gamecartoon1.classList.remove('fade-in');
    setTimeout(function() {
      gamecartoon1.style.display = 'none';
    }, 300);
  }, 200);
}

function cancelcartoon1() {
  clearTimeout(hideTimeout1);
}