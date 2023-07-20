chrome.contextMenus.create({
    id: "addContenteditable",
    title: "Add contenteditable",
    contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tab)=>{
        chrome.tabs.sendMessage(tab[0].id, {"action": "contenteditableElement"});
    });
});
