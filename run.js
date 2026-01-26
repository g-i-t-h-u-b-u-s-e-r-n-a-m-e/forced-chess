var timmy = 420000;
openPuzzle();

async function openPuzzle() {
  chrome.windows.create(
    {
      url: "https://lichess.org/training",
      focused: true,
      incognito: false,
    }
  );
  timmy = parseInt(document.getElementById("time").value, 10);
  setTimeout(() => {
        openPuzzle();
    }, timmy);
}