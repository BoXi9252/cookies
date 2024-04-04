
// Add a click event listener for the "Accept All" button
document.getElementById('acceptAllCookies').addEventListener('click', function () {
    // 设置cookie
    setCookie('userPreferences', 'all', 20); // 存活20秒
    // 隐藏cookie信息弹窗
    document.getElementById('cookieModal').classList.remove('show');
});

// Add a click event listener for the "Settings" button
document.getElementById('settingsButton').addEventListener('click', function () {
    // show  "settings informations pop up "
    document.getElementById('settingsModal').classList.add('show');
});

// listen “Save Preferences”
document.getElementById('savePreferences').addEventListener('click', function () {
    // 隐藏 "settings informations pop up "
    document.getElementById('settingsModal').classList.remove('show');
});

// 页面加载时检查cookie
document.addEventListener('DOMContentLoaded', function () {
    if (!getCookie('userPreferences')) {
        // 如果cookie不存在，显示cookie信息弹窗
        setTimeout(function () {
            document.getElementById('cookieModal').classList.add('show');
        }, 2000); // 页面加载后2秒显示
    }
});


//  setCookie 、 getCookie functions
// Set cookie
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

// click ”Save Preferences“
document.getElementById('savePreferences').addEventListener('click', function () {
    // 隐藏settings pop up
    document.getElementById('settingsModal').style.display = 'none';

    // 隐藏cookie pop up
    document.getElementById('cookieModal').style.display = 'none';

});
