import http from "node:http";
import { getData } from "./db.js";
import { response } from "./frontend.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getData();

  if (req.url === "/api" && req.method === "GET") {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 200;
    res.end(JSON.stringify(destinations));
  } else if(req.url === `/api/continent/${}`) {

  } else {
    response.setHeader("Content-Type", "application/json");
    response.statusCode = 404;
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
