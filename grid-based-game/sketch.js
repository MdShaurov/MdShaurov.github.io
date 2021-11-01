// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// 

// Global Variables
let grid, gridWidth, gridHeight;
let cellWidth, cellHeight;
let autoPlay = false;
let gun;

function setup() {
  createCanvas(windowHeight, windowHeight);

  gridWidth = 20;
  gridHeight = 9;

  grid = createEmpty2DArray(gridWidth, gridHeight);
  cellWidth = width/gridWidth;
  cellHeight = height/gridHeight;
}

function draw() {
  background(220);
  
  display();
}

function display() {
  for (let y=0; y<gridHeight; y++) {
    for (let x=0; x<gridWidth; x++) {
      if (grid[y][x] === 0) {
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}