const fs = require('fs');

fs.readFile('./data/data.txt', (error, data) => {
  // console.log(data);
  // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 2e 6a 73 21>

  console.log(data.toString());
  // hello node.js!
});