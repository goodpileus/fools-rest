window.onload = function() {
  console.log(':-)');

  document.body.style.opacity = "1";
}

function playSound() {
  var obj = document.createElement("audio");
      obj.src = "treasures/civciv-cove.mp3";
      obj.play();
      obj.volume = 1;
      obj.loop = true;
}

function playSoundHover() {
  var obj = document.createElement("audio");
      obj.src = "treasures/hover.wav";
      obj.play();
      obj.volume = 0.5;
}

function playSoundSuccess() {
  var obj = document.createElement("audio");
      obj.src = "treasures/success.wav";
      obj.play();
      obj.volume = 1;
}

$('.debris').mouseenter(function() {
  playSoundHover();
});

$('.debris').click(function() {
  playSoundSuccess();
  playSound();
  $('.debris').toggleClass( "debris-hide" );
  $('.ring').show();
  $('.tab').toggleClass( "tab-show" );
});

$('.tab').click(function() {
  $('.note').toggleClass( "note-show" );
});
