// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Basic control of playing a sound with keyboard keys, preload method with successCallback function

var sound;
var isLooping;

function preload(){
  // load sound here
    sound1 = loadSound("../../sounds/hihat.ogg", loaded);
    sound2 = loadSound("../../sounds/snare.ogg", loaded);
    sound3 = loadSound("../../sounds/cymbal.ogg", loaded);
    sound4 = loadSound("../../sounds/monkey.ogg", loaded);

}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(0);
}

function loaded() {
  console.log("loaded");
  sound1.playMode('sustain');
  sound2.playMode('sustain');
  sound3.playMode('restart');
  sound4.playMode('restart');

  // set Boolean isLooping to false
}

function keyPressed() {
    if (keyCode == 65) {
        console.log("a");
        sound1.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 87) {
        console.log("w");
        sound2.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 68) {
        console.log("d");
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode == 88) {
        console.log("x");
        sound4.play();
        bgvalue = random(1, 255);
    }
}
