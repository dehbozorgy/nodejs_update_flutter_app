const express = require("express");
var http = require("http");
const cors = require("cors");
const app = express();
const port = 3000;
var server = http.createServer(app);
var io = require("socket.io")(server,{cors:{origin:"*"}});
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({type:'application/json'}));

mongoose.connect('mongodb://127.0.0.1:27017/test',{
    authSource: "admin"
});

mongoose.connection.on("open",function (){
    console.log('Connected To Mongodb')
});


io.on("connection",async (socket)=>{});


// Route Product
const routeUpdate = require('./modules/routes/update');

app.use('/update',routeUpdate);

app.use('/now',(req,res)=>{
    console.log('Date Now',Date.now());
    res.json({
        'data':new Date(Date.now()),
        'success':true
    })
})

server.listen(port,()=>{
    console.log(`server started at port=${port}`);
});