var x = 230;
var y = 220;

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(2,2);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y, 5);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 10
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
