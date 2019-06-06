const Gpio = require('pigpio').Gpio;

const motorLeft = new Gpio(17, {mode: Gpio.OUTPUT});

let pulseWidth = 1000;
let increment = 100;

setInterval(() => {
  motor.servoWrite(pulseWidth);

console.log(JSON.stringify(motor, null, 2));
  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 1000);
