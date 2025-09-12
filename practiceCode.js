
let circleX = 910;
let circleSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
   colorMode(HSB, 360, 100, 100); //make HSB color mode for smooth transitions
   let hueValue = map(bass, 0, 100, 240, 360); //map bass to hue value from blue to pink
   background (hueValue, 80, 100); //set the background color based on the bass

   
   //background(0); //black backgound
  //colorMode(HSB); 

  //console.log(drum);
  circleSize = drum * 10; //drum

  stroke(112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();

// fill(112, 17, 74); //dark pink

//draw multiple rings within one another 
let numRings = 10; //number of rings displayed inside oneanother
let ringSpacing = 50; //space between

//color changing with bass
let ring1 = color(112, 17, 74); //dark purple
//let ring2 = color(255, 0, 85); //dark pink
let ring2 = color(166, 227, 180); //light neon green

let colorDriver = map(bass, 0, 100, 0, 1);

let interColor = lerpColor(ring1, ring2, colorDriver); //middle colour between purple and pink

fill(interColor)


for (let i = 0; i < numRings; i++) {
  ellipse(circleX, 540, circleSize - i * ringSpacing);
}





   
}