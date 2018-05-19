const http = require('http');
const fs = require('fs');
const httpPort = 8080;

http.createServer((req, res) => {
  fs.readFile('./dist/index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log(`Impossible d'ouvrir le fichier "index.html"`);
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content);
  })
}).listen(httpPort, () => {
  console.log('Le serveur écoute à : http://localhost:%s', httpPort);
})