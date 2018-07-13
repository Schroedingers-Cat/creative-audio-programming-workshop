// Anna Xambó
// Creative Audio Programming: Workshop
// https://github.com/axambo/creative-audio-programming-workshop

// Example adapted from: https://p5js.org/examples/sound-note-envelope.html

var osc, envelope;

var scaleArray = [60, 40, 64, 58, 69, 56, 71, 52]; // Try different scales, or not playing all the notes

var note = 0;

var mode = 8;

function setup() {
  createCanvas(710, 200);
  osc = new p5.TriOsc();

  // Instantiate the envelope
  envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(1, 0.2, 0.1, 1);

  // set attackLevel, releaseLevel
  envelope.setRange(0, 1);

  osc.start();

  noStroke();
}

function draw() {
  background(20);
  //console.log("frameCount: " +frameCount);
  if (frameCount % mode == 0 || frameCount == 1) { // How can we make it faster?
    var midiValue = scaleArray[note];
    console.log("midiValue: " +midiValue);
    var freqValue = midiToFreq(midiValue);
    console.log("freqValue: " +freqValue);
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.1); // params: unit, starttime, sustaintime	
    note = (note + 1) % scaleArray.length;
    console.log("note: " + note)
    if (midiValue == 52) {
      if (mode == 8) {
        mode = 20;
        envelope.setADSR(1, 0.2, 0.1, 1);
      } else {
        mode = 8;
        envelope.setADSR(0.1, 0.2, 0.1, 0.4);
      }
    }
  }

}
