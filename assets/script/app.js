
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
        }, 1000); // 页面加载后2秒显示
    }
});


//  setCookie 、 getCookie functions
// Set cookie
function setCookie(name, value, seconds) {
    const expiry = new Date(new Date().getTime() + seconds * 1000);
    const cookieValue = name + "=" + value + "; expires=" + expiry.toGMTString() + "; path=/";
    document.cookie = cookieValue;
}
// Set cookie
// function setCookie(name, value, seconds) {
//     const expiry = new Date(new Date().getTime() + seconds * 1000);
//     // 如果你的网站完全运行在HTTPS上，并且你需要在第三方上下文中发送cookie，则设置SameSite=None; Secure
//     // 否则，可以选择使用SameSite=Lax来增加安全性
//     const cookieValue = `${name}=${value}; expires=${expiry.toGMTString()}; path=/; SameSite=Lax`;
//     document.cookie = cookieValue;
// }


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

// 获取操作系统信息的函数
function getOSInfo() {
    let osName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) osName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) osName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) osName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) osName = "Linux";
    // console.log("Operating System:", osName); // 使用console.log输出操作系统信息
    return osName;
}

// 获取屏幕宽度和高度的函数
function getScreenInfo() {
    return {
        width: window.screen.width,
        height: window.screen.height
    };
}


// click ”Save Preferences“
document.getElementById('savePreferences').addEventListener('click', function () {
    // 假设用户同意保存所有信息（这里可以根据实际情况调整逻辑）

    // 获取操作系统信息并保存到cookie
    var osInfo = getOSInfo();
    setCookie('osInfo', osInfo, 20); // 存活20秒

    // 获取屏幕信息并保存到cookie
    var screenInfo = getScreenInfo();
    setCookie('screenWidth', screenInfo.width, 20); // 存活20秒
    setCookie('screenHeight', screenInfo.height, 20); // 存活20秒

    // 隐藏settings pop up
    document.getElementById('settingsModal').style.display = 'none';

    // 隐藏cookie pop up
    document.getElementById('cookieModal').style.display = 'none';
});






// // click ”Save Preferences“
// document.getElementById('savePreferences').addEventListener('click', function () {
//     // 隐藏settings pop up
//     document.getElementById('settingsModal').style.display = 'none';

//     // 隐藏cookie pop up
//     document.getElementById('cookieModal').style.display = 'none';

// });
