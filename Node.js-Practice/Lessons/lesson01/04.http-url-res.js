const http = require('http');

const port = 3000;

// 创建一个实例
const server = http.createServer();

// 监听
server.on('request', (request, response) => {
  console.log(`request url: ${request.url}`);

  const url = request.url; // 端口号之后的路径

  if (url === '/') {
    response.end('index');
  } else if (url === '/login') {
    response.end('login');
  } else if (url === '/product') {
    const res = [
      {
        id: 'ajajee',
        name: '01',
        value: 1
      }, {
        id: 'bahajaj',
        name: '02',
        value: 2
      }
    ];

    response.end(JSON.stringify(res));
  } else {
    response.end('404 not found');
  }
});

// 绑定端口号
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});