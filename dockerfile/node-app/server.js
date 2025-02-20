const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const MSG = process.env.APP_MSG || '안녕, Docker!';

app.get('/', (req, res) => {
  res.send(MSG);
});

app.get('/health', (req, res) => {
  res.json({ ok: true, port: PORT });
});

app.listen(PORT, () => {
  console.log(`서버 실행중 http://localhost:${PORT}`);
});
