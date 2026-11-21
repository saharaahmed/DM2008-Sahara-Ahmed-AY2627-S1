// DM2008 — Activity 2a
// Mode Switch (20 min)
//
// Use keys 1, 2, 3 to switch between at least 3 modes.
// Each mode should change more than just the background — think fill, size, or motion.
//
// Stretch: add a 4th mode, or make the ellipse change shape between modes.

let x = 0;       // ellipse x-position
let size = 50;   // ellipse size
let bgColor;     // background color, changed by key presses
let a = 0;


function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  background(bgColor);
  fill(a);
  noStroke()
  
  ellipse(x, height / 2, size);

  x += 2;

  if (x > width + size / 2) {
    x = 0;
  }

}

function mouseClicked() {
  if (a === 0) {
    a = "#ff0158";
  } else {
    a = 0;
  }
  return false;
}

// Keys 1, 2, 3 change the background color
function keyPressed() {
  switch (key) {
    case "1":
      bgColor = color(200, 100, 100);
      mouseClicked()
      break; // red
    case "2":
      bgColor = color(100, 200, 100);
      ellipse(x, height, size)
      
      break; // green
    case "3":
      bgColor = color(100, 100, 200);
      break; // blue
    default:
      bgColor = color(220); // grey
  }
}
