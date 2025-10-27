import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

 async function serveStatic(req, res, baseDir) {
    const filePath = path.join(baseDir,'index.html')

    try {
        const content = await fs.readFile(filePath)

        sendResponse(res, 200, 'text/html', content)
    } catch(err) {
        console.log(err)
    }
}

export default serveStatic;