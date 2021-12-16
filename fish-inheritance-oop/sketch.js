// Aquarium

let theCreatures = [];
let clownfishImage, octopusImg;

function preload() {
  clownfishImage = loadImage("assets/clownfish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i<50; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(random(width), random(height), 70, octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(width), random(height), 70, clownfishImage);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background(220);

  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = 2;
  }

  update() {
    this.x += this.speed;
    this.y += sin(this.x / 50);

    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.theImage = theImage;
    this.yTime = 1000;
  }

  update() {
    // this.x += 4;
    // this.y = noise(this.yTime)*height;
    // this.yTime += random(0.001, 0.005);

    this.x += random(0.1, 3);
    this.y = noise(this.x/300, second()/600) * height;

    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    image(this.theImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.someImage = someImage;
  }

  display() {
    image(this.someImage, this.x, this.y, this.size, this.size);
  }
}