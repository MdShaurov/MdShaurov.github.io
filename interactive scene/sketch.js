// Interactive Scene
// Md Shaurov
// September 27, 2021
//
// Purpose: To create a scene with keyboard and mouse interactions.
// Extra for Experts: Add sound interations.

// Global Variables
let x;
let y;
let move = true;
let rectY;
let rectY2;
let rectHeight;
let radius;
let speedX = 3;
let speedY = 3;
let speedPlus = 0.1;
let paddleSfx;
let wallSfx;
let scoreSfx;
let start = true;
let pong;
let play;
let quit;
let playHover;
let quitHover;
let startScreenSfx;
let startMusic = true;
let font;
let gameSfx;
let gameMusic = false;
let scoreL = 0;
let scoreR = 0;
let timer = 60;

function preload() {
  font = loadFont("assets/fonts/font.TTF");
  pong = loadImage("assets/menu/pong.png");
  play = loadImage("assets/menu/play.png");
  quit = loadImage("assets/menu/quit.png");
  playHover = loadImage("assets/menu/playHover.png");
  quitHover = loadImage("assets/menu/quitHover.png");
  paddleSfx = loadSound("assets/sounds/paddle.mp3");
  wallSfx = loadSound("assets/sounds/wall.mp3");
  scoreSfx = loadSound("assets/sounds/score.mp3");
  gameSfx = loadSound("assets/sounds/gameSfx.mp3");
  startScreenSfx = loadSound("assets/sounds/startScreenSfx.mp3");
}

function setup() {
  createCanvas(720, 480);
}

function draw() {
  background(0);

  extras();
  displayRect();
  startScreen();
  if (!start) {
    if (gameMusic) {
      gameSfx.loop();
      gameMusic = false;
    }
    collision();
    control();
    moveBall();
    displayBall();
    centerLine();
  }
}

function extras() {
  textSize(height / 30);
  textAlign(LEFT);
  text("FPS   " + Math.round(frameRate()), width / 100, height - height / 100);
  if (start) {
    fill(255);
    textFont(font);
    textSize(height / 30);
    textAlign(RIGHT);
    text(
      "Credits   to   Md  Shaurov",
      width - width / 100,
      height - height / 100
    );
  } else if (!start) {
    textSize(height / 24);
    textAlign(CENTER);
    text("Left   " + scoreL, width / 4, height / 8);
    text("Right   " + scoreR, width - width / 4, height / 8);

    textSize(height / 15);
    textAlign(CENTER);
    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    }
    text(timer, width / 2, height / 10);
  }
}

function startScreen() {
  if (start) {
    rectY = height / 2;
    rectY2 = height / 2;
    rectHeight = height / 4.8;

    imageMode(CENTER);
    image(pong, width / 2, (height / 8) * 2.5, width / 3, height / 6);
    image(play, width / 2, (height / 8) * 4.5, width / 6, height / 10);
    image(quit, width / 2, (height / 8) * 5.5, width / 6, height / 10);
    if (startMusic) {
      startScreenSfx.loop();
      startMusic = false;
    }
    if (
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 4.5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 4.5 + height / 10 / 2
    ) {
      image(
        playHover,
        width / 2,
        (height / 8) * 4.5,
        (width / 6) * 1.1,
        (height / 10) * 1.1
      );
    }
    if (
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5.5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5.5 + height / 10 / 2
    ) {
      image(
        quitHover,
        width / 2,
        (height / 8) * 5.5,
        (width / 6) * 1.1,
        (height / 10) * 1.1
      );
    }
    if (
      mouseIsPressed &&
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 4.5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 4.5 + height / 10 / 2
    ) {
      startScreenSfx.stop();
      start = false;
      gameMusic = true;
    }
    if (
      mouseIsPressed &&
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5.5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5.5 + height / 10 / 2
    ) {
      startScreenSfx.stop();
      remove();
    }
  }
}

function moveBall() {
  if (move) {
    radius = height/55;
    x = width / 2;
    y = radius*2;
    move = false;
  }

  if (y < radius) {
    y = radius;
    wallSfx.play();
    speedY = -speedY;
  } else if (y > height - radius) {
    y = height - radius;
    wallSfx.play();
    speedY = -speedY;
  } else if (x < radius) {
    scoreSfx.play();
    x = width / 2;
    y = -radius;
    scoreR++;
  } else if (x > width - radius) {
    scoreSfx.play();
    x = width / 2;
    y = -radius;
    scoreL++;
  } else {
    x += speedX;
    y += speedY;
  }
}

function displayRect() {
  fill(255);
  rectMode(CENTER);
  rect(width / 20, rectY, width / 60, height / 7);
  rect(width - width / 20, rectY2, width / 60, height / 7);
}

function displayBall() {
  circle(x, y, radius * 2);
}

function control() {
  if (keyIsDown(87)) {
    if (rectY >= height / 7 / 2) {
      rectY -= 7;
    }
  }
  if (keyIsDown(83)) {
    if (rectY <= height - height / 7 / 2) {
      rectY += 7;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (rectY2 >= height / 7 / 2) {
      rectY2 -= 7;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (rectY2 <= height - height / 7 / 2) {
      rectY2 += 7;
    }
  }
}

function centerLine() {
  noStroke();
  rectMode(CENTER);
  for (let x = 0; x < 30; x++) {
    rect(width / 2, (height / 100) * x * 5, width / 210, height / 35);
  }
}

function collision() {
  if (
    x < width / 20 + width / 60 / 2 + radius &&
    y > rectY - height / 7 / 2 - radius &&
    y < rectY + height / 7 / 2 + radius
  ) {
    paddleSfx.play();
    speedX = -speedX;
  } else if (
    x > width - width / 20 - width / 60 / 2 - radius &&
    y > rectY2 - height / 7 / 2 - radius &&
    y < rectY2 + height / 7 / 2 + radius
  ) {
    paddleSfx.play();
    speedX = -speedX;
  }
}