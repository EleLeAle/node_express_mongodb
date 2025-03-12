const fs = require("fs");
const path = require("path");

console.log(__dirname);



let fileName = fs.readdirSync(path.join("..",".."));
console.log(fileName);

console.log(path.join("..",".."));
const filesArr = [];
const foldersArr = [];

fileName.forEach((elem) =>{
    console.log(elem);
    let relFileName = path.join("..","..",elem);
    let fileParams = fs.lstatSync(relFileName);
    if(fileParams.isDirectory()){
        foldersArr.push(elem);
    }else{
        filesArr.push(elem);
    }

})
console.log('folders Arr:', foldersArr, '\n','filesArr:', filesArr);

