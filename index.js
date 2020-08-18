alert("press on drums to play if you're");
var i;
var len = document.querySelectorAll(".drum").length;

for (i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttoninnerhtml = this.innerHTML;
    press(buttoninnerhtml);
    anima(buttoninnerhtml);
  });
}

document.addEventListener("keypress", function(event) {
  press(event.key);
  anima(event.key);
});

function press(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      // var audio = new Audio("sounds/tom-1.mp3");
      // audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(buttoninnerhtml);

  }
}

function anima(pressed) {
  var selected = document.querySelector("." + pressed);
  selected.classList.add("pressed");
  setTimeout(function() {
    selected.classList.remove("pressed");
  }, 100);
}
