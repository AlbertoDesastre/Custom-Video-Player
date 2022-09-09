const app = document.querySelector("main");
const video = document.querySelector("video");
const play = document.getElementsByClassName("play");
const pause = document.getElementsByClassName("pause");
const fullscreen = document.getElementsByClassName("fullscreen");
const progressBar = document.querySelector("progress");
const current_time = document.getElementsByClassName("current_time");
const video_duration = document.getElementsByClassName("video_duration");

console.log(video?.readyState);
