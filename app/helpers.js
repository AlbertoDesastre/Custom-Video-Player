import { events } from "./events.js";

export const durationToSeconds = (duration) => {
  return new Date(duration * 1000).toISOString().slice(14, 19);
};

export const getEventsMatchingVideoCurrentSecond = (videoCurrentSecond) => {
  /* CAUTION! I don't pass the events as a parameter, in fact, as I imported them earlier
  in the code, I cand directly refer to them as I'm doing the filter.
  Very interesting to make more scalable or at least cleaner code. */
  return events.filter(
    (event) =>
      videoCurrentSecond >= event.from && videoCurrentSecond <= event.to
  );
};
