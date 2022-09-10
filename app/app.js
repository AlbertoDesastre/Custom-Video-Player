import { durationToSeconds } from "./helpers.js";

const app = document.querySelector("main");
const video = document.querySelector("video");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const fullscreen = document.querySelector(".fullscreen");
const progressBar = document.querySelector("progress");
const current_time = document.querySelector(".current_time");
const video_duration = document.querySelector(".video_duration");
const everyControl = document.querySelector("#section_controllers");

let isItReady = false;
let hideAndUnhide;

const readyToPlay = () => {
  video_duration.textContent = durationToSeconds(video.duration);
  isItReady = true;
};

if (video.readyState >= 2) {
  readyToPlay();
} else {
  video.addEventListener("loadeddata", readyToPlay);
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

/* Play and pause management */
play.addEventListener("click", () => {
  video.play();
  play.hidden = true;
  pause.hidden = false;
});

/* Shows controller if the mouse it's moved */
video.addEventListener("mousemove", () => {
  if (isItReady) {
    everyControl.classList.remove("please_hide");

    /* This clearTimeout must exists. If it wasn't here the hideAndUnhide
function would still be running every 2 seconds after the mouse is moved.
This would result in the controllers menu "clipping" */
    clearTimeout(hideAndUnhide);

    hideAndUnhide = setTimeout(() => {
      everyControl.classList.add("please_hide");
    }, 2000);
  }
});

pause.addEventListener("click", () => {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
});

/* Video's current time management */

video.addEventListener("timeupdate", () => {
  /*  console.log(durationToSeconds(video.currentTime)); */
  current_time.textContent = durationToSeconds(video.currentTime);

  progressBar.max = video.duration;
  progressBar.value = video.currentTime;
});
