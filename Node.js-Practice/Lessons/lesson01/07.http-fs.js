const http = require('http');
const fs = require('fs');

const port = 3000;

// 创建一个实例
const server = http.createServer();

server.on('request', (request, response) => {
  const url = request.url;

  if (url === '/') {
    fs.readFile('./resource/index.html', (error, data) => {
      if (error) {
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('文件读取失败！');
      } else {
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.end(data);
      }
    })
  } else if (url === '/image') {
    fs.readFile('./resource/test.jpg', (error, data) => {
      if (error) {
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('文件读取失败！');
      } else {
        response.setHeader('Content-Type', 'image/jpeg');
        response.end(data);
      }
    })
  }
});

// 绑定端口号
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});