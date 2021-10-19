// Traffic Light Starter Code
// Md Shaurov
// September 29, 2021

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let switched = 0;
let light = 0;
let redDuration = 2500;
let greenDuration = 3500;
let yellowDuration = 1000;

function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);
  
  if(light === 2 && millis() > switched + redDuration) {
    light = 0;
    switched = millis();
  }
  else if (light === 0 && millis() > switched + yellowDuration) {
    light = 1;
    switched = millis();
  }
  else if (light === 1 && millis() > switched + greenDuration) {
    light = 2;
    switched = millis();
  }

  //lights
  if (light === 2) {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (light === 1) {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (light === 0) {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}