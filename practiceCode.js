
let circleX = 960;
let circleX2 = 150;
let circleSize;

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

if (drum > 82) { 

//switch to RGB for the rings
colorMode(RGB, 255, 255, 255);


//color changing with bass
//let ring1 = color(255,255,254); //white 
let ring1 = color(255, 0, 85); //warm pink 
let ring2 = color(245, 155, 72); //light orange

let colorDriver = map(vocal, 0, 100, 0, 1);
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
    ellipse(x, y, circleSize - i * ringSpacing2);
  }
//ai code ended

//draw circle in top left corner //code used to make one circle in top left corner
//for (let i = 0; i < numRings2; i++) {
//  ellipse(circleX2, circleX2, circleSize - i * ringSpacing2);
  }
 }


   
}