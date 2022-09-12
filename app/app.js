import {
  durationToSeconds,
  getEventsMatchingVideoCurrentSecond,
} from "./helpers.js";

const video = document.querySelector("video");
const progressBar = document.querySelector("progress");
const current_time = document.querySelector(".current_time");
const video_duration = document.querySelector(".video_duration");
const eventSection = document.querySelector("#list_events");

let currentEvents = [];

const readyToPlay = () => {
  video_duration.textContent = durationToSeconds(video.duration);
};

if (video.readyState >= 2) {
  readyToPlay();
} else {
  video.addEventListener("loadeddata", readyToPlay);
}

/* Video's current time management */
video.addEventListener("timeupdate", () => {
  /*  console.log(durationToSeconds(video.currentTime)); */
  current_time.textContent = durationToSeconds(video.currentTime) + " //";

  progressBar.max = video.duration;
  progressBar.value = video.currentTime;

  const events = getEventsMatchingVideoCurrentSecond(video.currentTime);

  /* If an event must ocurre when the video has reached certain point it will be shown */
  if (JSON.stringify(events) !== JSON.stringify(currentEvents)) {
    setEvents(events);
  }
});

const setEvents = (events) => {
  currentEvents = events;

  /* The join down there basically separates every string of an array, that way the commas
won't be shown. */
  eventSection.innerHTML = `<ul>
      ${currentEvents
        .map((evento) => {
          return `<li>${evento.text}</li>`;
        })
        .join("")}
      </ul>`;
};

/* Showing events */
