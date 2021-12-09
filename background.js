chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(async () => {
    const [ tab ] = await chrome.tabs.query({
      active: true,
      currentWindow: true 
    });

    await chrome.tabs.remove(tab.id);
  });
});
