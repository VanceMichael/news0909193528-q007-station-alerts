const http = require('node:http');
const app = http.createServer((req, res) => { if (req.url === '/health') { res.writeHead(200, {'content-type':'application/json'}); res.end('{"status":"ok"}'); } else { res.writeHead(404); res.end(); } });
if (require.main === module) app.listen(3000);
module.exports = app;
