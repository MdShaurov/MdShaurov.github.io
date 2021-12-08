// Click Local Storage

let clickCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // Current clicks
  textSize(42);
  fill("black");
  text(clickCount, width/2, height/2);

  // Highest clicks
  fill("red");
  text(getItem("highestClick"), 100, 100);
}

function mousePressed() {
  clickCount++;
  if (clickCount > getItem("highestClick")) {
    storeItem("highestClick", clickCount);
  }
}