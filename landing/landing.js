//Send message to parent window to load About page
function loadAbout() {
  var parentWindow = window.parent;
  parentWindow.postMessage("load-about", "*");
}
//Send message to parent window to load Play page
function loadGame() {
  var parentWindow = window.parent;
  parentWindow.postMessage("load-game", "*");
}
