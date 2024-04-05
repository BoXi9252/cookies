// Event listener for the "Accept All" button
document.getElementById('acceptAllCookies').addEventListener('click', function () {
    acceptAndSavePreferences(); // Function to save preferences when "Accept All" is clicked
});

// Event listener for the "Settings" button
document.getElementById('settingsButton').addEventListener('click', function () {
    // Show "settings information pop up"
    document.getElementById('settingsModal').classList.add('show');
});

// Event listener for the "Save Preferences" button
document.getElementById('savePreferences').addEventListener('click', function () {
    acceptAndSavePreferences(); // Function to save preferences when "Save Preferences" is clicked
});

// Function to save user preferences and hide modals
function acceptAndSavePreferences() {
    // Set cookie for user preferences
    setCookie('userPreferences', 'all', 20); // Assume user agrees to all preferences

    // Save system information cookies
    saveSystemInfoCookies();

    // Hide modals
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('cookieModal').style.display = 'none';
}

// Function to save system information cookies
function saveSystemInfoCookies() {
    // Save browser info to cookie
    const browserInfo = getBrowserInfo();
    setCookie('browserInfo', browserInfo, 20); // 20 seconds lifespan

    // Save operating system info to cookie
    var osInfo = getOSInfo();
    setCookie('osInfo', osInfo, 20); // 20 seconds lifespan

    // Save screen info to cookie
    var screenInfo = getScreenInfo();
    setCookie('screenWidth', screenInfo.width, 20); // 20 seconds lifespan
    setCookie('screenHeight', screenInfo.height, 20); // 20 seconds lifespan
}




// Page load check for userPreferences cookie
document.addEventListener('DOMContentLoaded', function () {
    if (!getCookie('userPreferences')) {
        // Show cookie information modal if no preferences saved
        setTimeout(function () {
            document.getElementById('cookieModal').classList.add('show');
        }, 1000); // Show after 1 second for demonstration purposes
    }
});

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

// Browser info function
function getBrowserInfo() {
    const ua = navigator.userAgent;
    // Simplified detection logic
    if (ua.includes("Firefox")) return "Firefox";
    else if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
    else if (ua.includes("Chrome")) return "Chrome";
    else if (ua.includes("Safari")) return "Safari";
    else if (ua.includes("MSIE") || ua.includes("Trident/")) return "Internet Explorer";
    else return "Unknown";
}

// OS info function
function getOSInfo() {
    // Simplified OS detection logic
    if (navigator.appVersion.includes("Win")) return "Windows";
    else if (navigator.appVersion.includes("Mac")) return "MacOS";
    else if (navigator.appVersion.includes("X11")) return "UNIX";
    else if (navigator.appVersion.includes("Linux")) return "Linux";
    else return "Unknown OS";
}

// Screen info function
function getScreenInfo() {
    return { width: window.screen.width, height: window.screen.height };
}
