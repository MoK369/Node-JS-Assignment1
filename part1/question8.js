
function divisibleBy3And5(num){
    if(num % 3 == 0 && num % 5 == 0){
        console.log("Divisible by both 3 and 5");
        
    } else {
        console.log("NOT divisible by 3 or 5");
        
    }
}

divisibleBy3And5(12);