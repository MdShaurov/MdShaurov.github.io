// Character In Grid

let grid;
let gridSize = 20;
let cellWidth, cellHeight;
let level;
let playerX;
let playerY;

function preload() {
  level = loadJSON("assets/level1.json"); //assumes gridSize is 20
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
  if (key === "s") {
    tryToMoveTo(playerX, playerY+1);
  }
}

function tryToMoveTo(newX, newY) {
  playerX = newX;
  playerY = newY;
  grid[playerY][playerX] = 9;
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
        fill("white");
      }
      if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}