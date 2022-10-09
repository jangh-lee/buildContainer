const express = require('express');
const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Project github를 통한 CI/CD 파이프라인 구축');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
