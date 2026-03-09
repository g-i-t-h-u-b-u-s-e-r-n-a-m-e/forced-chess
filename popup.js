document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.create(
    {
      url: "/background.html",
      active: true
    }
  );
});
