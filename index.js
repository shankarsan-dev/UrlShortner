const express = require("express");
const {mongoConnect} = require("./connection");
const app = express();
const port = 8002;
const RouterURL = require("./routes/url");

app.use("/url",routerURL);
mongoConnect("mongodb://localhost/27017/short-url").then(()=>{console.log("MongoDb Connect")});

app.listen(port,()=>{
    console.log("server started at port 8002");

    
})