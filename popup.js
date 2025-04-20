let selectedFontSize = "default";
document.getElementById("fontSize").addEventListener("change", (e) => {
  selectedFontSize = e.target.value;
});

document.getElementById("toggle").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.tabs.sendMessage(tab.id, {
    action: "toggleFocusMode",
    fontSize: selectedFontSize
  });
});

document.getElementById("slider").addEventListener("change", (e) =>{
  contrastEnabled = e.target.checked;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => { 
    chrome.tabs.sendMessage(tabs[0].id, { 
      action: "toggleContrast", 
      enabled: contrastEnabled }); }); 
});

