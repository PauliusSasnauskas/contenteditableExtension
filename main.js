let el;

document.addEventListener("contextmenu", (ev) => {
  el = ev.target;
});

chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.action === "contenteditableElement") {
    el.contentEditable = (el.contentEditable === "true" ? "inherit" : true);
  }
  sendResponse({value: "ok"});
});