const express = require('express');
const app = express();

const cors = require('cors');

require('dotenv').config();
const Port = process.env.PORT || 4000;

const cookieparser = require('cookie-parser');
app.use(cookieparser());

const corsOptions = {
    origin: "http://localhost:3001",
    methods:"GET,POST,PUT,DELETE",
    Credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

const router = require('./Routes/router');
app.use("/api/v1",router);

const connect = require('./config/database');
connect();

app.listen(Port,(req,res)=>{
    console.log('App started succesfully')
})

