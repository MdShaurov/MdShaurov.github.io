// Game of Life

let grid;
let gridSize = 30;
let cellWidth, cellHeight;
let autoplay = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  if (autoplay && frameCount % 20 === 0) {
    nextTurn;
  }
  
  displayGrid();
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize, 0);
  }
  if (key === "b") {
    grid = createEmpty2DArray(gridSize, gridSize, 1);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if (key === " ") {
    nextTurn();
  }
  if (key === "p") {
    autoplay = !autoplay;
  }
}

function nextTurn() {
  let newGrid = createEmpty2DArray(gridSize, gridSize);

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      let neighbours = 0;

      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (y+i>=0 && x+j>=0 && y+i<gridSize && x+j<gridSize) {
            neighbours += grid[y+i][x+j];
          }
        }
      }

      neighbours -= grid[y][x];

      if (grid[y][x] === 1) {
        if (neighbours === 2 || neighbours === 3) {
          newGrid[y][x] = 1;
        }
        else {
          newGrid[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) {
        if (neighbours === 3) {
          newGrid[y][x] = 1;
        }
        else {
          newGrid[y][x] = 0;
        }
      }
    }
  }
  grid = newGrid;
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
}

function displayGrid() {
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else if (grid[y][x] === 1) {
        fill(0);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createRandom2DArray(rows, cols) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}

function createEmpty2DArray(rows, cols, fill) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(fill);
    }
  }
  return grid;
}