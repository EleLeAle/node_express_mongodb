const express = require("express");
const app = express();
const PORT = 3000;

const {stations} = require('./data.js');
const sortTrains = require("./sort_data");


app.get("/", (req, res) => {
    res.status(200).send(stations);
});

app.get("/red", (req, res) => {
    res.status(200).send(stations.redLine);
});

app.get("/green", (req, res) => {
    res.status(200).send(stations.greenLine);
});

app.get("/orange", (req, res) => {
    res.status(200).send(stations.orangeLine);
});

app.get("/local", (req, res) => {
    res.status(200).send(sortTrains("local"));
});

app.get("/express", (req, res) => {
    res.status(200).send(sortTrains("express"));
});

app.get("/:trainNumber(\\d+)", (req, res) => {
    let num = req.params["trainNumber"];

    let callSortTrains = sortTrains("trainNumber",num)

    if(callSortTrains.length === 0){
        res.status(404).send("Train not found")
        return
    }

    res.status(200).send(callSortTrains);
});

app.all("*", (req,res) => {
    res.status(404).send("The MTA is currently working to complete this application soon. Thank you for your patience")
})

app.listen(PORT, () =>{
    console.log(`server is listening on port ${PORT}`);
});

