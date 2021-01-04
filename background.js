chrome.contextMenus.create({
    id: "addContenteditable",
    title: "Add contenteditable",
    contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.getSelected(undefined, (tab)=>{
        chrome.tabs.sendMessage(tab.id, {"action": "contenteditableElement"});
    });
});
