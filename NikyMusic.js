// HEY! Song load at end. Warning of jumpscare
// maybe epeilepy warning 

let circleX = 910;
let circleSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0); //black backgound
  //colourMode(HSB); 

  //console.log(drum);
  circleSize = drum * 10; //drum

  stroke(112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();

// fill(112, 17, 74); //dark pink

//draw multiple rings within one another 
let numRings = 10; //number of rings displayed inside oneanother
let ringSpacing = 50; //space between

let ring1 = color(112, 17, 74); //dark purple
let ring2 = color(255, 0, 85); //dark pink

let colorDriver = map(bass, 0, 100, 0, 1);

let interColor = lerpColor(ring1, ring2, colorDriver); //middle colour between purple and pink
fill(interColor)


for (let i = 0; i < numRings; i++) {
  ellipse(circleX, 540, circleSize - i * ringSpacing);
}
 let numPoints = 10; //number of points for the star
//draw star around the rings
beginShape();
stroke(166, 227, 180); //light neon green
strokeWeight(5);
noFill();



}

