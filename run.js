var timmy = 420000;

openPuzzle();

async function openPuzzle() {
  if (!document.getElementById("pause").checked && document.getElementById("site").value == 1) {
    chrome.windows.create(
      {
        url: "https://lichess.org/training",
        focused: true,
        incognito: false,
      }
    );
  }
  else if (!document.getElementById("pause").checked && document.getElementById("site").value == 2) {
    chrome.windows.create(
      {
        url: "https://www.chess.com/puzzles",
        focused: true,
        incognito: false,
      }
    );
  }
  else if (!document.getElementById("pause").checked && document.getElementById("site").value == 3) {
    chrome.windows.create(
      {
        url: "https://woogles.io/puzzle",
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