// DM2008 — Activity 1a
// Simple Creatures (20 min)

// Run the sketch, then click on the preview to enable keyboard
// Use the 'Option' ('Alt' on Windows) key to view or hide the grid
// Use the 'Shift' key to change overlays between black & white
// Write the code for your creature within the space provided

function setup() {
  createCanvas(400, 400);
}

function draw() {
  a = color(248, 255, 184)
  background(a);

  b = color(250, 197, 242)
  fill(b);
  noStroke();
  ellipse(200,200,200,160)

  c = color(95, 125, 94)
  fill(c)
  quad(295,225,275,255,335,250,330,215)
  quad(105,225,125,255,65,250,70,215)
  arc(205 ,117,50,20,40,50)

  d = color(0,0,0)
  fill(d)
  circle(175,180,16)
  circle(225,180,16)
  noFill(); 
  stroke(0)
  strokeWeight(3); 
  arc(200, 210, 40, 20, 0, PI); 
  

  
  helperGrid(); // do not edit or remove this line
}
