import http from "node:http";
import { getData } from "./db.js";

const PORT = 8000;




const server = http.createServer(async (req, res) => {
  
  const destinations =  await getData()

  if (req.url === "/api" && req.method === "GET") {
    res.end(JSON.stringify(destinations));
  }  else {
    res.end('Go to /api to see the data')
  }
  
});


server.listen(PORT, () => console.log(`server running on port ${PORT}`));

