let circleX = 910;
let circleSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0); //black backgound
  //colourMode(HSB); 

  //console.log(drum);
  circleSize = drum * 7; //drum

  stroke(112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();


// fill(112, 17, 74); //dark pink

//draw multiple rings within one another 
let numRings = 6; //number of rings displayed inside oneanother
let ringSpacing = 50; //space between

for (let i = 0; i < numRings; i++) {
  ellipse(circleX, 540, circleSize - i * ringSpacing);
}


 //ellipse(circleX, 540, circleSize-50)
 //circleX = circleX + 1;


}

