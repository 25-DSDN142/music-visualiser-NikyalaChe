// HEY! Song loud at end. Warning for jumpscare
// maybe epilepsy warning 

//STARFIELD
let stars = [];
const numStars = 800;
let firstRun = true;

//RINGS
let circleX = 960;
let circleX2 = 150;
let circleSize;
let circleSize2;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 360, 100, 100); //make HSB color mode for smooth transitions
  
//BACKGROUND
     // Map bass to hue (black to light blue)
   let hueValue = map(bass, 0, 100, 200, 220); // blue hues
   let satValue = map(bass, 0, 100, 0, 40);    // low saturation for light blue
   let brightValue = map(bass, 0, 100, 0, 100); // brightness from black to light blue

   background(hueValue, satValue, brightValue); //set background colour based on the bass


//LINES TOP AND BOTTOM - MIDDLE
let numVerticalLines = 50;
let spacing = width / (numVerticalLines + 1);

for (let i = 1; i <= numVerticalLines; i++) {
let x = spacing * i;

//created an array that holds the different values - then uses math to randomly select a volume from the array
let randomVolume = [
  drum, bass, other, vocal
]
[Math.floor(Math.random() * 4)]
let lineHeight = map(randomVolume, 0, 100, 20, height / 2);
  
  strokeWeight(5);
//COLOR
  if(drum < 42){
  //rainbow effect
    colorMode(HSB);
  let hue = map(i, 1, numVerticalLines, 0, 360);
  stroke(hue, 80, 90, 80);
  } else {
    if(drum > 42) {
    colorMode(HSB);
    //colour changing after drums get bigger - different from the rainbow effect
    let hue = map(vocal, 0, 100, 50, 360); //changing color between yellow/green and red
    let saturation = 100; //vivid colors
    let brightness = map(vocal, 0, 100, 70, 100);
    stroke(hue, saturation, brightness, 100);
  }
  }
 line(x, 0, x, lineHeight / 2); //top to bottom
 line(x, height, x, height - lineHeight / 2);

}


//STARFIELD - CHANGED PARTS TO MATCH WITH MY SONG BETTER
  push();
  translate(width/2, height/2); // Center origin
//ADDITION
//shake effect with drums
  if (drum > 85){
  translate(random(-10, 10), random(-10, 10)); //shake effect based on drums
}

if (firstRun) {
for (let i = 0; i < numStars; i++) {
stars.push({
x: random(-width/2, width/2),
y: random(-height/2, height/2),
z: random(width)
});
}
firstRun = false;
}
//CHANGES TO STARS
let drumSpeed = map(drum, 0, 100, 10, 60); //speed based on bass
let starSizeBounce = map(drum, 0, 100, 1, 8); //size based on bass

//let starBrightness = map(vocal, 0, 100, 60, 100); //brightness based on bass - lighter stars
//let starBrightness = map(vocal, 0, 100, 60, 50); //brightness based on bass - middle ground
let starBrightness = map(vocal, 0, 100, 60, 10); //brightness based on bass - darker stars - FAVOURITE

let bassHue = map(bass, 0, 100, 180, 240); //color hue based on bass

for (let star of stars) {     
  // Move star forward based on drum
star.z -= drumSpeed; //speed based on drum volume
if (star.z < 1) {             
  // Reset star to far away
star.x = random(-width/2, width/2);
star.y = random(-height/2, height/2);
star.z = width;
}
//Project 3D to 2D
let sx = star.x * (width / star.z);
let sy = star.y * (width / star.z);
let r = map(star.z, 0, width, 8, 0.5) * starSizeBounce; // Size based on depth

//drawing trails for the stars
//giving them x,y points = px, py
let px = star.x * (width / (star.z + drumSpeed));
let py = star.y * (width / (star.z + drumSpeed));
stroke(bassHue, 60, starBrightness); //star color
strokeWeight(1);
line(px, py, sx, sy); //trial for stars

//brigthness reacts with drum
//colorMode(HSB, 360, 100, 100);
//let hueValue = map(drum, 0, 200, 200, 240); //blue to orange hues
noStroke();
fill(bassHue, 50, starBrightness); 
ellipse(sx, sy, r, r);

}
pop();


//MIDDLE CIRCLE
  console.log(drum);
  circleSize = drum * 10; //drum
  
  stroke(112, 17, 74); //dark purple ring
  strokeWeight(10);
  noFill();

//switch to RGB for the rings
colorMode(RGB, 255, 255, 255);

//color changing with bass
let ring1 = color(112, 17, 74); //dark purple
let ring2 = color(166, 227, 180); //light neon green
let colorDriver = map(bass, 0, 100, 0, 1);
let interColor = lerpColor(ring1, ring2, colorDriver); //middle colour between purple and pink

//OUTER GLOW RING
let glowSize = map(bass, 0, 100, 50, 150 + drum);
fill(red(interColor), green(interColor), blue(interColor), 80);
noStroke();
ellipse(circleX, 540, circleSize + glowSize * 2);

//MAIN RINGS
fill(interColor)
stroke(ring1);

//draw multiple rings within one another 
let numRings = 10; //number of rings displayed inside oneanother
let ringSpacing = 50; //space between

for (let i = 0; i < numRings; i++) {
  ellipse(circleX, 540, circleSize - i * ringSpacing);


}

// CORNER CIRCLES
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


}

