// Grid Based Game
// Md Shaurov
// November 7; 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let grid;
let BG;
let grass, coin, mystery, fly, player1, slime, empty;
let gridHeight, gridWidth;
let cellWidth, cellHeight;
let levelToLoad;
let lines;

function preload() {
  // Read level day
  levelToLoad = "assets/levels/level1.txt";
  lines = loadStrings(levelToLoad);

  //load background
  BG = loadImage("assets/textures/background/sky.png");

  //load tile images
  grass = loadImage("assets/textures/blocks/grass.png");
  coin = loadImage("assets/textures/coin/coin.png");
  mystery = loadImage("assets/textures/blocks/mystery.png");
  fly = loadImage("assets/textures/mobs/fly.png");
  player1 = loadImage("assets/textures/player/player1.png");
  slime = loadImage("assets/textures/mobs/slime.png");
  empty = loadImage("assets/textures/blocks/empty.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(windowWidth, windowHeight);

  gridHeight = lines.length;
  gridWidth = lines[0].length;

  cellWidth = width / gridWidth;
  cellHeight = height / gridHeight;

  grid = createEmpty2dArray(gridWidth, gridHeight);

  // 
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      let cellType = lines[y][x];
      grid[y][x] = cellType;
    }
  }
}

function draw() {
  display();
}

function display() {
  image(BG, 0, 0, width, height);

  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      showTile(grid[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "#") {
    image(grass, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else if (location === "C") {
    image(coin, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else if (location === "B") {
    image(box, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else if (location === "F") {
    image(fly, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else if (location === "P") {
    player[x] = grid[y][x];
    player[x] = grid[y];
    image(player1, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else if (location === "S") {
    image(slime, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
  }
  else {
    image(empty, x * cellWidth, y * cellHeight, cellWidth, cellHeight);
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