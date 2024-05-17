const express  = require('express')
const exam = require('./Route/Exam')
const cors = require('cors');
const serverless = require('serverless-http');
const { swaggerUi, swaggerDocs } = require('./swagger');


const app = express()
app.use(cors())
app.use('/exam',exam)
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.get('/',async(req,res)=>{
    res.send("welcome to home api")
})

app.listen(3000,()=>{
    console.log("success....")
})


module.exports.handler = serverless(app);