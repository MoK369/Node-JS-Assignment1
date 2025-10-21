/*  
    Type Conversion: simply it's when we convert a type of a value from one thing to another.
    like converting a string into number.
    type conversion classes in JS are: Number, Boolean, String.
    
    Type Coercion: we can say that its an implicit type conversion that's done by JavaScript
        when it works on an operation that includes different Data Types
*/

// Example on Type Coversion:
let string = "1233";
let num = Number(string);
console.log(num);


// Example on Type Coercion:
let value1 = "user"
let value2 = 369;
let userName = value1 + value2;
console.log(userName);

