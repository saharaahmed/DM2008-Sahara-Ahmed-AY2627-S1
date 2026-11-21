// DM2008 — Activity 1b [Ryoji Ikeda]
// Learning By Making (30 min)

let x;
let w;

function setup() {
  createCanvas(600,600);
  background(255);
  noStroke();
  fill(0);
}

function draw() {
  background(255, 8);
  fill("#ff0158")
  
  x = random(width/2);
  w = random(height/2);
  circle(mouseY,mouseX,x);

}

function keyPressed() {
  if (key === 'h') {
  saveCanvas("activity1b-image", "jpg");
  }
}