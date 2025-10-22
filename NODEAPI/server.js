import http from "node:http";
import { getData } from "./db.js";
import { sendJSONResponse } from "./utils/sendJSONResponse.js";
import { filterData } from "./utils/filterData.js";
import { getDataByQuery } from "./utils/getDataByQuery.js";


const PORT = 8000;

const server = http.createServer(async (req, res) => {
  const destinations = await getData();

  const urlObj = new URL(req.url, `http://${req.headers.host}`)

  const queryObj = Object.fromEntries(urlObj.searchParams)


  if (urlObj.pathname === '/api' && req.method === "GET") {

    let filterData = getDataByQuery(destinations, queryObj)
  
    sendJSONResponse(res, 200, filterData);
  } 
  else if (req.url.startsWith("/api/continent") && req.method === "GET") {

    const continent = req.url.split("/").pop();
    sendJSONResponse(
      res,
      200,
      filterData(destinations, "continent", continent)
    );
  }
   else if (req.url.startsWith("/api/country") && req.method === "GET") {
  
    const country = req.url.split("/").pop();  
    sendJSONResponse(res, 200, filterData(destinations, "country", country));
  }
   else {
    sendJSONResponse(res, 404, {
      error: "Not Found",
      message: "THe requested page doesn't exist!",
    });
  }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
