const express = require('express');
const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.end('hello world!');
});

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});