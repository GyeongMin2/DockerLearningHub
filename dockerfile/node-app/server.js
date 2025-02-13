const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('안녕, Docker!');
});

app.get('/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(8080, () => {
  console.log('서버 실행중 http://localhost:8080');
});
