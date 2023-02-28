function startScreen() {
  background(212, 126, 151);
  text("Start", 200, 100);
  fill(255, 255, 255);
  ellipse(400, 300, 334);
}

function gameScreen() {
  background(212, 126, 151);
  text("Game");
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
    if (gameTimer >= 100) {
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
