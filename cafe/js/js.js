var interval = setInterval(timer, 10000);

function timer() {
  newPhrase();
  newBg();
}

window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
}
