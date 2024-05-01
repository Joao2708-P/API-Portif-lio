import express from 'express';
import router from './routes/route' 
import cors from 'cors'
import * as https from 'https'
import fs from 'fs'

const app = express()
app.use(express.json())
app.use('/api', router)
app.use(cors({
    origin: ['http://localhost:3000/']
}))

const port = 8080

https.createServer({ 
    key: fs.readFileSync('key-rsa.pem'),
    cert: fs.readFileSync('cert.pem')
  }, 
    app
  ).listen(8000, () => {
     console.log("API disponível em https://localhost:8000")
  })