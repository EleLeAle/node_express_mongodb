const os = require("os");
const fs = require("fs");
const path = require("path");
console.log(`Operating System: ${os.type()}`);

console.log(`Memory Available (bytes): ${os.freemem()}`);

// takes two parameters first : the name if the file, encoding: "utf8"
// reads file synchronously
const data = fs.readFileSync("../data.txt", "utf8");
const data2 = fs.readFileSync("../data2.txt", "utf8");

console.log(data, data2);

fs.writeFileSync("new_file.txt", `${data}${data2}`);

// read a file asynchronously
fs.readFile("../data2.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log("data from asynchronously method",data);
});

// writes to a file synchronously
fs.writeFileSync("../data.txt", "Hello World test !");


//this is rewrite text in file
fs.writeFileSync("../data2.txt", "\nadded new text in data 2", (err, data) => {
    if (err) {
        console.log(err); // throw err
    }

    console.log(" added text to data2.txt",fs.readFileSync("../data2.txt", "utf8") );
});

const str = "\nSteven is adding next string to this file";

fs.appendFile("../data2.txt", str, (err) => {
    if(err){
        throw err;
    }
    console.log("added more data in data2", fs.readFileSync("../data2.txt", "utf8"))
})

fs.writeFileSync("new_file.txt", `${data} ${data2}`);

const joinedData = fs.readFileSync("./new_file.txt", "utf8");
console.log(`joined data: ${joinedData}`);

console.log("\nBefore Async processing\n");

fs.readFile("../data.txt", "utf8", (err,result)=>{
    if (err){
        console.log(err);
        return err;
    }else{
        console.log(`asynchronous data.txt: ${result}`);
    }
})

console.log("\nAfter Async processing\n");


const filePath = path.join("path-folder", "test.js"); // => path-folder/test.js
console.log(`File path to test.js file: ${filePath}`);

const base = path.basename(filePath); // => test.js
console.log(`Base file name: ${base}`);

console.log(__dirname);

fs.readdir(__dirname, function (err, files){
    if(err){
        console.log(err);
    }else{
        // files.forEach(function (file){
        //     console.log("Files in this directory: \n", file)
        // })
        // console.log("Files in this directory: \n", files)
        console.log("Files in this directory: \n", files);
    }
})