import http from "node:http";
import getData from './db.js'

const PORT = 8000

const server = http.createServer( async (req, res) => {

    const destinations = await getData()

    if (req.url === '/api' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200
        res.end(JSON.stringify(destinations))
    } else if(req.url.startsWith('/api/continent')) {
        
    }
    res.end("Hello from the server!");
});


server.listen(PORT, ()=> console.log(`server running on port ${PORT}`));