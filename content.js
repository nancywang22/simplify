
// Apply styles for Focus Mode
function applyFocusMode(fontSize = "default") {
  const style = document.createElement("style");
  style.id = "focus-style";

  let fontSizeValue = "1.2rem";
  if (fontSize === "large") fontSizeValue = "1.4rem";
  if (fontSize === "xlarge") fontSizeValue = "1.6rem";
  
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');

    * {
      animation: none !important;
      transition: none !important;
    }

    img, video, iframe, aside, footer, nav {
      display: none !important;
    }

    body, p, div, span, li, ul, ol, a, h1, h2, h3, h4, h5, h6, td, th {
      font-family: 'Atkinson Hyperlegible', sans-serif !important;
      font-size: ${fontSizeValue} !important;
      line-height: 1.6 !important;
      letter-spacing: 0.05em !important;
      color: #111 !important;
    }

    body {
      background: #fefefe !important;
      margin: auto !important;
      padding: 1rem !important;
  `;

  document.head.appendChild(style);

}

// Remove Focus Mode styles
function removeFocusMode() {
  const existingStyle = document.getElementById("focus-style");
  if (existingStyle) existingStyle.remove();
}

// Toggle Focus Mode
function toggleFocusMode(fontSize = "default") {
  const oldStyle = document.getElementById("focus-style");
  if (oldStyle) oldStyle.remove();

  applyFocusMode(fontSize);
}

// Listen for toggle message from popup.js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "toggleFocusMode") {
    toggleFocusMode(msg.fontSize);
  }
});