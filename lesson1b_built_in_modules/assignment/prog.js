const fs = require("fs");
const path = require("path");

/*require
* path.join - Let's say you're going on a treasure hunt, and you have to put together clues from different places. path.join helps you put together those clues (or paths) into one big clue. It makes sure all the pieces are in the right order, so you don’t get lost. It makes paths easier and safer to handle!
* __dirname - This is like the address of your house! When you're working on your code, __dirname tells you where you are. So if you're looking for files or folders, you can know exactly where to look.
For example, if your code is in a folder called "MyCode", __dirname will tell you, "Hey, you're in the MyCode folder!"
*fs.readdir - Imagine you’re opening your toy box and looking at all the toys inside. fs.readdir helps you look inside a folder (like your toy box) to see what’s in there (what files are inside).
*
* Asinc operation is only in FS, network, I/O operation (input/output);
*/
let fileName = fs.readdirSync('test_folder');
// console.log('fileName',fileName);

// let testFileName = fs.readdirSync(__dirname);
// console.log('testFileName \n',testFileName)

const filesArr = [];
const foldersArr = [];

fileName.sort();

fileName.forEach((elem) =>{

    let relFileName = path.join('test_folder',elem);
    let fileParams = fs.lstatSync(relFileName);
    if(fileParams.isDirectory()){
        foldersArr.push(elem);
    }else{
        filesArr.push(elem);
    }
});

const sortFilesByExt=[];
const sortExtByExt = [];

filesArr.forEach((elem) =>{
    let nameArr =[];
    let name;
    let ext;

    nameArr = elem.split('.');
    if(nameArr.length === 1){
        sortFilesByExt.push(elem);
        // console.log('\narr with only 1 elem\n', elem);
        return
    }
    if(nameArr[0]===''){
        sortFilesByExt.push(elem);
        // console.log('\nfirst elem is empty string\n', elem);
        return;
    }
    // if(nameArr[-1]===''){
    //     sortFilesByExt.push(elem);
    //     console.log('\n\n', elem)
    //     return;
    // }

    name = nameArr.slice(0,-1).join(".");
    // console.log("name",name)
    ext = nameArr.slice(-1);
    // console.log("\next\n",ext)

    // console.log('elem, name, ext',elem, name, ext)

    let newName = `${ext}*${name}`;
    sortExtByExt.push(newName);
})

sortExtByExt.sort();

sortExtByExt.forEach( (elem)=> {
    let nameArr = elem.split('*');
    sortFilesByExt.push(nameArr[1]+'.'+nameArr[0]);
})

// console.log(sortFilesByExt);

foldersArr.forEach((elem) => {
    console.log('['+elem+']');
})

sortFilesByExt.forEach((elem) => {
    console.log(elem);
})
