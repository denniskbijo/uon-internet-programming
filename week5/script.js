function registerEvents() {
  var button = document.getElementById("circle");
  document.addEventListener("keydown", myKeyDown);
  button.style.opacity = "1";
}

function myKeyDown(event) {
  console.log(event.keyCode);
  if (event.keyCode == 37) {
    moveButtonLeft();
  }
  if (event.keyCode == 39) {
    moveButtonRight();
  }
  //Up button
  if(event.keyCode == 38){
      moveButtonUp();
  }
}

function moveButtonUp() {
  var button = document.getElementById("circle");
  var offsetValue = button.offsetTop;
  button.style.top = offsetValue - 10 + "px";
}

function moveButtonLeft() {
    var button = document.getElementById("circle");
    var buttonOffsetLeft = button.offsetLeft;
    button.style.left = buttonOffsetLeft - 10 + "px";
  }

function moveButtonRight() {
  var button = document.getElementById("circle");
  var buttonOffsetLeft = button.offsetLeft;
  button.style.left = buttonOffsetLeft + 10 + "px";
}

function setTimer() {
  setInterval(changeButtonStyle, 10);
}

function changeButtonStyle() {
  var button = document.getElementById("circle");
  console.log(button.style.opacity);
  button.style.opacity = parseFloat(button.style.opacity) - 0.01;
}

document.addEventListener("DOMContentLoaded", registerEvents);
