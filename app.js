// keydown

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    document.getElementById("aboom").play();
  } else if (event.code === "KeyS") {
    document.getElementById("aclap").play();
  } else if (event.code === "KeyD") {
    document.getElementById("ahihat").play();
  } else if (event.code === "KeyF") {
    document.getElementById("akick").play();
  } else if (event.code === "KeyG") {
    document.getElementById("aopenhat").play();
  } else if (event.code === "KeyH") {
    document.getElementById("aride").play();
  } else if (event.code === "KeyJ") {
    document.getElementById("asnare").play();
  } else if (event.code === "KeyK") {
    document.getElementById("atink").play();
  } else if (event.code === "KeyL") {
    document.getElementById("atom").play();
  } 
})

// click

const boom = document.getElementsByClassName("boom")[0]
const clap = document.getElementsByClassName("clap")[0]
const hihat = document.getElementsByClassName("hihat")[0]
const kick = document.getElementsByClassName("kick")[0]
const openhat = document.getElementsByClassName("openhat")[0]
const ride = document.getElementsByClassName("ride")[0]
const snare = document.getElementsByClassName("snare")[0]
const tink = document.getElementsByClassName("tink")[0]
const tom = document.getElementsByClassName("tom")[0]



boom.addEventListener('click', () => {
  document.getElementById("aboom").play();
})

clap.addEventListener('click', () => {
  document.getElementById("aclap").play();
})

hihat.addEventListener('click', () => {
  document.getElementById("ahihat").play();
})

kick.addEventListener('click', () => {
  document.getElementById("akick").play();
})

openhat.addEventListener('click', () => {
  document.getElementById("aopenhat").play();
})

ride.addEventListener('click', () => {
  document.getElementById("aride").play();
})

snare.addEventListener('click', () => {
  document.getElementById("asnare").play();
})

tink.addEventListener('click', () => {
  document.getElementById("atink").play();
})

tom.addEventListener('click', () => {
  document.getElementById("atom").play();
})
