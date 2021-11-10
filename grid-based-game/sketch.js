// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// Item location change in 2D array, stopwatch, button, sound. 

// Global Variables
let grid, shuffleButton, watch, spacing; 
let restart = false;
let cols = 4;
let rows = 4;
let slideSfx;
let time = false;
let seconds = 0;
let minutes = 0;
let playSound = true;

function preload() {
  // Swap sound effect
  slideSfx = loadSound("assets/sound/slide.mp3");
}

function setup() {
  spacing = windowHeight/10.8;
  // Canvas with extra height for stopwatch
  createCanvas(cols * spacing, rows * spacing + 30);

  // Grid of the game
  grid = create2DArray(cols, rows);

  // Shuffle button
  shuffleButton = createButton("Shuffle");
  shuffleButton.mousePressed(shuffleGrid);
}

function draw() {
  background(255);

  stopwatch();
  display();
}

function display() {
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {

      // Display rectangles
      let cellY = y * spacing + 30;
      let cellX = x * spacing;
      fill(173, 216, 230);
      rect(cellX, cellY, spacing, spacing);

      // Text coordinates
      let textX = cellX + spacing / 2;
      let textY = cellY + spacing / 2;
      let num = grid[y][x];

      // Display numbers
      if (num !== 16) {
        fill(0);
        textSize(64);
        textAlign(CENTER, CENTER);
        text(num, textX, textY);
      }
    }
  }

  // Show stopwatch
  if (time) {
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    if (seconds < 10 && minutes < 10) {
      text("0" + minutes + " : 0" + seconds, width/2, 15);
    }
    else if (seconds > 9 && minutes < 10) {
      text("0" + minutes + " : " + seconds, width/2, 15);
    }
    else if (seconds < 10 && minutes > 9) {
      text(minutes + " : 0" + seconds, width/2, 15);
    }
    else if (seconds > 9 && minutes > 9) {
      text(minutes + " : " + seconds, width/2, 15);
    }
  }
}

// Mouse input
function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 30) {
    slide(mouseX, mouseY-30);
    time = true;
  }
}

// Time system
function stopwatch() {
  for (let y=0; y < grid.length; y++) {
    for (let x=0; x < grid[y].length; x++) {
      if (grid[y][x] === x + y * cols + 1) {
        watch = false;
      }
      else {
        watch = true;
      }
    }
  }

  // Time elapse
  let switchMinute;
  if (watch) {
    if (frameCount % 60 === 0) {
      if (seconds > 58) {
        seconds = 0;
        switchMinute = true;
      }
      else {
        seconds++;
      }
    }

    if (minutes > 29) {
      shuffleGrid();
    } 
    else if (switchMinute){
      switchMinute = false;
      minutes++;
    }
  }
}

function slide(x, y) {
  let cellX = Math.floor(x / spacing);
  let cellY = Math.floor(y / spacing);
  let neighbours;

  // Setting neighbours
  if (cellY === 0) {
    neighbours = [
      grid[cellY + 1][cellX],
      grid[cellY][cellX + 1],
      grid[cellY][cellX - 1]
    ];
  } else if (cellY === cols - 1) {
    neighbours = [
      grid[cellY - 1][cellX],
      grid[cellY][cellX + 1],
      grid[cellY][cellX - 1]
    ];
  } else {
    neighbours = [
      grid[cellY + 1][cellX],
      grid[cellY - 1][cellX],
      grid[cellY][cellX + 1],
      grid[cellY][cellX - 1]
    ];
  }

  // Sliding
  for (let i = 0; i < neighbours.length; i++) {
    if (neighbours[i] === 16) {
      let num = grid[cellY][cellX];

      if (playSound) {
        slideSfx.play();
      }

      if (cellY != cols - 1) {
        if (neighbours[i] == grid[cellY + 1][cellX]) {
          grid[cellY][cellX] = 16;
          grid[cellY + 1][cellX] = num;
        }
      }
      if (cellY !== 0) {
        if (neighbours[i] == grid[cellY - 1][cellX]) {
          grid[cellY][cellX] = 16;
          grid[cellY - 1][cellX] = num;
        }
      }
      if (neighbours[i] == grid[cellY][cellX + 1]) {
        grid[cellY][cellX] = 16;
        grid[cellY][cellX + 1] = num;
      }
      if (neighbours[i] == grid[cellY][cellX - 1]) {
        grid[cellY][cellX] = 16;
        grid[cellY][cellX - 1] = num;
      }
    }
  }
}

// Shuffling
function shuffleGrid() {
  playSound = false;

  for (let s = 0; s < 10000; s++) {
    slide(random(width), random(height-30));
  }

  playSound = true;
  time = false;
  seconds = 0;
  minutes = 0;
}

// Create grid
function create2DArray(cols, rows) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(x + y * cols + 1);
    } 
  }
  return grid;
}