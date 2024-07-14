const mongoose = require("mongoose");
// const mongoConnect = mongoose.connect("mongodb://localhost/27017/short-url").then(()=>{console.log("MongoDb Connect")});
async function connectMongoDB(url){
    return mongoose.connect(url);

}
module.exports = {
    connectMongoDB,
};