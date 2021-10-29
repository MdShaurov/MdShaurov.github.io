// Grid Based Game
// Md Shaurov
// November 5, 2021
//
// Extra for Experts:
// Uses classes to interact

// Global Variables
let grid, cellType;
let playerX, playerY;
let player, brick, grass, crate, finish;
let gridHeight, gridWidth;
let cellWidth, cellHeight;
let levelToLoad, lines;

function preload() {
  // Read level data
  levelToLoad = "assets/levels/level1.txt";
  lines = loadStrings(levelToLoad);

  // Load environment images
  grass = loadImage("assets/textures/blocks/grass.png");
  player = loadImage("assets/textures/player/player1.png");
  finish = loadImage("assets/textures/blocks/empty.png");
}

function setup() {
  // Canvas stays a square
  createCanvas(windowHeight*0.9, windowHeight*0.9);

  gridHeight = lines.length;
  gridWidth = lines[0].length;

  cellWidth = width / gridWidth;
  cellHeight = height / gridHeight;

  grid = createEmpty2dArray(gridWidth, gridHeight);

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      cellType = lines[y][x];
      grid[y][x] = cellType;

      if (grid[y][x] === "P") {
        playerX = grid[y][x];
        playerY = grid[y];
      }
    }
  }
}

function draw() {
  background(220);

  display();
}

function display() {
  for (let y=0; y<gridHeight; y++) {
    for (let x=0; x<gridWidth; x++) {
      showImage(grid[y][x], x, y);
    }
  }
}

function keyPressed() {
  if (key === "w") {
    tryToMove(playerX, playerY-1);
    console.log(grid);
  }
  else if (key === "a") {
    tryToMove(playerX-1, playerY);
  }
  else if (key === "s") {
    tryToMove(playerX+1, playerY);
  }
  else if (key === "d") {
    tryToMove(playerX, playerY+1);
  }
}
 
function tryToMove(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridWidth && newY < gridHeight) {
    if (grid[newY][newY] === ".") { //if new spot is empty
      //reset current player spot to empty
      grid[playerX][playerY] = ".";
    
      playerX = newX;
      playerY = newY;
    
      //set new player spot to red
      grid[playerX][playerY] = "P";
    }
  }
}

function showImage(location, x, y) {
  if (location === "P") {
    image(player, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let grid = [];
  for (let y = 0; y < rows; y++) {
    grid.push([]);
    for (let x = 0; x < cols; x++) {
      grid[y].push(0);
    }
  }
  return grid;
}