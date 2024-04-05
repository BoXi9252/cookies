// Set cookie function with Secure flag if served over HTTPS
function setCookie(name, value, seconds) {
    const expiry = new Date(new Date().getTime() + seconds * 1000);
    const protocol = window.location.protocol === 'https:' ? '; Secure' : '';
    const cookieValue = `${name}=${value}; expires=${expiry.toGMTString()}; path=/; SameSite=Lax${protocol}`;
    document.cookie = cookieValue;
    console.log(`Setting cookie: ${name}=${value}`);
}

// Get cookie function
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Browser, OS, and Screen info functions
function getBrowserInfo() {
    const ua = navigator.userAgent;
    if (ua.includes("Firefox")) return "Firefox";
    else if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    else if (ua.includes("Chrome")) return "Chrome";
    else if (ua.includes("Safari")) return "Safari";
    else if (ua.includes("MSIE") || ua.includes("Trident/")) return "Internet Explorer";
    else return "Unknown";
}

function getOSInfo() {
    if (navigator.appVersion.includes("Win")) return "Windows";
    else if (navigator.appVersion.includes("Mac")) return "MacOS";
    else if (navigator.appVersion.includes("X11")) return "UNIX";
    else if (navigator.appVersion.includes("Linux")) return "Linux";
    else return "Unknown OS";
}

function getScreenInfo() {
    return { width: window.screen.width, height: window.screen.height };
}

// Save system information cookies function
function saveSystemInfoCookies(saveAll = false) {
    if (saveAll || document.getElementById('browser').checked) {
        setCookie('browserInfo', getBrowserInfo(), 20);
    }
    if (saveAll || document.getElementById('os').checked) {
        setCookie('osInfo', getOSInfo(), 20);
    }
    if (saveAll || document.getElementById('width').checked) {
        setCookie('screenWidth', window.screen.width, 20);
    }
    if (saveAll || document.getElementById('height').checked) {
        setCookie('screenHeight', window.screen.height, 20);
    }
}

// Combined function to save preferences and hide modals
function acceptAndSavePreferences(saveAll = false) {
    setCookie('userPreferences', 'all', 1); // This line is executed in both cases
    saveSystemInfoCookies(saveAll);
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('cookieModal').style.display = 'none';
}

// Event listeners
document.getElementById('acceptAllCookies').addEventListener('click', function () {
    acceptAndSavePreferences(true);
});

document.getElementById('settingsButton').addEventListener('click', function () {
    document.getElementById('settingsModal').classList.add('show');
});

document.getElementById('savePreferences').addEventListener('click', function () {
    acceptAndSavePreferences();
});

// Page load check for userPreferences cookie
document.addEventListener('DOMContentLoaded', function () {
    if (!getCookie('userPreferences')) {
        setTimeout(function () {
            document.getElementById('cookieModal').classList.add('show');
        }, 1000);
    }
});

