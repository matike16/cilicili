// 使用JavaScript添加点击事件监听器
var searchInput = document.querySelector('.headersearch input');
var dropdown = document.getElementById('search-dropdown');

document.addEventListener('click', function (event) {
    var targetElement = event.target;

    // 检查点击的目标元素是否是搜索框或下拉菜单的子元素
    if (targetElement !== searchInput && !dropdown.contains(targetElement)) {
        // 点击了搜索框外部，隐藏下拉菜单
        dropdown.style.display = 'none';
    }
});

searchInput.addEventListener('click', function (event) {
    // 阻止点击搜索框时冒泡到document，避免立即隐藏下拉菜单
    event.stopPropagation();
    dropdown.style.display = 'block';
});