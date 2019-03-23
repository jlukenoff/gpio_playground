const { Gpio } = require('onoff');

const relay = new Gpio(4, 'high');

const timeOn = process.argv[2];

console.log(timeOn);

const toggleRelay = () => {
  const isOn = relay.readSync();
  console.log(isOn);
  if (isOn === 1) {
    relay.writeSync(0);
    console.log('Relay turned on');
  } else {
    relay.writeSync(1);
    console.log('Relay turned off');
  }
};

toggleRelay();
setTimeout(() => {
  toggleRelay();
}, timeOn);
