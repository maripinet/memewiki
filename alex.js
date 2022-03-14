// Made by Alex Flowers ^o^

var canvas;
var pos = [];
var timer = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index','1');
  noStroke(); fill(100, 200, 255);
  console.log("loaded");
}

function draw() {
  clear();
  for(let i = 0; i < pos.length; i++){
    ellipse(pos[i].x, pos[i].y, 3, 7);
    pos[i].y+=7;
    if(pos[i].y > height) {      
      pos.splice(i, 1);
    }
  }
  if(millis() > timer+100){
    pos.push(circulo = { x: random(width), y: 0 });
    timer = millis();
  }
}

function keyPressed() {
  if(key == ' ') {
    for(let i = 0; i < 500; i++){
      pos.pop();
    }
  }
}
