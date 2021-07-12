const fs = require('fs');

const content = 'node.js nb!';
fs.writeFile('./data/data.txt', content, error => {
  console.log('写入成功！');
})