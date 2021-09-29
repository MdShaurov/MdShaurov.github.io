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
let endScreen = false;

// Preload resources
function preload() {
  // Font used
  font = loadFont("assets/fonts/font.TTF");

  // Title
  pong = loadImage("assets/menu/pong.png");

  // Clickable buttons
  play = loadImage("assets/menu/play.png");
  quit = loadImage("assets/menu/quit.png");
  playHover = loadImage("assets/menu/playHover.png");
  quitHover = loadImage("assets/menu/quitHover.png");

  // Game sound effects
  paddleSfx = loadSound("assets/sounds/paddle.mp3");
  wallSfx = loadSound("assets/sounds/wall.mp3");
  scoreSfx = loadSound("assets/sounds/score.mp3");

  // Game music
  gameSfx = loadSound("assets/sounds/gameSfx.mp3");
  startScreenSfx = loadSound("assets/sounds/startScreenSfx.mp3");
}

// Create a canvas the size on the window
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Main function running
function draw() {
  background(0);

  extras();
  if (!endScreen) {
    displayRect();
  }
  startScreen();
  if (!start && !endScreen) {
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

// Text and timer
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
  } else if (!start && !endScreen) {
    textSize(height / 24);
    textAlign(CENTER);
    text("Left   " + scoreL, width / 4, height / 8);
    text("Right   " + scoreR, width - width / 4, height / 8);

    textSize(height / 15);
    textAlign(CENTER);
    text(timer, width / 2, height / 10);
    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    } else if (timer <= 50) {
      endScreen = true;
    }
  }
  if (endScreen) {
    textSize(height / 24);
    textAlign(CENTER);
    text("Left   " + scoreL, width / 3, height / 2);
    text("Right   " + scoreR, width - width / 3, height / 2);

    image(play, width / 2, (height / 8) * 5, width / 6, height / 10);
    if (
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5 + height / 10 / 2
    ) {
      image(
        playHover,
        width / 2,
        (height / 8) * 5,
        (width / 6) * 1.1,
        (height / 10) * 1.1
      );
    }
    if (
      mouseIsPressed &&
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5 + height / 10 / 2
    ) {
      gameSfx.stop();
      start = true;
      startScreenSfx = true;
      gameMusic = false;
      endScreen = false;
    }

    textSize(height / 15);
    if (scoreL > scoreR) {
      text("Left  has  won!", width / 2, (height / 8) * 3);
    } else if (scoreL < scoreR) {
      text("Right  has  won!", width / 2, (height / 8) * 3);
    } else {
      text("Draw!", width / 2, (height / 8) * 3);
    }
  }
}

// Start screen UI
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

// Determines the movement of the ball
function moveBall() {
  if (move) {
    radius = height / 55;
    x = width / 2;
    y = radius * 2;
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

// Shows the rectangles on the side
function displayRect() {
  fill(255);
  rectMode(CENTER);
  rect(width / 20, rectY, width / 60, height / 7);
  rect(width - width / 20, rectY2, width / 60, height / 7);
}

// Shows the ball
function displayBall() {
  circle(x, y, radius * 2);
}

// Inputs for the control of the rectangles
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

// Center dotted line
function centerLine() {
  noStroke();
  rectMode(CENTER);
  for (let x = 0; x < 30; x++) {
    rect(width / 2, (height / 100) * x * 5, width / 210, height / 35);
  }
}

// Collision detection with the rectangles
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