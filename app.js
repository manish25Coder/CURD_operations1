require('dotenv').config();
const express = require('express')
const cors = require('cors')

const connectToDb = require('./config/db.js')
const app = express();

//Express middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))//get request  url ke through

app.use(cors())


//init connection to db
connectToDb()

const userRoutes= require("./routers/userRouter.js")


app.use('/',userRoutes)
module.exports = app;