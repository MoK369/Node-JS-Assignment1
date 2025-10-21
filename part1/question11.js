function sumOf(...numbers){
    let theSum = 0;
    for (const num of numbers) {
        theSum += num;
    }
    return theSum;
}

var result = sumOf(1,2,3,4,5);
console.log(result);
