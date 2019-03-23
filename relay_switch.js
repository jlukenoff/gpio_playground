const { Gpio } = require('onoff');

// set up GPIO output to relay
const relay = new Gpio(4, 'high');

// get arguments from cli
const timeOn = process.argv[2];

console.log('Time for relay to remain on: ', timeOn);

// function to set relay to opposite of current state
const toggleRelay = () => {
  // get current state of relay
  const isOn = relay.readSync();

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
