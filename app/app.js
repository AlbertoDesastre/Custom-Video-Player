import { durationToSeconds } from "./helpers.js";

const app = document.querySelector("main");
const video = document.querySelector("video");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const fullscreen = document.querySelector(".fullscreen");
const progressBar = document.querySelector("progress");
const current_time = document.querySelector(".current_time");
const video_duration = document.querySelector(".video_duration");

const readyToPlay = () => {
  video_duration.textContent = durationToSeconds(video.duration);
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

pause.addEventListener("click", () => {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
});

/* Video progress's management */

video.addEventListener("timeupdate", () => {
  /*  console.log(durationToSeconds(video.currentTime)); */
  current_time.textContent = durationToSeconds(video.currentTime);
});
