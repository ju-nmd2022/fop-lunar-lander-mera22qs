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

function startScreen() {}

function gameScreen() {
  fill(0, 0, 0);
  ellipse(233, 100, 30, 40);
}

function resultScreen() {
  background(127, 185, 211);
  text("Result");
}

let state = "start";
let gameTimer = 0;

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    gameTimer = gameTimer + 1;
    if (gameTimer >= 800) {
      gameTimer = 0;
      state = "result";
    }
  } else if (state === "result") {
    resultScreen();
  }
}

function mouseClicked() {
  if (state === "start") {
    state = "game";
  } else if (state === "result") {
    state = "game";
  }
}

/*following lines of code () code was inspired by the video lecture move a car with the keyboard by Garrit
function bunny(x, y, rotation) {
    push();
    translate(x, y);
    rotate(rotation);
    fill(232, 232, 232);
    rect(-50, -30, 50, 50, 10);
    pop();
  }
  
  let x = 100;
  let y = 100;
  let rotation = 0;
  let speed = 0;
  
  function draw() {
    background(212, 126, 151);
    bunny(x, y, rotation);
  
    x = x + Math.cos(rotation) * speed;
    y = y + Math.sin(rotation) * speed;
  
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
  }*/
