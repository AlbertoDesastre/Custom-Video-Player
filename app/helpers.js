export const durationToSeconds = (duration) => {
  return new Date(duration * 1000).toISOString().slice(14, 19);
};
