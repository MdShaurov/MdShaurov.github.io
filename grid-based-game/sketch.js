// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// 

// Global Variables
let grid, gridWidth, gridHeight;
let cellWidth, cellHeight;
let start, end;

function setup() {
  createCanvas(windowHeight/2, windowHeight);

  gridWidth = 20;
  gridHeight = 9;

  grid = createEmpty2DArray(gridWidth, gridHeight);
  cellWidth = (width-0.7)/gridHeight;
  cellHeight = height/gridWidth;
}

function draw() {
  background(220);
  
  display();
}

function display() {
  for (let y=0; y<gridWidth; y++) {
    for (let x=0; x<gridHeight; x++) {
      if (grid[y][x] === 0) {
        fill()
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
      if (y === 1 && x>=3 && x<=8) {
        grid[y].push(1);
      }
      else {
        grid[y].push(0);
      }
    }
  }
  return grid;
}