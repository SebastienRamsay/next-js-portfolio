const https = require('https');
const fs = require('fs');
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('../ssl/private.key.pem'),
  cert: fs.readFileSync('../ssl/domain.cert.pem'),
};

app.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  https.createServer(httpsOptions, server).listen(8443, (err) => {
    if (err) throw err;
    console.log('HTTPS Server is running on port 8443');
  });
});
