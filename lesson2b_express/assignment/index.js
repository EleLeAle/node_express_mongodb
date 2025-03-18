const express = require("express");
const app = express();
const PORT = 3000;

const stations = require('./data.js');
const {local , expressBus, getTrain} = require("./sort_data");

app.get("/", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send(stations);
});

app.get("/red", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send(JSON.stringify(stations.redLine));
});

app.get("/green", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send(stations.greenLine);
});

app.get("/local", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send(local());
});

app.get("/express", (req, res) => {
    console.log("user hit the resource");
    res.status(200).send(expressBus());
});

app.get("/:trainNumber(\\d+)", (req, res) => {
    console.log("user hit the resource");

    let trains = getTrain(req.params["trainNumber"]);
    if(trains.length === 0){
        res.status(404).send("Train not found")
        return
    }

    res.status(200).send(trains);
});

app.all("*", (req,res) => {
    res.status(404).send("The MTA is currently working to complete this application soon. Thank you for your patience")
})

app.listen(PORT, () =>{
    console.log(`server is listening on port ${PORT}`);
});

