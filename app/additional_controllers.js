const additional_controls = document.querySelector("#additional_controls");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const ten_more = document.querySelector("#ten_more");
const ten_less = document.querySelector("#ten_less");

const video = document.querySelector("video");

/* forward.addEventListener("click", () => {
  video.currentTime = video.currentTime + 10;
});

backward.addEventListener("click", () => {
  video.currentTime = video.currentTime - 10;
});
 */
additional_controls.addEventListener("dblclick", (e) => {
  const halfOfTheScreen = additional_controls.offsetWidth / 2;
  const userClickedOn = e.pageX;

  if (userClickedOn < halfOfTheScreen) {
    video.currentTime = video.currentTime - 10;
    /* In case the right side it's still showing up it immediately hides */
    forward.classList.add("hide");
    ten_more.classList.add("hide");

    /* Then it continues with the normal functioning on the left side */
    backward.classList.remove("hide");
    ten_less.classList.remove("hide");

    setTimeout(() => {
      backward.classList.add("hide");
      ten_less.classList.add("hide");
    }, 1200);
  } else {
    video.currentTime = video.currentTime + 10;
    /* In case the right side it's still showing up it immediately hides */
    backward.classList.add("hide");
    ten_less.classList.add("hide");

    /* Then it continues with the normal functioning on the left side */
    forward.classList.remove("hide");
    ten_more.classList.remove("hide");

    setTimeout(() => {
      forward.classList.add("hide");
      ten_more.classList.add("hide");
    }, 1200);
  }
});
