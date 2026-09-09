import http from "node:http";

export const app = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.writeHead(200, {"content-type": "application/json"});
    response.end('{"status":"ok"}');
    return;
  }
  response.writeHead(404);
  response.end();
});

if (require.main === module) app.listen(3000);
