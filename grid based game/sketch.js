// Grid Based Game
// Md Shaurov
// November 7; 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let gridSize = 10;
let grid, cellWidth, cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = create2DArray(gridSize, gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  
  displayGrid();
}

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