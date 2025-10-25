import serveStatic from "./utils/serveStatic.js";
import http from 'node:http'
const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><h1>This is working</h1></html>");
});

server.listen(PORT, () => console.log(`Connected on port : ${PORT}`));

// res.setHeader() can be used multiple times to set different headers and have full control over them
// res.writeHead() is used when we have no more modifications to headers
// res.writeHead(200, {'Content-Type':'text/html'})
