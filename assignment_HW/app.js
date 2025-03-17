const express = require("express");
const {aircraft_facts, physics_facts} = require('./data');
const {listen} = require("express/lib/application");
const app = express();
const PORT = 3001;

app.get



app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})