const express = require("express");
const {connectMongoDB} = require("./connection");
const app = express();
const port = 8000;
const routerURL = require("./routes/url");
const URL = require("./models/url");
app.use(express.json());
app.use("/url",routerURL);
app.get("/:shortId",async (req,res)=>{
    const shortId = req.params.shortId;
  const entry =  await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp: Date.now(),}
    },});
res.redirect(entry.redirectURL);
})
connectMongoDB("mongodb://0.0.0.0:27017/shortUrl").then(()=>{console.log("MongoDb Connect")}).catch((error)=>{
    console.log(error)
});

app.listen(port,()=>{
    console.log("server started at port 8000");

    
})