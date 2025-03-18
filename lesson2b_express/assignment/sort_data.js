const {stations, trainType} = require("./data");

function sortTrains(trains, urlNum){

    let trainArr = [];

    for(let line in stations){

        trainArr = trainArr.concat(stations[line].filter((elem) =>{
            if (trains === "trainNumber"){
                return elem["train"].includes(urlNum);
            }else if(trains === "express"){
                return elem["train"].some(elem => trainType.express.includes(elem));
            }else if(trains === "local"){
                return elem["train"].some(elem => trainType.local.includes(elem));
            }
        }))
    }
    return trainArr;
}

module.exports = sortTrains;