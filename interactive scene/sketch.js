// Interactive Scene
// Md Shaurov
// October 04, 2021
//
// Purpose: To create a scene with keyboard and mouse interactions.
// Extra for Experts: Add sound interactions and resizable window.

// Global Variables
let ballX;
let ballY;
let move = true;
let rectY;
let rectY2;
let rectHeight;
let radius;
let speedX;
let speedY;
let speedPlus = 1.2;
let paddleSfx;
let wallSfx;
let scoreSfx;
let start = true;
let pong;
let play;
let quit;
let restart;
let playHover;
let quitHover;
let restartHover;
let startScreenSfx;
let startMusic = true;
let font;
let gameSfx;
let gameMusic = false;
let scoreL;
let scoreR;
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
  restart = loadImage("assets/menu/restart.png");
  playHover = loadImage("assets/menu/playHover.png");
  quitHover = loadImage("assets/menu/quitHover.png");
  restartHover = loadImage("assets/menu/restartHover.png");

  // Game sound effects
  paddleSfx = loadSound("assets/sounds/paddle.mp3");
  wallSfx = loadSound("assets/sounds/wall.mp3");
  scoreSfx = loadSound("assets/sounds/score.mp3");

  // Game music
  gameSfx = loadSound("assets/sounds/gameSfx.mp3");
  startScreenSfx = loadSound("assets/sounds/startScreenSfx.mp3");
}

// Create resizable canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
}

// Draw function
function draw() {
  background(0);

  main();
  displayRect();
  startScreen();
  textOnScreen();
}

// Main function running when game starts
function main() {
  if (!start && !endScreen) {
    if (gameMusic) {
      gameSfx.loop();
      gameMusic = false;
    }
    collision();
    control();
    centerLine();
    moveBall();
    displayBall();
  }
}

// Text and timer
function textOnScreen() {
  // Framerate counter
  noStroke();
  fill(255);
  textSize(height / 30);
  textAlign(LEFT);
  text("FPS   " + Math.round(frameRate()), width / 100, height - height / 100);

  // Credits & keeping score
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
    text(timer, width / 2, height / 16);

    // Timer on screen
    if (frameCount % 60 === 0 && timer > 0) {
      timer--;
    } else if (timer <= 0) {
      endScreen = true;
    }

    // Gradual speed increase
    if (frameCount % 60 === 0 && timer === 50) {
      speedX *= speedPlus;
      speedY *= speedPlus;
    } else if (frameCount % 60 === 0 && timer === 40) {
      speedX *= speedPlus;
      speedY *= speedPlus;
    } else if (frameCount % 60 === 0 && timer === 30) {
      speedX *= speedPlus;
      speedY *= speedPlus;
    } else if (frameCount % 60 === 0 && timer === 20) {
      speedX *= speedPlus;
      speedY *= speedPlus;
    }
  }

  // End of match screen
  if (endScreen) {
    noStroke();
    fill(255);
    textSize(height / 24);
    textAlign(CENTER);
    text("Left   " + scoreL, width / 3, height / 2);
    text("Right   " + scoreR, width - width / 3, height / 2);

    image(restart, width / 2, (height / 8) * 5, width / 6, height / 10);

    // Restart button mouse hover
    if (
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5 + height / 10 / 2
    ) {
      image(
        restartHover,
        width / 2,
        (height / 8) * 5,
        (width / 6) * 1.1,
        (height / 10) * 1.1
      );
    }

    // Restart button interaction
    if (
      mouseIsPressed &&
      mouseX >= width / 2 - width / 6 / 2 &&
      mouseX <= width / 2 + width / 6 / 2 &&
      mouseY >= (height / 8) * 5 - height / 10 / 2 &&
      mouseY <= (height / 8) * 5 + height / 10 / 2
    ) {
      setTimeout(function() {
      start = true;
      gameMusic = false;
      endScreen = false;
      gameSfx.stop();
      }, 100)
      startMusic = true;
    }

    // Finished match results
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
  if (start && !endScreen) {
    rectY = height / 2;
    rectY2 = height / 2;
    rectHeight = height / 4.8;

    imageMode(CENTER);
    image(pong, width / 2, (height / 8) * 2.5, width / 3, height / 6);
    image(play, width / 2, (height / 8) * 4.5, width / 6, height / 10);
    image(quit, width / 2, (height / 8) * 5.5, width / 6, height / 10);

    // Music on start screen
    if (startMusic) {
      startScreenSfx.loop();
      startMusic = false;
    }

    // Play button mouse hover
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

    // Quit button mouse hover
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

    // Play button interaction
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
      ballX = width/2;
      ballY = radius;
      scoreL = 0;
      scoreR = 0;
      timer = 60;
      speedX = height/150;
      speedY = height/150;
    }

    // Quit button interaction
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

  // Setting initial coordinates and radius
  if (move) {
    radius = height / 70;
    ballX = width / 2;
    ballY = radius * 2;
    move = false;
  }

  // Ball interaction with edges of screen
  if (ballY < radius) {
    ballY = radius;
    wallSfx.play();
    speedY = -speedY;
  } else if (ballY > height - radius) {
    ballY = height - radius;
    wallSfx.play();
    speedY = -speedY;
  } else if (ballX < radius) {
    scoreSfx.play();
    ballX = width / 2;
    ballY = -radius;
    scoreR++;
  } else if (ballX > width - radius) {
    scoreSfx.play();
    ballX = width / 2;
    ballY = -radius;
    scoreL++;
  } else {
    ballX += speedX;
    ballY += speedY;
  }
}

// Shows the rectangles on the side
function displayRect() {
  if (!endScreen) {
    fill(255);
    rectMode(CENTER);
    rect(width / 20, rectY, width / 100, height / 7);
    rect(width - width / 20, rectY2, width / 100, height / 7);
  }
}

// Shows the ball
function displayBall() {
  fill(255);
  noStroke();
  circle(ballX, ballY, radius * 2);
}

// Inputs for the control of the rectangles
function control() {
  if (keyIsDown(87)) {
    if (rectY >= height / 7 / 2) {
      rectY -= height/68;
    }
  }
  if (keyIsDown(83)) {
    if (rectY <= height - height / 7 / 2) {
      rectY += height/68;
    }
  }
  if (keyIsDown(UP_ARROW)) {
    if (rectY2 >= height / 7 / 2) {
      rectY2 -= height/68;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (rectY2 <= height - height / 7 / 2) {
      rectY2 += height/68;
    }
  }
}

// Center dashed line & box around timer
function centerLine() {
  rectMode(CENTER);
  noStroke();
  fill(255);
  for (let i = 0; i < 30; i++) {
    rect(width / 2, (height / 100) * i * 5, width / 400, height / 35);
  }
  stroke(255);
  fill(0);
  rect(width / 2, height / 50, width / 6, height / 8);
}

// Collision detection
function collision() {
  if (
    ballX < width / 20 + width / 100 / 2 + radius &&
    ballX > width / 20 - width / 100 / 2 - radius &&
    ballY > rectY - height / 7 / 2 - radius &&
    ballY < rectY + height / 7 / 2 + radius
  ) {
    ballX = width / 20 + width / 100 / 2 + radius;
    paddleSfx.play();
    speedX = -speedX;
  } else if (
    ballX < width - width / 20 + width / 100 / 2 + radius &&
    ballX > width - width / 20 - width / 100 / 2 - radius &&
    ballY > rectY2 - height / 7 / 2 - radius &&
    ballY < rectY2 + height / 7 / 2 + radius
  ) {
    ballX = width - width / 20 - width / 100 / 2 - radius;
    paddleSfx.play();
    speedX = -speedX;
  }
}