function showOverlay() {
  fetch(chrome.runtime.getURL("assets/overlay.html"))
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load overlay.html: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      const overlayContainer = document.createElement("div");
      overlayContainer.id = "leetlearn-overlay-container";
      overlayContainer.innerHTML = html;
      document.body.appendChild(overlayContainer);

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = chrome.runtime.getURL("assets/overlay.css");
      document.head.appendChild(link);

      const closeButton = document.getElementById("leetlearn-overlay-close");
      closeButton?.addEventListener("click", () => {
        overlayContainer.remove();
      });
    })
    .catch((error) => {
      console.error("Failed to load overlay:", error);
    });
}

// Monitor the DOM for changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes) {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node;

          // Check if the element matches the target span
          const targetSpan = element.querySelector(
            'span[data-e2e-locator="submission-result"]'
          );

          if (targetSpan && targetSpan.textContent === "Accepted") {
            console.log("LeetCode submission successful!");
            showOverlay();
          }
        }
      });
    }
  });
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });
