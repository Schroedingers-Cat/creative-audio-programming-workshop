// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/reference/#/p5.Env
// Creating an envelope and applying to a sound sample

var attackLevel = 1;
var releaseLevel = 0;

var attackTime = 1;
var decayTime = 0.1;
var susPercent = 0;
var releaseTime = 0;

var sound;

var env, triOsc;

function preload(){
  // load sound here
  sound = loadSound("../../sounds/explosion.ogg");
}

function setup() {
  var cnv = createCanvas(100, 100);

  textAlign(CENTER);
  text('click to play', width/2, height/2);

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);


  cnv.mousePressed(playEnv);
}

function playEnv(){
  console.log("hey");
  env.setInput(sound);
  sound.play();
  env.play();
}