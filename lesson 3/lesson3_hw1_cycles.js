/*Task - 1
  Replace the "for" loop with a "while" loop

for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}

*/
let i = 0;
while (i < 8){
    console.log( `число - ` + i++);
}

/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */
let sumNumber = 0;
for (let number = 0; number <= 50; number++) {
    if (number % 3 !== 0) {
        sumNumber += number;
    }
}
console.log('Calculation with For = ' + sumNumber);

let sumNumberWhile = 0;
let number = 0;
while (number <= 50){
    if (number % 3 !== 0) {
        sumNumberWhile += number;
    }
    number++;
}
    console.log('Calculation with While = ' + sumNumberWhile);

let sumNumberDoWhile = 0;
let number2 = 0;
do {
    if (number2 % 3 !== 0) {
        sumNumberDoWhile += number2;
    }
    number2++;
} while (number2 <= 50);
console.log('Calculation with Do While = ' + sumNumberDoWhile);

/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/
let sumNumber2;
let secondNumber = 250;
for (let firstNumber = -100; secondNumber <= 250; secondNumber++ ) {
    sumNumber2 = firstNumber += secondNumber;
}
console.log('Sum of numbers = ' + sumNumber2);

/* Task - 4
  Make a timer that will count from 10 to 0
  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/
for (let timer = 10; timer >= 0; --timer ) {
    console.log( timer + ' seconds left');
}
/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */
 x = 1
for (initialNumber = 7; x <= 7; ++x) {
    console.log( 'multiplication result: ' + initialNumber * x);
}
/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/
let facResultFor = 1;
const numberFor = 4;
for (let x = 1; x <= numberFor; x++) {
    facResultFor *= x;
}
console.log(`Factorial result with FOR LOOP of ' + numberFor:`, facResultFor);

let facResultWhile = 1;
const numberWhile = 4;
let y = 1;
while ( y <= numberWhile ) {
    facResultWhile *= y;
    y++;
}
console.log(`Factorial result with WHILE LOOP of ' + numberFor:`, facResultWhile);

let facResultDoWhile = 1;
const numberDoWhile = 4;
let z = 1;
do {
    facResultDoWhile *= z;
    z++;
} while (z <= numberDoWhile);
console.log(`Factorial result with DO WHILE LOOP of ' + numberFor:`, facResultDoWhile);


/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //
while (initialBathState < bathCapacity){
    initialBathState += bucket;
}
console.log('The loop is over right now cause the tube is full with ' + initialBathState + " liters");
