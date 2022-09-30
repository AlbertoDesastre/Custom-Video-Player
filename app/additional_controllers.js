const additional_controls = document.querySelector("#additional_controls");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
/* const ten_more = document.querySelector("#ten_more");
const ten_less = document.querySelector("#ten_less"); */

const video = document.querySelector("video");

const hideSide = (direction) => {
  if (direction === "right") {
    forward.classList.add("hide");
    /*    ten_more.classList.add("hide"); */
  }

  if (direction === "left") {
    backward.classList.add("hide");
    /*     ten_less.classList.add("hide"); */
  }
};

const showUpSide = (direction) => {
  if (direction === "right") {
    forward.classList.remove("hide");
    /*   ten_more.classList.remove("hide"); */
  }

  if (direction === "left") {
    backward.classList.remove("hide");
    /*     ten_less.classList.remove("hide"); */
  }
};

additional_controls.addEventListener("dblclick", (e) => {
  const halfOfTheScreen = additional_controls.offsetWidth / 2;
  const userClickedOn = e.pageX;

  if (userClickedOn < halfOfTheScreen) {
    video.currentTime = video.currentTime - 10;
    /* In case the right side it's still showing up it immediately hides */
    hideSide("right");

    /* Then it continues with the normal functioning on the left side */
    showUpSide("left");

    setTimeout(() => {
      hideSide("left");
    }, 1200);
  } else {
    video.currentTime = video.currentTime + 10;
    /* In case the right side it's still showing up it immediately hides */
    hideSide("left");

    /* Then it continues with the normal functioning on the left side */
    showUpSide("right");

    setTimeout(() => {
      hideSide("right");
    }, 1200);
  }
});
