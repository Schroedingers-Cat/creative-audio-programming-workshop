// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Sampler and recorder: 
// sampler of four sounds (keys 'a', 'w', 'd', 'x')
// recorder (keys 'spacebar' to record/stop recording/reset recording, and 'm' to play the recorded sound

var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12, sound13, sound14, sound15, sound16, sound17;
var isLooping;
var bgvalue = 0;

function preload(){
  // load sound here
  sound1 = loadSound("sounds/Drop Coin.ogg", loaded);
  sound2 = loadSound("sounds/psi_35.ogg", loaded);
  sound3 = loadSound("sounds/SFX_Jump_10.ogg", loaded);
  sound4 = loadSound("sounds/Synth Bass 016.ogg", loaded);
  sound5 = loadSound("../../sounds/Braaaam.ogg", loaded);
  sound6 = loadSound("../../sounds/burp.wav", loaded);
  sound7 = loadSound("../../sounds/br0kenviolin-001.wav", loaded);
  sound8 = loadSound("../../sounds/br0kenviolin-002.wav", loaded);
  sound9 = loadSound("../../sounds/br0kenviolin-003.wav", loaded);
  sound10 = loadSound("../../sounds/synth-snare.ogg", loaded);
  sound11 = loadSound("../../sounds/synth-swoosh.ogg", loaded);
  sound12 = loadSound("../../sounds/synth-transformers.ogg", loaded);
  sound13 = loadSound("../../sounds/cymbal.ogg", loaded);
  sound14 = loadSound("../../sounds/explosion.ogg", loaded);
  sound15 = loadSound("../../sounds/hihat.ogg", loaded);
  sound16 = loadSound("../../sounds/monkey.ogg", loaded);
  sound17 = loadSound("../../sounds/snare.ogg", loaded);
}

function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(bgvalue);
}

function loaded() {
  console.log("loaded");
  sound1.playMode('restart');
  sound2.playMode('restart');
  sound3.playMode('restart');
  sound4.playMode('restart');
  isLooping = 0;
}

function keyPressed() {
    if (keyCode === 65) {
        console.log("a");
        sound1.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 87) {
        console.log("w");
        sound2.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 68) {
        console.log("d");
        sound3.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 88) {
        console.log("x");
        sound4.play();
        bgvalue = random(1, 255);
    } else if (keyCode === 66) {
        sound5.play();
    } else if (keyCode === 67) {
        sound6.play();
    } else if (keyCode === 77) {
        sound7.play();
    } else if (keyCode === 69) {
        sound8.play();
    } else if (keyCode === 70) {
        sound9.play();
    } else if (keyCode === 71) {
        sound10.play();
    } else if (keyCode === 71) {
        sound11.play();
    } else if (keyCode === 72) {
        sound12.play();
    } else if (keyCode === 73) {
        sound13.play();
    } else if (keyCode === 74) {
        sound14.play();
    } else if (keyCode === 75) {
        sound15.play();
    } else if (keyCode === 76) {
        sound16.play();
    } else if (keyCode === 77) {
        sound17.play();
    }
}