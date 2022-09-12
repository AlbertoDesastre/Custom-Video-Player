const app = document.querySelector("main");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const progressBar = document.querySelector("progress");
const fullscreen = document.querySelector(".fullscreen");
const video = document.querySelector("video");
const everyControl = document.querySelector("#section_controllers");

let isItReady = false;
let isItPlaying = false;
let hideAndUnhide;

if (video.readyState >= 2) {
  isItReady = true;
} else {
  video.addEventListener("loadeddata", () => {
    isItReady = true;
  });
}

/* Fullscreen management */
/* Pending to create a function by itself and then call it when clicked */
fullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    /* This is a promise. Pending to study promises. */

    app.requestFullscreen().catch((error) => console.error(error));
  } else {
    document.exitFullscreen().catch((error) => console.error(error));
  }
});

/* Function that listen if user pressed ESC to exit fullscreen to show everything again. */

fullscreen.addEventListener("keyup", (e) => {
  if (document.fullscreenElement && e.key === 27) {
    document.exitFullscreen().catch((error) => console.error(error));
  }
});

/* Play and pause management */
play.addEventListener("click", () => {
  isItPlaying = true;
  video.play();
  play.hidden = true;
  pause.hidden = false;
});

/* Shows controller if the mouse it's moved */
video.addEventListener("mousemove", () => {
  if (isItReady && isItPlaying) {
    everyControl.classList.remove("please_hide");
    /* This clearTimeout must exists. If it wasn't here the hideAndUnhide
    function would still be running every 2 seconds after the mouse is moved.
    This would result in the controllers menu "clipping" */
    clearTimeout(hideAndUnhide);
    hideAndUnhide = setTimeout(() => {
      everyControl.classList.add("please_hide");
    }, 3000);
  }
});

pause.addEventListener("click", () => {
  isItPlaying = false;
  video.pause();
  play.hidden = false;
  pause.hidden = true;
});

/* Video's progress status management */
progressBar.addEventListener("click", (e) => {
  const whereDidTheUserClickOnProgressBar = e.pageX - progressBar.offsetLeft;
  const value =
    (whereDidTheUserClickOnProgressBar * progressBar.max) /
    progressBar.offsetWidth;
  video.currentTime = value;
});
