const http = require('http');

const port = 3000;

// 创建一个实例
const server = http.createServer();

// 监听
server.on('request', (request, response) => {
  console.log(`request url: ${request.url}`);

  response.write('hello');

  response.end();
});

// 绑定端口号
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});