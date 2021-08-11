const http = require('http');

const port = 3000;

// 创建一个实例
const server = http.createServer();

// 监听
server.on('request', (request, response) => {
  // Content-Type 告知对方我发送的数据是什么编码类型
  // response.setHeader('Content-Type', 'text/plain; chartset=utf-8');
  // response.end('response: 你好，世界！');

  const url = request.url;

  if (url === '/plain') {
    // text/plain 普通文本
    response.setHeader('Content-Type', 'text/plain; charset=utf-8');
    response.end('response: 你好，世界！');
  } else if (url === '/html') {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end('<p>response: 你好，世界！</p>');
  }
});

// 绑定端口号
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});