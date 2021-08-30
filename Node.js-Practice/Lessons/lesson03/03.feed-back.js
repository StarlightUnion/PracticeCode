const express = require('express');
const app = express();

const port = 3000;

app.use('/resource/', express.static('./resource/'));

/**
 * 当渲染以.art结尾的文件时，使用art-template模板引擎
 */
app.engine('html', require('express-art-template'));
app.set('views', './views');

app.get('/', (request, response) => {
  response.render('index.html', {
    title: 'lesson3 index page'
  });
});

app.post('/post', (request, response) => {
  response.render('post.html');
})

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});