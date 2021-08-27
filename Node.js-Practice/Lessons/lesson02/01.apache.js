const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// 创建一个实例
const server = http.createServer();

// appRootPath
const resourcePath = path.join(__dirname, './resource/');

// 监听
server.on('request', (request, response) => {
  console.log(`request url: ${request.url}`);

  const url = request.url; // 端口号之后的路径
  let filePath = 'index.html';

  if (url !== '/') {
    filePath = url;
  }

  fs.readFile(resourcePath + filePath, (error, data) => {
    if (error) return response.end('404 not found');

    response.end(data);
  })
});

// 绑定端口号
server.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});