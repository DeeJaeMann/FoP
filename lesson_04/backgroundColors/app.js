document.querySelector("#turnRed").addEventListener("click", turnRedFunction);
document.querySelector("#turnBlue").addEventListener("click", turnBlueFunction);

document.querySelector("#turnYellow").addEventListener("click", turnYellowFunction);
document.querySelector("#turnGreen").addEventListener("click", turnGreenFunction);
document.querySelector("#turnOrange").addEventListener("click", turnOrangeFunction);
document.querySelector("#turnRandom").addEventListener("click", turnRandomFunction);
document.querySelector("#resetBackground").addEventListener("click", resetBackgroundFunction);

function turnRedFunction() {
  document.querySelector("body").style.backgroundColor = "red";
}

function turnBlueFunction() {
  document.querySelector("body").style.backgroundColor = "blue";
}



function resetBackgroundFunction() {
  document.querySelector("body").style.backgroundColor = "white";
}

function turnYellowFunction() {
  document.querySelector("body").style.backgroundColor = "yellow";
}

function turnGreenFunction() {
  document.querySelector("body").style.backgroundColor = "green";
}

function turnOrangeFunction() {
  document.querySelector("body").style.backgroundColor = "orange";
}

function turnRandomFunction() {
  document.querySelector("body").style.backgroundColor = "purple";
}