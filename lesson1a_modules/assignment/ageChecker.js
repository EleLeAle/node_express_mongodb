// Declare the ageChecker function here:
function ageChecker(age){
    if(typeof age === 'string'){
        return "ageChecker error: unexpected input";
    }
    if(age < 18){
        return "Child";
    }else if(age < 20){
        return "Military-Age";
    }else if(age > 21){
        return "Alcohol-Age"
    }
}

// Export the ageChecker function here:
module.exports = {ageChecker};