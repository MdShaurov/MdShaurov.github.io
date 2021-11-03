// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// 

// Global Variables
let grid, gridWidth, gridHeight;
let cellWidth, cellHeight;
let spawnBlock;
let start, end;

function setup() {
  createCanvas(windowHeight/2, windowHeight);

  gridWidth = 9;
  gridHeight = 20;

  grid = baseGrid(gridWidth, gridHeight);
  cellWidth = (width-0.7)/gridWidth;
  cellHeight = height/gridHeight;
}

function draw() {
  background(220);
  

  display();
}

function display() {
  for (let y=0; y<gridHeight; y++) {
    for (let x=0; x<gridWidth; x++) {
      if (grid[y][x] === 1) {
        fill(0);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else {
        fill(255);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function update() {
  for (let y=0; y<gridHeight; y++) {
    for (let x=0; x<gridWidth; x++) {
      if (grid[y][x] === 1 && y !== 7) {
        if (grid[y+1][x] !== 1) {

          grid[y][x] = 0;
          grid[y+1][x] = 1;
        }
      }
    }
  }
}

function baseGrid(cols, rows) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      if (y === 1 && x>=3 && x<=5) {
        grid[y].push(1);
      }
      else {
        grid[y].push(0);
      }
    }
  }

  return grid;
}