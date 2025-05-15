chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SUBMISSION_SUCCESS") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "assets/LeetLearnLogo48.png",
      title: "LeetCode Submission",
      message: "Your submission was successful!",
    });
  }
});
