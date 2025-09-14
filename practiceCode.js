
let circleX = 960;
let circleX2 = 150;
let circleSize;
let circleSize2;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   colorMode(HSB, 360, 100, 100); //make HSB color mode for smooth transitions
  
     // Map bass to hue (black to light blue)
   let hueValue = map(bass, 0, 100, 200, 220); // blue hues
   let satValue = map(bass, 0, 100, 0, 40);    // low saturation for light blue
   let brightValue = map(bass, 0, 100, 0, 100); // brightness from black to light blue

   background(hueValue, satValue, brightValue); //set background colour based on the bass


  console.log(drum);
  circleSize = drum * 10; //drum

  stroke(112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();

// fill(112, 17, 74); //dark pink

//switch to RGB for the rings
colorMode(RGB, 255, 255, 255);

//color changing with bass
let ring1 = color(112, 17, 74); //dark purple
//let ring2 = color(255, 0, 85); //dark pink
let ring2 = color(166, 227, 180); //light neon green

let colorDriver = map(bass, 0, 100, 0, 1);
let interColor = lerpColor(ring1, ring2, colorDriver); //middle colour between purple and pink

fill(interColor)
stroke(ring1);

//draw multiple rings within one another 
let numRings = 10; //number of rings displayed inside oneanother
let ringSpacing = 50; //space between

for (let i = 0; i < numRings; i++) {
  ellipse(circleX, 540, circleSize - i * ringSpacing);


}

 

//making triangle rays that orbit around the middle circle
let orbitRadius = circleSize ; //distance from the centre circle
let numCorbitters = 8; //number of circles orbitting the middle


for (let i = 0; i < numCorbitters; i++) {
  let angle = counter * 1 + (TWO_PI / numCorbitters) * i; 
  let x = circleX + cos(angle) * orbitRadius;
  let y = 540 + sin(angle) * orbitRadius;

  //triangle - Ray points 
  //let raySize = 400; //size of triangle rays 
  //let angleOffset = PI / 6 //rotate rays slightly 

  //let x1 = x + cos(angle + angleOffset) * raySize;
  //let y1 = y + sin(angle + angleOffset) * raySize;
  //let x2 = x + cos(angle + angleOffset + TWO_PI / 3) * raySize
  //let y2 = y + sin(angle + angleOffset + TWO_PI /3) * raySize;
  //let x3 = x + cos(angle + angleOffset + 2 * TWO_PI /3) * raySize;
  //let y3 = y + sin(angle + angleOffset + 2 * TWO_PI / 3) * raySize;

  fill(255, 238, 110) //light yellow
  stroke(245, 155, 72) //light orange
  strokeWeight(5);
  ellipse(x , y, 50, 50) //small cicles orbitting
  
  //triangle(x1, y1, x2, y2, x3, y3);
  
}

// corner circles
if (drum > 82) { 
  circleSize2 = drum * 8;

//switch to RGB for the rings
colorMode(RGB, 255, 255, 255);


//color changing with bass
//let ring1 = color(255,255,254); //white 
let ring1 = color(255, 0, 85); //warm pink 
let ring2 = color(166, 220, 227); //light blue
//let ring2 = color(245, 155, 72); //light orange

let colorDriver = map(bass, 0, 100, 0, 1);
let interColor = lerpColor(ring1, ring2, colorDriver); //middle colour between purple and pink

fill(interColor)
stroke(ring1);

let numRings2 = 20; //numbers of rings for corner circle
let ringSpacing2 = 40; //space between 

//Ai helped me create circles in each corner
// Array of corner positions: [x, y]
let corners = [
  [circleX2, circleX2], // top-left
  [width - circleX2, circleX2], // top-right
  [circleX2, height - circleX2], // bottom-left
  [width - circleX2, height - circleX2] // bottom-right
];

// Draw rings in all four corners
for (let c = 0; c < corners.length; c++) {
  let x = corners[c][0];
  let y = corners[c][1];
  for (let i = 0; i < numRings2; i++) {
    ellipse(x, y, circleSize2 - i * ringSpacing2);
  }
//ai code ended

//draw circle in top left corner //code used to make one circle in top left corner
//for (let i = 0; i < numRings2; i++) {
//  ellipse(circleX2, circleX2, circleSize - i * ringSpacing2);
  }
 }

//ellipse(500 + sin(counter * 2) * 100, 540, 500, 100); // moves a circle left/right over time
  


}


