// Declare the fizzBuzz function here:
function fizzBuzz(num){
    let array = [];
    for(let i = 1; i <= num; i++)
    if (i % 3 === 0 && i % 5 === 0){
        array.push('fizzbuzz');
    }else if (i % 5 === 0) {
        array.push('buzz');
    }else if(i % 3 === 0 ) {
        array.push('fizz');
    }else{
        array.push(i)
    }
    return array;
}

// Export the fizzBuzz function here:
module.exports = {fizzBuzz};