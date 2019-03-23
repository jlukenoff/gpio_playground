const { Gpio } = require('onoff');

const relay = new Gpio(7, 'out');

const timeOn = +process.argv[3];

console.log(timeOn);

const toggleRelay = () => {
  const isOn = relay.readSync();
  console.log(isOn);
  if (isOn === 0) {
    relay.writeSync(1);
  } else {
    relay.writeSync(0);
  }
};

toggleRelay();
setTimeout(toggleRelay, timeOn);
