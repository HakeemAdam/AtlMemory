var words = ["Balsenoptera musculus", "Tursiops Truncatus", "Pseudorca crassidens", "Carcharodon carcharias"];
var words2 = ["Ginglymostoma cirratum", "Clupeidae", "Chondrichthyes", "Scombridae"];
var words3 = ["Dendrogyra cylindrus", "Orbicella franksi", "Orbicella faveolata", "Orbicella annularis"];
var words4 = ["Acropora globiceps", "Acropora pharaonis", "Acropora lokani", "Acropora jacquelineae"];
var words5 = ["Ginglymostoma cirratum", "Clupeidae", "Chondrichthyes", "Scombridae"];
var words6 = ["Acropora globiceps", "Acropora pharaonis", "Acropora lokani", "Acropora jacquelineae"];
var words7 = ["Dendrogyra cylindrus", "Orbicella franksi", "Orbicella faveolata", "Orbicella annularis"];
var words8 = ["Acropora globiceps", "Acropora pharaonis", "Acropora lokani", "Acropora jacquelineae"];

var index = 0;
var rate =0;
var font;
var bodyFont;
var rng;

function preload(){
  font = loadFont('IBMPlexSans-SemiBold.ttf');
  bodyFont = loadFont('IBMPlexSans-Light.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font)
  rate=8;
  frameRate(cos(noise(HALF_PI)));



}

function draw() {
  rng = map(0, mouseX, 0, 10);

  background(0);

  fill(255);
  textSize(32);
  textFont(font)
  text('On Which The Sun Sets', 100, 100);
  textSize(24);
  textFont(bodyFont);
  text('We are undying witnesses', width/2- 200, height/2-200);
  text('who have seen paths turned into graves', width/2- 350, height/2-150);
  text('where mysteries are digested', width/2- 240, height/2-100);
  text('and sink down into the infinity of Time.', width/2- 330, height/2-50);
  text('We survive', width/2-40, height/2);
  text('not by the names by which you call us', width/2-330, height/2+50);
  text('by but our duty', width/2-90, height/2+100);
  text('to build a bed for the water to rest', width/2-290, height/2+150);
  text(words[index], width/2+100, height/2-100);
  text(words2[index], width/2+100, height/2-150);
  text(words3[index], width/2+100, height/2-200);
  text(words4[index], width/2+100, height/2-50);
  text(words5[index], width/2+100, height/2);
  text(words6[index], width/2+100, height/2+50);
  text(words7[index], width/2+100, height/2+100);
  text(words8[index], width/2+100, height/2+150);
  index = index +1;

  if (index == words.length) {
    index = 0;

  }

  for (i = 0; i < 8; i++){
  noStroke();
  ellipse(random()*width,random()*height/5,8,8);

  }

}

function mousePressed() {
  rate=0;

}
