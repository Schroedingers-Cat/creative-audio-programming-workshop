// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Basic play sound, preload method

var sound;

function preload(){
  // load sound here
    sound = loadSound("sounds/Prassel_noise_loop_4s.ogg", success());
}

function setup(){
  createCanvas(200, 200);
  // play or loop sound here
    sound.play();
}

function draw(){
  background(0);
}

function success() {
    console.log("The rocket has launched.");
}