import express from 'express';
import router from './routes/route' 
import cors from 'cors'
import * as https from 'https'
import fs from 'fs'

const app = express()

app.use(express.json())
app.use('/api', router)
//app.use(cors({
  //  origin: ['http://localhost:3000/']
//}));

const port = 8080

app.listen(port, () => {
  console.log("API disponível em http://localhost:"+port)
})