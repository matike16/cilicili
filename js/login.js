// 获取并解析保存在 localStorage 中的用户数据
var userData = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById("login-button").addEventListener("click", function () {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    // 查找用户信息
    var currentUser = userData.find(function (user) {
        return user.username === usernameInput && user.password === passwordInput;
    });

    if (currentUser) {
        // 输入的账号和密码与预设值一致
        var successMessage = "登录成功，欢迎回来 " + usernameInput + "！";
        alert(successMessage);


        //退出登录界面
        var loginButton = document.getElementById("mypop-up");
        loginButton.style.display = "none";
        // 替换背景图片
        var personalSpace = document.getElementById("personalspace");
        personalSpace.style.backgroundImage = "url(./images/login头像.webp)";
        personalSpace.style.backgroundSize = "cover";
        // 删除"登录"字样
        var loginText = document.getElementById("personalspace");
        loginText.textContent = "";

        //删除弹窗内容
        var popUp5 = document.getElementById("popup5");
        popUp5.textContent = "";
        //设置popUp5的位置
        popUp5.style.position = "absolute";
        popUp5.style.right = "363px";
        popUp5.style.width = "300px";
        popUp5.style.height = "450px";
        popUp5.style.paddingTop = "25px";
        //添加一个头像div元素
        var avatarDiv = document.createElement("div");
        avatarDiv.className = "avatar";
        //设置头像div元素的宽高
        avatarDiv.style.width = "80px";
        avatarDiv.style.height = "80px";
        //设置头像div元素的位置
        avatarDiv.style.position = "absolute";
        avatarDiv.style.top = "-60px";
        avatarDiv.style.left = "110px";
        //设置头像div元素为圆形
        avatarDiv.style.borderRadius = "50%";
        //添加一个头像img元素
        var avatarImg = document.createElement("img");
        avatarImg.src = "./images/login头像.webp";
        //头像img元素的大小跟头像div元素一致
        avatarImg.style.width = "80px";
        avatarImg.style.height = "80px";
        //设置头像img为圆形
        avatarImg.style.borderRadius = "50%";
        avatarDiv.appendChild(avatarImg);
        //添加一个h2元素
        var h2 = document.createElement("h2");
        h2.textContent = "哒哒溜2233";
        //使h2元素居中
        h2.style.textAlign = "center";
        h2.style.marginBottom = "5px";
        //添加一个p元素
        var p = document.createElement("p");
        p.textContent = "硬币：196.7元   B币：0";
        p.style.fontSize = "10px";
        //使p元素居中
        p.style.textAlign = "center";

        popUp5.appendChild(avatarDiv);
        popUp5.appendChild(h2);
        popUp5.appendChild(p);


        var popUp7 = document.getElementById("popup7");
        popUp7.textContent = "";
        popUp7.style.position = "absolute";
        popUp7.style.right = "320px";
        popUp7.style.width = "145px";
        popUp7.style.height = "215px";
        popUp7.style.padding = "0";
        //在popUp7中添加5个div元素，每个div元素宽高相同，5个刚好占满popUp7
        for (var i = 0; i < 5; i++) {
            var div = document.createElement("div");
            div.className = "loginmesdiv";
            div.style.width = "145px";
            div.style.height = "43px";
            div.style.textAlign = "center";
            div.style.lineHeight = "43px";
            div.style.fontSize = "14px";
            div.style.color = "#61666d"
            div.style.transition = "all 0.5s";
            popUp7.appendChild(div);
        }
        //popUp7中第一个和最后一个div border-radius为5px,
        popUp7.children[0].style.borderRadius = "10px 10px 0 0";
        popUp7.children[4].style.borderRadius = "0 0 10px 10px";
        //添加元素内容
        popUp7.children[0].textContent = "回复我的";
        popUp7.children[1].textContent = "@我的";
        popUp7.children[2].textContent = "收到的赞";
        popUp7.children[3].textContent = "系统消息";
        popUp7.children[4].textContent = "我的消息";

        var popUp8 = document.getElementById("popup8");
        popUp8.style.opacity = "0";

        var popUp9 = document.getElementById("popup9");
        popUp9.style.opacity = "0";

        var popUp10 = document.getElementById("popup10");
        popUp10.style.opacity = "0";

    } else {
        // 输入的账号和密码与预设值不一致
        alert("账号或密码错误，请重新输入！");
    }
});

document.getElementById("register-button").addEventListener("click", function () {
    var newUsernameInput = document.getElementById("username").value;
    var newPasswordInput = document.getElementById("password").value;

    if (newUsernameInput && newPasswordInput) { // 确保输入不为空
        // 添加新的用户名和密码
        var newUser = { username: newUsernameInput, password: newPasswordInput };
        userData.push(newUser);

        // 将新的用户数据保存到 localStorage 中
        localStorage.setItem('users', JSON.stringify(userData));

        // 清空输入框内容
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        // 弹窗提示注册成功
        alert("注册成功！");

    } else {
        alert("用户名或密码不能为空！");
    }
});