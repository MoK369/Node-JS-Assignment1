/*
    for of: it iterats over iterable objects like arrays, strings, maps, sets, etc.
     - Can be used with break, continue, and return.
     - Works with async/await in an async function.
     - Cleaner syntax for simple iteration.

     foreach: it executes a callback function on each array element.
     - access to element, index, and the entire array.
     - More functional programming style.
     - Cannot use break, continue, or return to exit early

     Notice there is a key difference between for of and foreach with async operations:
        - which is when we await on a premise function inside "for of" that await stops the code after 
        the async function from executing and also stops the next iterations from getting executed.

        - But with foreach the await here it only stops the code after the async function from 
        getting executed but it doesn't stop the next iterations which leads to almost simultaneously
        all async operations start at the same time
*/