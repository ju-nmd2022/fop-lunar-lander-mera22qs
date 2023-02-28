function bunny(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(255, 155, 0);
  rect(-50, -30, 100, 60, 10);
  fill(0, 0, 0);
  rect(0, -25, 15, 50, 5);
  pop();
}

let x = 100;
let y = 100;
let rotation = 0;
let speed = 0;

function draw() {
  background(255, 255, 255);
  bunny(x, y, rotation);

  x = x + Math.cos(rotation) + speed;
  y = y + Math.sin(rotation) + speed;

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
