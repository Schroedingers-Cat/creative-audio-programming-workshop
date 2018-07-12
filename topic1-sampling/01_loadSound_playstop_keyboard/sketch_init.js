// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Basic control of playing a sound with keyboard keys, preload method with successCallback function

var sound;

function preload(){
  // load sound here
  sound = loadSound("../../sounds/explosion.ogg", loaded);
}

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(0);
}

function loaded() {
  console.log("loaded");
  // set playmode to restart
  // set Boolean isLooping to false
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("UP_ARROW: play");
    sound.play();
  } else if (keyCode === DOWN_ARROW) {
    console.log("DOWN_ARROW: stop");
    sound.stop();
  } else if (keyCode === LEFT_ARROW) {
    console.log("LEFT_ARROW: reversed");
    sound.rate(-1);
    if (sound.isPlaying() === false) {
      console.log("Sound is not playing. Will start playing now.");
      sound.play();
    }
  } else if (keyCode === RIGHT_ARROW) {
    console.log("RIGHT_ARROW: pause");
    sound.pause();
  } else if (keyCode === 76) {
    console.log("L");
    if (sound.isLooping() === false) {
      console.log("looping");
      sound.setLoop(true)
    }
    else if (sound.isLooping() === true) {
      console.log("no looping");
      sound.setLoop(false);
    }
  }
}
