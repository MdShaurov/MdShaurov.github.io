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

function setup() {
  createCanvas(windowHeight*0.9, windowHeight*0.9);
  grid = create2DArray(gridSize, gridSize);
  cellWidth = (width-1)/gridSize;
  cellHeight = (height-1)/gridSize;

  // grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  
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
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      if (grid[y][x] === 1) {
        fill(0);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

// function playerMove(newX, newY) {
//   if (newX>=0 && newY>=0 && newX<gridSize && newY<gridSize) {
//     grid[playerY][playerX] = 0;

//     playerX = newX;
//     playerY = newY;

//     grid[playerY][playerX] = 1;
//   }
// }

function create2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}