const { Gpio } = require('onoff');

const sensorOrangeWire = new Gpio(14, 'in');
const sensorYellowWire = new Gpio(15, 'in');

sensorOrangeWire.watch((e, val) => {
  if (e) console.error(`Error detected from ORANGE (GPIO14): ${e}`);
  console.log(`Event - ORANGE (GPIO14): ${val}`);
});

sensorYellowWire.watch((e, val) => {
  if (e) console.error(`Error detected from YELLOW (GPIO15): ${e}`);
  console.log(`Event - YELLOW (GPIO15): ${val}`);
});

process.on('SIGINT', () => {
  sensorOrangeWire.unwatchAll();
  sensorYellowWire.unwatchAll();
});
