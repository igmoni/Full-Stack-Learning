import serveStatic from "./utils/serveStatic.js";
import http from 'node:http'
const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  await serveStatic(req, res, __dirname);
  res.statusCode = 200;
  
});

server.listen(PORT, () => console.log(`Connected on port : ${PORT}`));
