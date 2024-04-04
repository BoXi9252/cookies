
// 为“Accept All”按钮添加点击事件监听器
document.getElementById('acceptAllCookies').addEventListener('click', function () {
    // 这里设置cookie
    setCookie('userPreferences', 'all', 20); // 例如存活20秒
    // 隐藏cookie信息弹窗
    document.getElementById('cookieModal').classList.remove('show');
});

// 为“Settings”按钮添加点击事件监听器
document.getElementById('settingsButton').addEventListener('click', function () {
    // 显示设置信息弹窗
    document.getElementById('settingsModal').classList.add('show');
});

// 为“Save Preferences”按钮添加点击事件监听器
document.getElementById('savePreferences').addEventListener('click', function () {
    // 这里保存用户的设置选择
    // ...

    // 隐藏设置信息弹窗
    document.getElementById('settingsModal').classList.remove('show');
});

// 页面加载时检查cookie
document.addEventListener('DOMContentLoaded', function () {
    if (!getCookie('userPreferences')) {
        // 如果cookie不存在，显示cookie信息弹窗
        setTimeout(function () {
            document.getElementById('cookieModal').classList.add('show');
        }, 1000); // 页面加载后1秒显示
    }
});




// 这里添加你的 setCookie 和 getCookie 函数定义
// 设置cookie
function setCookie(name, value, seconds) {
    const expiry = new Date(new Date().getTime() + seconds * 1000);
    const cookieValue = name + "=" + value + "; expires=" + expiry.toGMTString() + "; path=/";
    document.cookie = cookieValue;
}

// Get cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}


document.getElementById('savePreferences').addEventListener('click', function () {
    // 直接隐藏设置对话框
    document.getElementById('settingsModal').style.display = 'none';

    // 如果需要同时隐藏第一个对话框，也就是cookie信息对话框
    document.getElementById('cookieModal').style.display = 'none';

    // 这里添加保存设置的代码，例如保存到cookie
});
