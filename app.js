// keydown

document.addEventListener("keydown", (event) => {
  if (event.code === 'KeyA') {
    document.getElementById("boom").play();

  } else if (event.code === 'KeyS') {
    document.getElementById("clap").play();

  } else if (event.code === 'KeyD') {
    document.getElementById("hihat").play();

  } else if (event.code === 'KeyF') {
    document.getElementById("kick").play();

  } else if (event.code === 'KeyG') {
    document.getElementById("openhat").play();

  } else if (event.code === 'KeyH') {
    document.getElementById("ride").play();

  } else if (event.code === 'KeyJ') {
    document.getElementById("snare").play();

  } else if (event.code === 'KeyK') {
    document.getElementById("tink").play();

  } else if (event.code === 'KeyL') {
    document.getElementById("tom").play();
  } else {
    // the day i find a faster way to do this it's over for you bitches
  }
});

// click

document.addEventListener("click", (event) => {
  let boom = document.getElementsByClassName("boom");
  let clap = document.getElementByClassName("clap");
  let hihat = document.getElementByCLassName("hihat");
  let kick = document.getElementByClassName("kick");
  let openhat = document.getElementByClassName("openhat");
  let ride = document.getElementByClassName("ride");
  let snare = document.getElementByCLassName("snare");
  let tink = document.getElementByClassName("tink");
  let tom = document.getElementByClassName("tom");

  if (event.boom === 'click') {
    document.getElementById("boom").play();

  } else if (event.code === 'KeyS') {
    document.getElementById("clap").play();

  } else if (event.code === 'KeyD') {
    document.getElementById("hihat").play();

  } else if (event.code === 'KeyF') {
    document.getElementById("kick").play();

  } else if (event.code === 'KeyG') {
    document.getElementById("openhat").play();

  } else if (event.code === 'KeyH') {
    document.getElementById("ride").play();

  } else if (event.code === 'KeyJ') {
    document.getElementById("snare").play();

  } else if (event.code === 'KeyK') {
    document.getElementById("tink").play();

  } else if (event.code === 'KeyL') {
    document.getElementById("tom").play();
  } else {
    // the day i find a faster way to do this it's over for you bitches
  }

});
