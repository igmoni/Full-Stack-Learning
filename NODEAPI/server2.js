import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  const query = Object.fromEntries(urlObj.searchParams)
  console.log(query);

  res.end("Server running on 8000");
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
