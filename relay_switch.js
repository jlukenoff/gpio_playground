const { Gpio } = require('onoff');

const relay = new Gpio(7, 'out');

const timeOn = process.argv[2];

console.log(timeOn);

const toggleRelay = () => {
  const isOn = relay.readSync();
  console.log(isOn);
  if (isOn === 0) {
    console.log('Relay turned on');
    relay.writeSync(1);
  } else {
    console.log('Relay turned off');
    relay.writeSync(0);
  }
};

toggleRelay();
setTimeout(toggleRelay, timeOn);
