document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");

  startButton.addEventListener("click", function () {
    init();
  });
});
function init() {
  chrome.tabs.create(
    {
      url: "/background.html",
      active: true
    }
  );
}