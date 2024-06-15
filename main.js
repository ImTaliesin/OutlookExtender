// ==UserScript==
// @name         Outlook session extender
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  try to take over the world!
// @author       Brennan
// @match        https://outlook.office.com/*
// @grant        none
// ==/UserScript==

function checkAndClickStaySignedIn() {
    const staySignedInButton = document.querySelector('span.ms-Button-label.label-161[id="id__841"]');
    if (staySignedInButton && staySignedInButton.textContent.includes('Stay signed in')) {
        staySignedInButton.click();
        console.log('Stay Signed In Clicked');
    }
}

function checkAndClickExtendSession() {
    const popupElement = document.querySelector('.popup[data-v-33aa6c60]');
    const popupTextElement = popupElement?.querySelector('.text');
    if (popupTextElement && popupTextElement.textContent.includes('Your session will end in')) {
        const extendSessionButton = popupElement.querySelector('button.el-button--primary');
        if (extendSessionButton) {
            extendSessionButton.click();
            console.log('Extended Session Clicked');
        }
    }
}

// Main function to initialize the script
function main() {
    setInterval(checkAndClickExtendSession, 5000);
    setInterval(checkAndClickStaySignedIn, 5000);
}

main();
