'use strict';

const express = require('express');

// 상수
const PORT = 8080;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.get('/', (req, res) => {
  res.send('이제 이장훈이 업그레이드한다!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);