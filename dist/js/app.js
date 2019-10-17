"use strict";

var canvas = document.getElementById("jsCanvas");

var painting = false;

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  painting = false;
}

function onMouseLeave(event) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", onMouseLeave);
}