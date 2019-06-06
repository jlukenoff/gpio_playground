const Gpio = require('pigpio').Gpio;

const motorLeft = new Gpio(17, { mode: Gpio.OUTPUT });
const motorRight = new Gpio(22, { mode: Gpio.OUTPUT });

let pulseWidth = 1000;
let increment = 100;

// clockwise?
motorLeft.servoWrite(1000);
motorRight.servoWrite(1000);

setTimeout(() => {
  // AntiClockwise?
  motorLeft.servoWrite(2000);
  motorRight.servoWrite(2000);
  setTimeout(() => {
    motorLeft.servoWrite(0);
    motorRight.servoWrite(0);
  }, 1000);
}, 1000);
const directions = ['FORWARD', 'RIGHT', 'BACK', 'left'];

// setInterval(() => {
//   motorLeft.servoWrite(pulseWidth);
//   motorRight.servoWrite(pulseWidth);

//   console.log(JSON.stringify(motorLeft, null, 2));
//   pulseWidth += increment;
//   if (pulseWidth >= 2000) {
//     increment = -100;
//   } else if (pulseWidth <= 1000) {
//     increment = 100;
//   }
// }, 1000);
