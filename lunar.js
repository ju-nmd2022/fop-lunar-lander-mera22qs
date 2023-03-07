function setup() {
  createCanvas(800, 500);
}

let trampolineX = 300;
let trampolineY = 400;

function trampoline(trampolineX, trampolineY) {
  push();
  translate(trampolineX, trampolineY);
  fill(56, 56, 56);
  stroke(40, 40, 40);
  strokeWeight(3);
  
  rect(x - 75, y, 10, 40);
  rect(x - 5, y, 10, 40);
  rect(x + 65, y, 10, 40);
  ellipse(x, y, 150, 20);
pop();
  
}

let bunnyX = 100;
let bunnyY = 100;
let velocity = 1;
let acceleration = 0.2;
let rotation = 0;
let speed = 0;

function bunny(bunnyX, bunnyY, rotation) {
  /*body*/
  push();
  translate(bunnyX, bunnyY);
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
  
  bunnyY = bunnyY - 3;
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
  textSize(15);
  text("Play", x + 420, y + 220);
}

function infoBox() {
  fill(255, 255, 255);
  rect(x + 100, y + 50, 400, 200, 20);
  fill(0, 0, 0);
  textSize(15);
  text(
    "Oh no! The bunny jumped to high! Help it land safely on the trampoline; but remember, you only have 20 seconds...and no watch.",
    x + 120,
    y + 80,
    x + 270
  );
  text(
    "Use the arrow keys to move the bunny in all directions. Good Luck!",
    x + 120,
    y + 150,
    x + 270
  );
}

function fail() {
  fill(255, 0, 0);
  rect(x + 100, y + 50, 400, 200, 20);
  fill(0, 0, 0);
  textSize(15);
  text(
    "You were not careful enough; the bunny got hurt. Try again.",
    x + 120,
    y + 80,
    x + 270
  );
}
function win() {
  fill(0, 255, 0);
  rect(x + 100, y + 50, 400, 200, 20);
  fill(0, 0, 0);
  textSize(15);
  text("You made it; the bunny is safe!", x + 120, y + 80, x + 270);
}

function startScr() {
  nature();
  infoBox();
  butn();

  if (
    mouseIsPressed &&
    mouseX > 500 &&
    mouseX < 500 + 70 &&
    mouseY > 300 &&
    mouseY < 300 + 30
  ) {
    state = "game";
  }
}

function gameScr() {
  nature();
  trampoline(trampolineX, trampolineY);
  bunny(bunnyX, bunnyY, rotation);

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

  if (
  ) {
    state = "result";
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
  if (state === "result") {
    state = "game";
  }
}
