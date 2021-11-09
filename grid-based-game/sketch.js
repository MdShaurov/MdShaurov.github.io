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
  blocks(0);
}

function update() {
  for (let y=0; y<gridHeight; y++) {
    for (let x=0; x<gridWidth; x++) {
      if (grid[y][x] === 1 && y !== 8) {
        if (grid[y+1][x] !== 1) {

          grid[y][x] = 0;
          grid[y+1][x] = 1;
        }
      }
    }
  }
}

function blocks(choice) {
  if (choice === 0) {
    grid.shift(
      [0, 0, 0, 0, 0, 0, 0]
    )
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
      grid[y].push(0);
    }
  }
  return grid;
}