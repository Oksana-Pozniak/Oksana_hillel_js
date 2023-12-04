/* Task - 0
    Create a function task1Func which will always return true
*/
function task1Func () {
       return true;
}
let functionResult = task1Func();
console.log(functionResult);

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.
    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/
function minNumber (a, b) {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}
let result = minNumber(25,35);
console.log (result);
/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
function raisePower1(x,n) {
    return Math.pow (x,n);
}
let result1 = raisePower1(5, 3);
console.log ("The result of raising to the power is " + result1);

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/
function raisePower2(x, y= 5) {
    return Math.pow (x,5);
}
let result2 = raisePower2(5);
console.log ("The result of raising to the power is " + result2);

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/
const lunch = (pet) => {
    return () => {
        let lunchCode;
        switch (pet){
        case 1:
            lunchCode = " pizza";
            break;
        case 2:
            lunchCode = " spagetti";
            break;
        case 0:
            lunchCode = " other";
            break;
        }
    return 'My lunch for today is' + lunchCode;
    };
};

const myLunch = lunch(2);
console.log(myLunch());
/* Task 5
    You need to draw a rectangular triangle of stars (or pluses, or some other symbol) in the console: one star on the first line, two on the second, and so on. 
    Write your solution in the form of a function that takes two parameters: the height of the triangle and the symbol you want to use to draw it.

    Example, 
    drawTriangle(5, *);
*
**
***
****
*****

*/
 function drawTriangle(hight, plus) {
    for (let x = 1; x <= hight; x++) {
        let line = '';
        for ( let y =1; y <= x; y++) {
            line += plus + '';
        }
        console.log(line);
    }
}
drawTriangle(5, '+');

/* Task 6
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
 
    Example,
    if function2  returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION"
*/
function function2() {
    return 'THIS IS THE RESULT OF CALLBACK FUNCTION';
}

function function1(callbackFunction) {
    const result = callbackFunction();
    return `The result = ${result}`;
}

// Example usage:
const taskResult = function1(function2);
console.log(taskResult);


/* Task 7
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example
    funcName(7) // => gooooooogle
*/

function task13Func (numberOfOs) {
    if (numberOfOs <= 0) {
        return "Enter a number that is !<= 0";
    }
    const letter = "o".repeat(numberOfOs);
    return 'g'+ letter +'gle';
}
 const myO = task13Func(5);
console.log(myO);