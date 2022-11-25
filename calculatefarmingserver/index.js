import express from 'express'
import cors from 'cors'
import router from "./Router.js";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const PORT = 5000;
const app=express()


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library API",
            version: "1.0.0",
            description: "A simple Express Library API",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs))


app.post("/custom",(req,res)=>{
    res.status(200).send("get")
})




app.use(express.json())
app.use(cors())
app.use('/api',router)

app.listen(PORT, )