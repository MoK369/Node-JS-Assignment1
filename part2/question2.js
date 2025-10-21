/*
    Hoisting: is the operation of moving declarations to the top of their containing 
        scope (global or function scope) during the compilation phase.
    Hoisting happens with variables declared using var which these varaibles get to the top
    of their containing scope and get initialized by 'undefined'
    
    And Actually it happens with let and const but when they get to the top of their
    scope they don't get initialized leading to a Dead Zone in the area before their
    actual initialization.

    So we can say that TDZ is the place between the start of a block and the point 
        where a variable declared with let or const is initialized.
*/

// Example on Hoisting:
    console.log(age); // result is: undefined
    var age = 21;

// Example on TDZ:
    console.log(name); // result is: error access before initialization
    let name = "Ali";

    
    