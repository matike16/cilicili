var passwordInput = document.getElementById("password");
var leftImage = document.getElementById("left-image");
var rightImage = document.getElementById("right-image");

passwordInput.addEventListener("focus", function () {
    leftImage.src = "./images/logincartoonleft1.png";
    rightImage.src = "./images/logincartoonright1.png";
});

passwordInput.addEventListener("blur", function () {
    leftImage.src = "./images/logincartoonleft.png";
    rightImage.src = "./images/logincartoonright.png";
});