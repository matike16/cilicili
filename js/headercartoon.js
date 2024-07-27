let banner = document.querySelector('.animateds-banner');
// 获取到所有的图层，也就是包裹在img外的所有div
let layers = document.querySelectorAll('.layer');

let layers_data = [
    { translateX: 0, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: -174.194, translateY: -17.4194, filter_blur: 0, opacity: 1 },
    { translateX: 156.774, translateY: -65.3226, filter_blur: 0.5, opacity: 1 },
    { translateX: -278.71, translateY: -104.516, filter_blur: 1, opacity: 1 ,rotate: 0},
    { translateX: 0, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 0, translateY: -24.3871, filter_blur: 0, opacity: 1 },
    { translateX: -487.742, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 69.6774, translateY: 73.1613, filter_blur: 0, opacity: 1 },
    { translateX: -156.774, translateY: 31.3548, filter_blur: 0, opacity: 1 },
    { translateX: -353.032, translateY: 23.2258, filter_blur: 0, opacity: 1 },
    { translateX: 78.3871, translateY: 21.7742, filter_blur: 0, opacity: 1 },
    { translateX: 92.9032, translateY: 37.1613, filter_blur: 0, opacity: 1 },
    { translateX: -18.5806, translateY: 9.29032, filter_blur: 0, opacity: 1 },
    { translateX: 0, translateY: 62.7097, filter_blur: 0, opacity: 1 },
    { translateX: -232.258, translateY: 34.8387, filter_blur: 0, opacity: 1 },
    { translateX: 325.161, translateY: 48.7742, filter_blur: 0, opacity: 1 },
    { translateX: -574.839, translateY: 19.1613, filter_blur: 0.3, opacity: 1 },
    { translateX: -406.452, translateY: 0, filter_blur: 0.3, opacity: 1 },
    { translateX: -929.032, translateY: 0, filter_blur: 0.8, opacity: 1 },
    { translateX: 934.839, translateY: 0, filter_blur: 0, opacity: 1 },
    { translateX: 418.065, translateY: 0, filter_blur: 0, opacity: 1 },
];
// 初始化所有的图层
let init = function () {
    for (const k in layers) {
        if (Object.hasOwnProperty.call(layers, k)) {
            const element = layers[k];
            const element_data = layers_data[k];
            element.children[0].style = `transition: .2s linear;
                                transform: scale(1) 
                                translate( ${element_data.translateX}px, ${element_data.translateY}px ) 
                                rotate(0deg);
                                filter: blur(${element_data.filter_blur});
                                opacity: ${element_data.opacity};
                                `;
        }
    }
};

let x_first = 0;
let x_now = 0;
let x_offset = 0;

banner.addEventListener("mouseover", function (e) {
    x_first = e.clientX;
});

banner.addEventListener("mousemove", function (e) {
    x_now = e.clientX;
    x_offset = x_now - x_first;

    for (const k in layers) {
        if (Object.hasOwnProperty.call(layers, k)) {
            let level = (30 - parseInt(k)) * 0.5;
            const element = layers[k];
            const element_data = layers_data[k];

            let new_translateX = element_data.translateX + x_offset / level;
            let new_rotate = element_data.rotate - x_offset / level;

            element.children[0].style.transform = `scale(1) translate(${new_translateX}px, ${element_data.translateY}px) rotate(0deg)`;
            element.children[0].style.filter = `blur(${element_data.filter_blur})`;
            element.children[0].style.transform = `translate(${new_translateX}px, ${element_data.translateY}px) rotate(${new_rotate}deg)`;
        }
    }
});

banner.addEventListener("mouseout", function () {
    init();
});

window.onload = function () {
    init();
};