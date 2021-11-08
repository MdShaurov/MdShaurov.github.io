// Grid Based Game
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Global Variables
let grid, shuffleButton; 
let restart = false;
let cols = 4;
let rows = 4;
let spacing = 100;


function setup() {
  createCanvas(cols * spacing, rows * spacing);

  // Grid of the game
  grid = create2DArray(cols, rows);

  // Shuffle button
  shuffleButton = createButton("Shuffle");
  shuffleButton.mousePressed(shuffleGrid);
}

function draw() {
  background(255);
  
  display();
  if (restart === true && grid === [1, 2, 3, 4], [5, 6, 7, 8] , [9, 10, 11, 12], [13, 14, 15, 0]) {
  }
}

function display() {
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {

      // Display rectangles
      let cellY = x * spacing;
      let cellX = y * spacing;
      fill("turquoise");
      rect(cellX, cellY, spacing, spacing);

      // Text coordinates
      let textX = cellX + spacing / 2;
      let textY = cellY + spacing / 2;
      let num = grid[y][x];

      // Display numbers
      if (num !== 0) {
        fill(0);
        textSize(64);
        textAlign(CENTER, CENTER);
        text(num, textX, textY);
      }
    }
  }
}

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    slide(mouseX, mouseY);
  }
}

function slide(x, y) {
  let cellX = floor(x / spacing);
  let cellY = floor(y / spacing);
  let num = grid[cellX][cellY];
  let neighbours;

  if (cellX === 0) {
    neighbours = [
      grid[cellX + 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  } else if (cellX === cols - 1) {
    neighbours = [
      grid[cellX - 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  } else {
    neighbours = [
      grid[cellX + 1][cellY],
      grid[cellX - 1][cellY],
      grid[cellX][cellY + 1],
      grid[cellX][cellY - 1]
    ];
  }
  for (let i = 0; i < neighbours.length; i++) {
    if (neighbours[i] === 0) {
      let temp = grid[cellX][cellY];
      if (cellX != cols - 1) {
        if (neighbours[i] === grid[cellX + 1][cellY]) {
          grid[cellX][cellY] = 0;
          grid[cellX + 1][cellY] = temp;
        }
      }
      if (cellX != 0) {
        if (neighbours[i] === grid[cellX - 1][cellY]) {
          grid[cellX][cellY] = 0;
          grid[cellX - 1][cellY] = temp;
        }
      }
      if (neighbours[i] === grid[cellX][cellY + 1]) {
        grid[cellX][cellY] = 0;
        grid[cellX][cellY + 1] = temp;
      }
      if (neighbours[i] === grid[cellX][cellY - 1]) {
        grid[cellX][cellY] = 0;
        grid[cellX][cellY - 1] = temp;
      }
    }
  }
}

function shuffleGrid() {
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < rows; x++) {
      grid[y][x] = y + x * cols + 1;
      if (grid[y][x] === cols * rows) {
        grid[y][x] = 0;
      }
    }
  }
  for (let k = 0; k < 10000; k++) {
    slide(random(width), random(height));
  }
}

function create2DArray(cols, rows) {
  let grid = [];
  for (let y=0; y<rows; y++) {
    grid.push([]);
    for (let x=0; x<cols; x++) {
      grid[y].push(y + x * cols + 1);
      if (grid[y][x] === rows*cols) {
        grid[y][x] = 0;
      }
    } 
  }
  return grid;
}