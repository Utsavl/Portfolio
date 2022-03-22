// declared for slider
let slidingBox = document.getElementById("slidingBox");
let heightsb = slidingBox.clientHeight;

// declared for typerwriter animation
let description = document.getElementById("description");
let descArray = [
  "FRONT-END DEVELOPER",
  "WEB DESIGNER",
  "WORDPRESS DEVELOPER",
  "VECTOR ARTIST",
  "SELF TAUGHT PROGRAMMER",
];

let descIndex = 0;
var cursorPosition = 1;

// It changes the with of slider box
function changeWidth(percentage) {
  let newWidth = 50 + percentage / 2;
  // console.log("slided %: ",newWidth);
  slidingBox.style.width = `${newWidth}vw`;
}

window.onscroll = function () {
  slideBox();
};
// Checks if page scrolled or not
function slideBox() {
  // Getting the percentage scrolled of slider box

  var gap = slidingBox.getBoundingClientRect().bottom;
  // console.log("the gap is : ",gap);

  if (gap >= 0) {
    let scrolledPercent = ((heightsb - gap) / heightsb) * 100;
    changeWidth(scrolledPercent);
  }
}

setInterval(() => {
  // This is for description animation of typewriter
  if (cursorPosition == 0) {
    descIndex += 1;
    cursorPosition = 1;
  }

  if (descIndex == 4) {
    descIndex = 0;
  }

  if (cursorPosition <= descArray[descIndex].length) {
    let txt = descArray[descIndex].slice(0, Math.abs(cursorPosition));

    description.innerHTML = txt;

    cursorPosition += 1;
  } else {
    setTimeout(() => {
      cursorPosition = -1 * (cursorPosition - 1);
    }, 800);
  }
}, 100);
