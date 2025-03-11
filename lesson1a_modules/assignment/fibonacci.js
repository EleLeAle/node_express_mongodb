// Declare the fibonacci function here:
function fibonacci(num){
    let array = [0,1];
    // if(num === 1){
    //     array.push(0);
    // }else if(num > 1) {
    //     array = [0, 1]
    //     for (let i = 2; i < num; i++) {
    //         array.push(array[i - 1] + array[i - 2]);
    //     }
    // }
    for(let i = 2; i < num; i++){
        array.push(array[i - 1] + array[i - 2]);
    }

    return array.slice(0, num);

}

// Export the fibonacci function here:

module.exports = fibonacci;