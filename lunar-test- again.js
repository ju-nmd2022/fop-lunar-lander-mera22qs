function setup() {
  createCanvas(800, 500);
}
let goal = 400;
let speed = 2;
let boxX = 10;
let boxY = 10;
let state = "start";

function loft() {
  fill(255, 255, 255);
  rect(100, 200, 100, 10);
}

function box(boxX, boxY) {
  push();
  translate(boxX, boxY);
  fill(255, 220, 255);
  rect(boxX, boxY, 100);
  pop();
}

function startScr() {
  clear();
  settings();
  loft();
}

function settings() {
  loft();
  box(boxX, boxY);
  boxY = boxY + speed;

  if (keyIsDown(39)) {
    boxX = boxX + 5;
  } else if (keyIsDown(37)) {
    boxX = boxX - 5;
  }
  if (keyIsDown(38)) {
    boxY = boxY - 10;
  } else if (keyIsDown(40)) {
    boxY = boxY + 5;
  }
}

function failScr() {}

function winScr() {}

function draw() {
  if (state === "start") {
    startScr();
  } else if (state === "game") {
    settings();
  } else if (state === "win") {
    winScr();
  } else if (state === "fail") {
    failScr();
  }
}
