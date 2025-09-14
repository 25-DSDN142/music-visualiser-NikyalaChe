

let stars = [];
const numStars = 800;
let firstRun = true;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 360, 100, 100); //make HSB color mode for smooth transitions
  
   //BACKGROUND
     // Map bass to hue (black to light blue)
   let hueValue = map(bass, 0, 100, 200, 220); // blue hues
   let satValue = map(bass, 0, 100, 0, 40);    // low saturation for light blue
   let brightValue = map(bass, 0, 100, 0, 100); // brightness from black to light blue

   background(hueValue, satValue, brightValue); //set background colour based on the bass


// --- Initialize stars on first run ---
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
translate(width/2, height/2); // Center origin
let drumSpeed = map(drum, 0, 100, 10, 60); //speed based on bass
let starSizeBounce = map(drum, 0, 100, 1, 3); //size based on bass
let starBrightness = map(vocal, 0, 100, 60, 100); //brightness based on bass

for (let star of stars) {
// Move star forward based on drum
star.z -= drumSpeed * 0.5; //speed based on drum volume
if (star.z < 1) {
// Reset star to far away
star.x = random(-width/2, width/2);
star.y = random(-height/2, height/2);
star.z = width;
}
// Project 3D to 2D
let sx = star.x * (width / star.z);
let sy = star.y * (width / star.z);
let r = map(star.z, 0, width, 8, 0.5) * starSizeBounce; // Size based on depth
//brigthness reacts with drum
colorMode(HSB, 360, 100, 100);
let hueValue = map(drum, 0, 200, 200, 240); //blue to orange hues
fill(hueValue, 50, starBrightness); 
noStroke();

ellipse(sx, sy, r, r);

}
}

