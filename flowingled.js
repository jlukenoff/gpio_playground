let Gpio = require('onoff').Gpio;
 // include onoff to interact with the GPIO
let LED04 = new Gpio(4, 'out');
 //use declare variables for all the GPIO output pins
  
var LED17 = new Gpio(17, 'out');

  
var LED27 = new Gpio(27, 'out');

  
var LED22 = new Gpio(22, 'out');

  
var LED18 = new Gpio(18, 'out');

  
var LED23 = new Gpio(23, 'out');

  
var LED24 = new Gpio(24, 'out');

  
var LED25 = new Gpio(25, 'out');

// Put all the LED variables in an array
let leds = [LED04, LED17, LED27, LED22, LED18, LED23, LED24, LED25];
let indexCount = 0; // a counter
dir = 'up'; // variable for flowing direction

let flowInterval = setInterval(flowingLeds, 100); // run the flowingLeds function every 100ms

function flowingLeds() {
  // function for flowing Leds
  leds.forEach((currentValue) => {
    //for each item in array
    currentValue.writeSync(0); //turn off LED
  });
  if (indexCount == 0) dir = 'up'; // set flow direction to "up" if the count reaches zero
  if (indexCount >= leds.length) dir = 'down'; // set flow direction to "down" if the count reaches 7
  if (dir == 'down') indexCount--; // count downwards if direction is down
  leds[indexCount].writeSync(1); // turn on LED that where array index matches count
  if (dir == 'up') indexCount++; // count upwards if direction is up
}

function unexportOnClose() {
  // function to run when exiting program
  clearInterval(flowInterval); // stop flow interwal
  leds.forEach((currentValue) => {
    //for each LED
    currentValue.writeSync(0); //turn off LED
    currentValue.unexport(); //unexport GPIO
  });
}

process.on('SIGINT', unexportOnClose); // function to run when user closes using ctrl+cc
