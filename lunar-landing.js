function setup() {
  createCanvas(800, 500);
}

function bunny(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(232, 232, 232);
  rect(50, 30, 50, 50, 10);
  pop();
}

function nature() {
  background(212, 126, 151);

  /*Sky ellipses*/
  fill(206, 141, 162);
  noStroke();
  ellipse(400, 150, 800, 250);

  fill(201, 151, 169);
  noStroke();
  ellipse(400, 150, 600, 200);

  /*Mountaints*/
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
}

function trampoline(x, h) {
  fill(56, 56, 56);
  stroke(40, 40, 40);
  strokeWeight(3);

  push();
  const x = h / 3;
  const y = height - 50;
  rect(x - 80, y - 100, 10, 40);
  rect(x + 105, y - 100, 10, 40);
  rect(x + 10, y - 90, 10, 40);

  push();
  translate(x, y);
  ellipse(0, 0, 200, 30);
  pop();
}
let trampolineX = 600;

function draw() {
  nature();
  bunny();
  trampoline(trampolineX, 100);

  trampolineX = trampolineX - 1;
}
