// creates and selects variables by ID

const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

// Makes noise when sound is clicked on

boom.addEventListener("click", () => {
  new Audio("./sounds/boom.wav").play();
});
clap.addEventListener("click", () => {
  new Audio("./sounds/clap.wav").play();
});
hihat.addEventListener("click", () => {
  new Audio("./sounds/hihat.wav").play();
});
kick.addEventListener("click", () => {
  new Audio("./sounds/kick.wav").play();
});
openhat.addEventListener("click", () => {
  new Audio("./sounds/openhat.wav").play();
});
ride.addEventListener("click", () => {
  new Audio("./sounds/ride.wav").play();
});
snare.addEventListener("click", () => {
  new Audio("./sounds/snare.wav").play();
});
tink.addEventListener("click", () => {
  new Audio("./sounds/tink.wav").play();
});
tom.addEventListener("click", () => {
  new Audio("./sounds/tom.wav").play();
})

// Makes noise when key is pressed

document.addEventListener("keypress", (event) => {
  if (event.key == "a") {
    new Audio("./sounds/boom.wav").play();
  } else if (event.key == "s") {
    new Audio("./sounds/clap.wav").play();
  } else if (event.key == "d") {
    new Audio("./sounds/hihat.wav").play();
  } else if (event.key == "f") {
    new Audio("./sounds/kick.wav").play();
  } else if (event.key == "g") {
    new Audio("./sounds/openhat.wav").play();
  } else if (event.key == "h") {
    new Audio("./sounds/ride.wav").play();
  } else if (event.key == "j") {
    new Audio("./sounds/snare.wav").play();
  } else if (event.key == "k") {
    new Audio("./sounds/tink.wav").play();
  } else if ((event.key = "l")) {
    new Audio("./sounds/tom.wav").play();
  }
});
