"use strict";

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#111111";
ctx.lineWidth = 2.5;

var painting = false;

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function handleColorClick(event) {
  var bgColor = event.target.style.backgroundColor;
  ctx.strokeStyle = bgColor;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(function (color) {
  color.addEventListener("click", handleColorClick);
});