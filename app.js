const express = require("express");
const https = require("https");
const app = express();

app.get("/",function(req,res){
   const url="https://api.openweathermap.org/data/2.5/forecast?zip=07054&appid=3299d6c683d2abf32e467419ddf0ac1a&units=imperial"
    https.get(url,function(response){
console.log(response.statusCode);
    })
    res.send("Server is up and running");
})


app.listen(3000,function(){
    console.log("Server is listening on prt 3000")
});