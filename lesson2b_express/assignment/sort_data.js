const stations = require("./data");
const readline = require("node:readline");
// obj{
//     redline['a','b','c'...]
//     greenline[]
// }

function local(){

    let localArr =[];

    for(let line in stations){

        localArr = localArr.concat(stations[line].filter((elem)  => {

            return elem["train"].includes('1') || elem["train"].includes('6')

        }));
    }
    return localArr

}

function expressBus(){
    let expressBusArr =[];
    for(let line in stations){
        expressBusArr = expressBusArr.concat( stations[line].filter((elem) => {
            return elem["train"].includes('2') || elem["train"].includes('3') || elem["train"].includes('4') || elem["train"].includes('5')
        }));
        console.log(expressBusArr);
    }
    return expressBusArr
}

function  getTrain(trainNumber){
    console.log(trainNumber);
    let expressBusArr =[];
    for(let line in stations){
        expressBusArr = expressBusArr.concat( stations[line].filter((elem) => {
            return elem["train"].includes(trainNumber.toString())
        }));
        console.log(expressBusArr);
    }
    return expressBusArr
}


module.exports = {local, expressBus, getTrain};