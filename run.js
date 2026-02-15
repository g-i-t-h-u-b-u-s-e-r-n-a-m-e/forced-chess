var timmy = 420000;
var paused = false;

openPuzzle();

async function openPuzzle() {
  if (!document.getElementById("pause").checked) {
    chrome.windows.create(
      {
        url: "https://lichess.org/training",
        focused: true,
        incognito: false,
      }
    );
  }
  timmy = parseInt(document.getElementById("time").value, 10);
  setTimeout(() => {
        openPuzzle();
    }, timmy);
}