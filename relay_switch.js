const { Gpio } = require('onoff');

const relay = new Gpio(7, 'out');

const timeOn = +process.argv[3];

const toggleRelay = () => {
  const isOn = relay.readSync();
  if (isOn) {
    relay.writeSync(1);
  } else {
    relay.writeSync(0);
  }
};

toggleRelay();
setTimeout(toggleRelay, timeOn);
