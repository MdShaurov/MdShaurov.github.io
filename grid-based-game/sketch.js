// Grid Based Game
// Md Shaurov
// November 7; 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let gridSize = 10;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let objectX = 0;
let objectY = 0;
let loadLevel, sky, coin, empty, grass;

function preload() {
  // Loading level
  loadLevel = "assets/levels/level1.txt";
  lines = loadStrings(loadLevel);

  // Background
  sky = loadImage("assets/textures/sky/sky.png");

  // Coins
  coin = loadImage("assets/textures/coin/coinShine/coin1.png");

  // Blocks
  grass = loadImage("assets/textures/blocks/grass.png");
  empty = loadImage("assets/textures/blocks/empty.png");
}

function setup() {
  createCanvas(windowHeight*1.2, windowHeight*0.9);
  grid = createRandom2DArray(gridSize, gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  // grid[playerY][playerX] = 1;
}

function draw() {
  displayGrid();
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1 ) {
    grid[cellY][cellX] = 0;
  }
}


// function keyPressed() {
//   if (key === "w") {
//     playerMove(playerX, playerY-1);
//   }
//   else if (key === "a") {
//     playerMove(playerX-1, playerY);
//   }
//   else if (key === "s") {
//     playerMove(playerX, playerY+1);
//   }
//   else if (key === "d") {
//     playerMove(playerX+1, playerY);
//   }
// }

function displayGrid() {
  image(sky, 0, 0, width, height);

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        image(empty, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 1) {
        image(grass, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function readLevel() {
  if 
}
// function playerMove(newX, newY) {
//   if (newX>=0 && newY>=0 && newX<gridSize && newY<gridSize) {
//     grid[playerY][playerX] = 0;

//     playerX = newX;
//     playerY = newY;

//     grid[playerY][playerX] = 1;
//   }
// }

function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) > 50) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}