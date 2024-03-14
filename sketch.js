function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
}


function draw() {
 circle(mouseX,mouseY,speed);
  px=pow(mouseX-pmouseX,2)
  py=pow(mouseY-pmouseY,2)
  speed=sqrt=(px+py) ;
}
  
function mousePressed() {
  background (random(250),random(255),random(255));

}