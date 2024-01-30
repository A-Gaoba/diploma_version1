
import bridge from 'webext-bridge';

bridge.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.id === 'current-url') {
    // Handle the 'current-url' message
    const currentUrl = window.location.href;
    sendResponse({ url: currentUrl });
  }
});
