import http from 'http';

const requestListener: http.RequestListener = (req, res) => {
  if (req.method === 'GET') {
    const body = Buffer.from('{"status":"ok"}');
    return res
      .writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'application/json',
      })
      .end(body);
  }
};

const port = process.env.PORT || 2000;
const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
