const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('地基已成功唤醒！请回到悬浮球页面尝试登录。');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
