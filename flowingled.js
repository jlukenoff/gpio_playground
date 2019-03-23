const { Gpio } = require('onoff');
// include onoff to interact with the GPIO
const LED04 = new Gpio(4, 'out');
// use declare variables for all the GPIO output pins

const LED17 = new Gpio(17, 'out');

const LED27 = new Gpio(27, 'out');

const LED22 = new Gpio(22, 'out');

const LED18 = new Gpio(18, 'out');

const LED23 = new Gpio(23, 'out');

const LED24 = new Gpio(24, 'out');

const LED25 = new Gpio(25, 'out');

// Put all the LED variables in an array
const leds = [LED04, LED17, LED27, LED22, LED18, LED23, LED24, LED25];
let indexCount = 0; // a counter
let dir = 'up'; // variable for flowing direction

const flowingLeds = () => {
  // function for flowing Leds
  leds.forEach(currentValue => {
    // for each item in array
    currentValue.writeSync(0); // turn off LED
  });
  if (indexCount === 0) dir = 'up'; // set flow direction to "up" if the count reaches zero
  if (indexCount >= leds.length) dir = 'down'; // set flow direction to "down" if the count reaches 7
  if (dir === 'down') indexCount--; // count downwards if direction is down
  leds[indexCount].writeSync(1); // turn on LED that where array index matches count
  if (dir === 'up') indexCount++; // count upwards if direction is up
};

const flowInterval = setInterval(flowingLeds, 100); // run the flowingLeds function every 100ms

function unexportOnClose() {
  // function to run when exiting program
  clearInterval(flowInterval); // stop flow interwal
  leds.forEach(currentValue => {
    // for each LED
    currentValue.writeSync(0); // turn off LED
    currentValue.unexport(); // unexport GPIO
  });
}

process.on('SIGINT', unexportOnClose); // function to run when user closes using ctrl+cc
