const express = require("express");
let config = require("./config.json");
const fs = require("fs");
let app = express();
app.use(express.json());
app.use(express.static(__dirname+"/public"));

let data = [];

app.get("/data", function( req, res ){
    data = JSON.parse(fs.readFileSync(__dirname+"/data/data.json"));
    res.status(200).send(data);
});

app.post("/data", function( req, res ){
   data.push(req.body);
   fs.writeFileSync(__dirname+"/data/data.json", JSON.stringify(data));
   res.send('recieved');
});

app.listen(config.port, config.host);
console.log("Server is now live on localhost : ", config.port);


