const os = require('os');

const cpu = os.cpus();
const me = os.totalmem();

console.log(cpu, me);