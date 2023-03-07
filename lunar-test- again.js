function setup() {
  createCanvas(800, 500);
}

function rectangle(x, y) {
  fill(255, 255, 255);
  rect(100, 100, 100, 10);
}

function circle(x, y) {
  fill(255, 220, 255);
  ellipse(x, y, 200);
}
const speed = 5;
let x = 200;
let y = 200;

function draw() {
  clear();
  circle(x, y);
  if (keyIsDown(39)) {
    x = x + speed;
  } else if (keyIsDown(37)) {
    x = x - speed;
  }
  if (keyIsDown(40)) {
    y = y + speed;
  } else if (keyIsDown(38)) {
    y = y - speed;
  }
}
