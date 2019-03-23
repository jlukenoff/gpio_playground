const { Gpio } = require('onoff');

const sensorYellowWire = new Gpio(14, 'in', 'both');

console.log(`Sensor Yellow Wire State: ${sensorYellowWire.readSync()}`);

sensorYellowWire.watch((e, val) => {
  if (e) console.error(`Error detected from YELLOW (GPIO15): ${e}`);
  console.log(`Event - YELLOW (GPIO15): ${val}`);
});

process.on('SIGINT', () => {
  sensorYellowWire.unwatchAll();
});
