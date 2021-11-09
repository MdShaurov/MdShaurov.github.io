// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// Item location change in 2D array, stopwatch implementation, button implementation, sound. 

// Global Variables
let grid, shuffleButton, watch; 
let restart = false;
let cols = 4;
let rows = 4;
let spacing = 100;
let slideSfx;
let seconds = 0;
let minutes = 0;
let time = false;
let playSound = true;

function preload() {
  // Swap sound effect
  slideSfx = loadSound("assets/sound/slide.mp3")
}

function setup() {

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
      let cellY = x * spacing + 30;
      let cellX = y * spacing;
      fill(173, 216, 230);
      rect(cellX, cellY, spacing, spacing);

      // Text coordinates
      let textX = cellX + spacing / 2;
      let textY = cellY + spacing / 2;
      let num = grid[x][y];

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
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    slide(mouseX, mouseY);
    time = true;
  }
}

function stopwatch() {

  // Checking if board is arranged correctly
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === x + y * cols + 1) {
        watch = false;
      }
      else {
        watch = true;
      }
    }
  }

  // Working watch
  if (watch) {
    if (frameCount % 60 === 0) {
      if (seconds > 58) {
        seconds = 0;
      }
      else {
        seconds++;
      }
    }

    if (frameCount % 3600 === 0) {
      if (minutes > 58) {
        shuffleGrid();
      }
      else {
        minutes++
      }
    }
  }
  blocks(0);
}

function slide(x, y) {
  let cellX = floor(y / spacing);
  let cellY = floor(x / spacing);
  let neighbours;

  // Setting neighbours
  if (cellX === 0) {
    neighbours = [
      grid[cellX + 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  } else if (cellX === cols - 1) {
    neighbours = [
      grid[cellX - 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  } else {
    neighbours = [
      grid[cellX + 1][cellY],
      grid[cellX - 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  }
  
  // Sliding
  for (let i = 0; i < neighbours.length; i++) {
    if (neighbours[i] === 16) {
      let num = grid[cellX][cellY];
      if (playSound) {
        slideSfx.play();
      }

      if (cellX !== cols - 1) {
        if (neighbours[i] === grid[cellX + 1][cellY]) {
          grid[cellX][cellY] = 16;
          grid[cellX + 1][cellY] = num;
        }
      }
      if (cellX !== 0) {
        if (neighbours[i] === grid[cellX - 1][cellY]) {
          grid[cellX][cellY] = 16;
          grid[cellX - 1][cellY] = num;
        }
      }
      if (neighbours[i] === grid[cellX][cellY + 1]) {
        grid[cellX][cellY] = 16;
        grid[cellX][cellY + 1] = num;
      }
      if (neighbours[i] === grid[cellX][cellY - 1]) {
        grid[cellX][cellY] = 16;
        grid[cellX][cellY - 1] = num;
      }
    }
  }
}

// Shuffling
function shuffleGrid() {
  playSound = false;

  for (let s = 0; s < 10000; s++) {
    slide(random(cols * spacing), random(rows * spacing));
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