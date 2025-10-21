function getLargestElement(array){
    let largest = array[0];
    for (const element of array) {
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

let arr = [1,3,7,2,4];
let result = getLargestElement(arr);
console.log(result);
