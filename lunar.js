function setup() {
  let canvas = createCanvas(800, 500);
}

let state = "start";

/*Background */
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
/*Sticker of approval */
function happyFace() {
  fill(0, 199, 20);
  ellipse(570, 255, 70, 70);
  fill(0, 0, 0);
  ellipse(580, 250, 10, 10);
  ellipse(550, 250, 10, 10);

  fill(0, 0, 0);
  ellipse(560, 270, 20, 10);
  fill(0, 199, 20);
  noStroke();
  ellipse(560, 266, 20, 10);
}

/*Sticker of disappointment */
function sadFace() {
  fill(255, 100, 100);
  ellipse(570, 255, 70, 70);
  fill(0, 0, 0);
  ellipse(580, 250, 10, 10);
  ellipse(550, 250, 10, 10);
  rect(560, 270, 20, 1);
}
/*Information for the winner */
function infoBoxWin() {
  fill(255, 255, 255);
  rect(250, 100 + 50, 400, 200, 20);

  fill(0, 0, 0);
  textSize(15);
  text(
    "Great job! The bunny is safe and the world is at peace!",
    280,
    180,
    330
  );
  text("Press play to restart the game", 280, 250, 330);
}

/*Information for the one who failed */
function infoBoxFail() {
  fill(255, 255, 255);
  rect(250, 100 + 50, 400, 200, 20);

  fill(0, 0, 0);
  textSize(15);
  text("The bunny tripped and got hurt, better luck next time.", 280, 180, 330);
  text("Press play and try again!", 280, 250, 330);
}

/*Game Instructions for the player */
function infoBox() {
  fill(255, 255, 255);
  rect(250, 100 + 50, 400, 200, 20);

  fill(0, 0, 0);
  textSize(15);
  text(
    "Oh no! The bunny jumped to high! Help it land safely on the trampoline.",
    280,
    180,
    330
  );
  text(
    "Use the arrow keys to move the bunny in all directions. Good Luck!",
    280,
    250,
    330
  );
}

/*Press to play the game*/
function butn() {
  fill(11, 138, 60);
  rect(540, 300, 70, 30, 29);

  fill(0, 0, 0);
  textSize(15);
  text("Play", 560, 320);

  if (
    mouseIsPressed &&
    mouseX > 540 &&
    mouseX < 540 + 70 &&
    mouseY > 300 &&
    mouseY < 300 + 30 && state === "start"
  ) {
    console.log("Mouse is pressed");
    state = "game";
  } else if (    mouseIsPressed &&
    mouseX > 540 &&
    mouseX < 540 + 70 &&
    mouseY > 300 &&
    mouseY < 300 + 30 && state === "fail"){      console.log("Mouse is pressed");
       state = "game";}
       else (    mouseIsPressed &&
        mouseX > 540 &&
        mouseX < 540 + 70 &&
        mouseY > 300 &&
        mouseY < 300 + 30 && state === "win"){
          console.log("Mouse is pressed");
          state = "game";
       }

/*Start Screen*/
function startScr() {
  nature();
  infoBox();
  butn();
}
/*trampoline goal*/
function trampoline() {
  fill(56, 56, 56);
  stroke(40, 40, 40);
  strokeWeight(3);
  rect(700 - 75, 400, 10, 40);
  rect(700 + 65, 400, 10, 40);
  rect(700 - 5, 400, 10, 40);
  ellipse(700, 400, 150, 20);
}

let speed = 2;
let bunnyX = 0;
let bunnyY = 0;

const goalX = 600;
const goalY = 390;

/*Character*/
function bunny(bunnyX, bunnyY) {
  /*body*/
  push();
  translate(bunnyX, bunnyY);
  fill(232, 232, 232);
  ellipse(bunnyX + 110, bunnyY + 25, 20, 50);
  ellipse(bunnyX + 70, bunnyY + 25, 20, 50);
  ellipse(bunnyX + 60, bunnyY + 100, 80, 70, 70);
  ellipse(bunnyX + 90, bunnyY + 60, 80, 50);
  ellipse(bunnyX + 20, bunnyY + 100, 30, 20);

  /*face*/
  fill(0, 0, 0);
  ellipse(bunnyX + 110, bunnyY + 60, 5, 10);
  ellipse(bunnyX + 78, bunnyY + 60, 5, 10);
  triangle(
    bunnyX + 100,
    bunnyY + 70,
    bunnyX + 90,
    bunnyY + 70,
    bunnyX + 95,
    bunnyY + 65
  );
  pop();
}

/*Fail Screen*/
function failScr() {
  nature();
  infoBoxFail();
  butn();
  sadFace();
}

/*Winnin Screen*/
function winScr() {
  nature();
  infoBoxWin();
  butn();
  happyFace();
}

/*Game Screen*/
function gameScr() {
  clear();
  nature();
  trampoline();
  bunny(bunnyX, bunnyY);

  bunnyY = bunnyY + speed;

  if (keyIsDown(39)) {
    bunnyX = bunnyX + 5;
  } else if (keyIsDown(37)) {
    bunnyX = bunnyX - 5;
  }
  if (keyIsDown(38)) {
    bunnyY = bunnyY - 10;
  } else if (keyIsDown(40)) {
    bunnyY = bunnyY + 5;
  }

  if (bunnyY >= goalY) {
    if (bunnyX <= goalX && bunnyX >= goalX + 100 && speed <= 5) {
      bunnyY = goalY + 10;
      state = "win";
    } else {
      state = "fail";
    }
  }
}

function draw() {
  if (state === "start") {
    startScr();
  } else if (state === "game") {
    gameScr();
  } else if (state === "win") {
    winScr();
  } else if (state === "fail") {
    failScr();
  }
}
