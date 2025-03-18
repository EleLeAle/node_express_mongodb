const {stations, trainType} = require("./data");

// console.log(trainType);
// console.log(trainType.local);
// console.log(trainType.express);

// const readline = require("node:readline");
// obj{
//     redline['a','b','c'...]
//     greenline[]
// }
// console.log(typeof stations)
function local(){

    let localArr =[];

    for(let line in stations){

        localArr = localArr.concat(stations[line].filter((elem)  => {

            // return elem["train"].includes('1') || elem["train"].includes('6');
            return elem["train"].some(elem => trainType.local.includes(elem) )

        }));
    }
    // console.log(localArr)
    return localArr

}
console.log(local())

function expressTrain(){
    let expressTrainArr =[];
    for(let line in stations){
        expressTrainArr = expressTrainArr.concat( stations[line].filter((elem) => {
            // return elem["train"].includes('2') || elem["train"].includes('3') || elem["train"].includes('4') || elem["train"].includes('5')
            return elem["train"].some(elem => trainType.express.includes(elem))
        }));
    }
    return expressTrainArr
}

// console.log(expressTrain())
// console.log(expressTrain())

function  getTrain(trainNumber){
    // console.log(trainNumber);
    let expressTrainArr =[];
    for(let line in stations){
        expressTrainArr = expressTrainArr.concat( stations[line].filter((elem) => {
            return elem["train"].includes(trainNumber.toString())
        }));
        // console.log(expressTrainArr);
    }
    return expressTrainArr
}


module.exports = {local, expressTrain, getTrain};