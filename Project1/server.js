import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer( async (req, res) => {
  const pathTo = path.join(__dirname, "index.html");

  const content = await fs.readFile(pathTo )

  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end(content);
});

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
// res.setHeader() can be used multiple times to set different headers and have full control over them
// res.writeHead() is used when we have no more modifications to headers
// res.writeHead(200, {'Content-Type':'text/html'})
