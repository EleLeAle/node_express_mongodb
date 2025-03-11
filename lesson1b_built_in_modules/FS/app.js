const fs =require("fs");

//take two rapam: the name of file, encodind(utf8);
//read files synchronously
const data = fs.readFileSync("../data.txt", "utf8");

console.log(data);
// console.log(fs);

//read a file asynchronously
fs.readFile("../data2.txt", "utf8", (err, data)=>{
    if(err){
        throw err
    }
    console.log(data)
});

//writes to a file synvhronously
fs.writeFileSync("../data.txt", "Hello World!");

fs.writeFile("../data2.txt", "Hello Node!@",(err, data) => {
    if(err){
        throw err
    }
    console.log("added text to data2. txt")
})

