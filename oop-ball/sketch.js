// Ball OOP Demo

let jeff;
let ballArray = [];

function preload() {
  jeff = loadImage("assets/jeff.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  for (let i=0; i < 10; i++) {
    let x = random(100, width-100);
    let y = random(100, height-100);
    let theBall = new Ball(x, y, jeff);
    ballArray.push(theBall);
  }
}

function draw() {
  background(220);

  for (let theBall of ballArray) {
    theBall.move();
    theBall.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY, jeff);
  ballArray.push(theBall);
}

class Ball {
  constructor(x, y, theImage) {
    this.radius = random(20, 50);
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.theImage = theImage;
    let choice = random(100);
    if (choice < 50) {
      this.toDisplay = "circle";
    }
    else {
      this.toDisplay = "image";
    }
  }

  display() {
    if (this.toDisplay === "circle") {
      noStroke();
      fill(this.theColor);
      circle(this.x, this.y, this.radius*2);
    }
    else if (this.toDisplay === "image") {
      imageMode(CENTER);
      image(this.theImage, this.x, this.y, this.radius*2, this.radius*2);
    }
  }

  move() {
    if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
      this.dx = -this.dx;
    }
    else if (this.y - this.radius <= 0|| this.y  + this.radius >= height) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}

