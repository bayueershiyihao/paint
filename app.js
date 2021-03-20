const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

const buttons = document.querySelectorAll("button");
const range = document.querySelector("input");
const text = document.querySelector(".text");

text.value = range.value;

let boolean = false;
let brushStyle = "black";
let size = 10;

function arcDraw() {
  function moveHandler(e) {
    const x = e.layerX;
    const y = e.layerY;

    if (boolean) {
      ctx.beginPath();
      ctx.arc(x, y, size, Math.PI * 2, 0, false);
      ctx.fillStyle = brushStyle;
      ctx.fill();
    }
  }

  function downHandler() {
    boolean = true;
  }

  function upHandler() {
    boolean = false;
  }

  canvas.addEventListener("mousedown", downHandler);
  canvas.addEventListener("mousemove", moveHandler);
  canvas.addEventListener("mouseup", upHandler);
}

buttons.forEach((e) => {
  e.addEventListener("click", (item) => {
    const target = item.target;
    if (target.classList.contains("red")) {
      brushStyle = "red";
    }
    if (target.classList.contains("blue")) {
      brushStyle = "blue";
    }
    if (target.classList.contains("green")) {
      brushStyle = "green";
    }
    if (target.classList.contains("orange")) {
      brushStyle = "orange";
    }
  });
});

function changeHandler() {
  size = range.value;
  text.value = range.value;
}

function init() {
  arcDraw();
  range.addEventListener("change", changeHandler);
}

init();
