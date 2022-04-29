

function setup() {
  var myCanvas = createCanvas(400, 525);
    myCanvas.parent("main_tings");
  strokeWeight(2);
  ellipseMode(RADIUS);
  background(204);


  for(let i = 0; i < 4; i++){
    randomize();
    fill(color1);
    let shape = quad(x1,y1,x2,y2,x3,y3,x4,y4);
  }
}

function draw() {
  shape();
}

function mousePressed(){
  clear();
  background(204);
  for(let i = 0; i < 4; i++){
    randomize();
    fill(color1);
    let shape = quad(x1,y1,x2,y2,x3,y3,x4,y4);
  }
}

function randomize() {
  x1 = getRandomIntInclusive(0,400);
  y1 = getRandomIntInclusive(0,525);
  x2 = getRandomIntInclusive(0,400);
  y2 = getRandomIntInclusive(0,525);
  x3 = getRandomIntInclusive(0,400);
  y3 = getRandomIntInclusive(0,525);
  x4 = getRandomIntInclusive(0,400);
  y4 = getRandomIntInclusive(0,525);
  color1 = getRandomHexColor();
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomHexColor() {
    return '#' + getRandomIntInclusive(100000,999999);
}
