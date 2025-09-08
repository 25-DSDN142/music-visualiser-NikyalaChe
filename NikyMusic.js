let circleX = 910;
let circleSize;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0); //black backgound
  circleSize = drum*7; //drum

  stroke (112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();


// fill(112, 17, 74); //dark pink

 ellipse(circleX,540,circleSize); 
 ellipse(circleX, 540, circleSize-50)
 

 //circleX = circleX + 1;


}

