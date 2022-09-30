const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const time_passed = document.querySelector("#time_passed");
const video = document.querySelector("video");

forward.addEventListener("click", () => {
  video.currentTime = video.currentTime + 10;
});

backward.addEventListener("click", () => {
  video.currentTime = video.currentTime - 10;
});
