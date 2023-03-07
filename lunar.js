function setup() {
  createCanvas(800, 500);
}

function nature() {
  background(212, 126, 151);
  push();

  /*Sky ellipses*/
  fill(206, 141, 162);
  noStroke();
  ellipse(400, 150, 800, 250);

  fill(201, 151, 169);
  noStroke();
  ellipse(400, 150, 600, 200);

  /*Mountains*/
  fill(135, 127, 168);
  stroke(112, 103, 165);
  triangle(550, 301, 674, 130, 800, 301);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  triangle(634, 184, 674, 130, 714, 184);

  fill(135, 127, 168);
  stroke(112, 103, 165);
  triangle(-2, 300, 141, 61, 282, 301);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  triangle(105, 118, 141, 62, 174, 118);

  fill(135, 127, 168);
  stroke(112, 103, 165);
  triangle(231, 301, 412, 2, 591, 301);
  fill(255, 255, 255);
  stroke(255, 255, 255);
  triangle(375, 61, 412, 2, 449, 61);

  fill(151, 198, 159);
  noStroke();
  rect(0, 300, 800, 500);

  pop();
}

function butn() {
  fill(255, 255, 0);
  rect(x + 400, y + 200, 70, 30, 29);

  fill(0, 0, 0);
  textSize(12);
  text("Play", x + 420, y + 220);
}

function infoBox() {
  fill(255, 255, 255);
  rect(x + 100, y + 50, 400, 200, 20);
}

let trampolineX = 300;

function trampoline(x) {
  fill(56, 56, 56);
  stroke(40, 40, 40);
  strokeWeight(3);

  rect(x - 75, 400, 10, 40);
  rect(x + 65, 400, 10, 40);
  rect(x - 5, 400, 10, 40);
  ellipse(x, 400, 150, 20);
}

function bunny(x, y, rotation) {
  /*body*/
  push();
  translate(x, y);
  rotate(rotation);
  fill(232, 232, 232);
  ellipse(x - 30, y + 30, 80, 50);
  ellipse(x + 20, y - 35, 20, 50);
  ellipse(x - 15, y - 35, 20, 50);
  ellipse(x, y, 70, 40, 40);
  ellipse(x - 70, y + 30, 30, 20);

  fill(0, 0, 0);
  ellipse(x - 15, y, 5, 10);
  ellipse(x + 15, y, 5, 10);
  triangle(x + 3, y + 10, x - 3, y + 10, x, y + 5);
  pop();
}

let x = 100;
let y = 100;
let rotation = 0;
let speed = 0;

let bunnyY = 100;
let velocity = 1;
let acceleration = 0.2;

function startScr() {
  nature();
  infoBox();
  butn();
}

function gameScr() {
  nature();
  trampoline(trampolineX);
  bunny(x, bunnyY, rotation);

  trampolineX = trampolineX + 3;

  x = x + Math.cos(rotation) * speed;
  bunnyY = bunnyY + Math.sin(rotation) * speed;

  if (keyIsDown(38)) {
    speed = 5;
  } else if (keyIsDown(40)) {
    speed = -5;
  } else {
    speed = 0;
  }
  if (keyIsDown(37)) {
    rotation = rotation - 0.05;
  } else if (keyIsDown(39)) {
    rotation = rotation + 0.05;
  }
}

function resultScr() {
  nature();
}

let state = "start";

function draw() {
  if (state === "start") {
    startScr();
  } else if (state === "game") {
    gameScr();
  } else if (state === "result") {
    resultScr();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }
}
