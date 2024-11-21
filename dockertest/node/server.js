const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`서버실행중 ${port} 포트에서 실행중 http://localhost:8080`);
});

app.get('/', (req, res) => {
  res.send('<h1>ㅎㅇ</h1>');
});
