document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("uncheck").addEventListener("click", () => {
        handler(false)
    });
    document.getElementById("check").addEventListener("click", () => {
        handler(true)
    });
});

const handler = (e) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            args: [e],
            target: { tabId: tabs[0].id },
            func: updateCheckboxes
        }, () => {
        });
    });
}

const updateCheckboxes = (e) => {
    const inputs = document.querySelectorAll('input[type=checkbox]')
    inputs.forEach(element => {
        element.checked = e;
    });
}

