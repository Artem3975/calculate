import express from 'express'
import cors from 'cors'
import router from "./Router.js";
import swaggerUi from 'swagger-ui-express';
import  swaggerDoc from './OpenApi.json' assert {type: 'json'};


const PORT = 5000;
const app=express()


app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDoc))


app.post("/custom",(req,res)=>{
    res.status(200).send("get")
})




app.use(express.json())
app.use(cors())
app.use('/api',router)

app.listen(PORT, )