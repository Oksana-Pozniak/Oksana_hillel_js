// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs more than 5, then the cat is very fluffy and needs to be combed :) */
const weight = 3;
if (weight < 5) {
    console.log ('Feed the cat!');
} else if (weight > 5) {
    console.log('Comb the cat!');
}
/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */
let age = 55;
if (!(age >= 18 && age <= 50)) {
    console.log('Hire!');
}
/*The 2nd variant, as it seems to be the task isn't written quite understandable.
So to avoid misunderstanding I'd like to rewrite it.*/
let age2 = 30;
if (age2 >= 18 && age2 <= 50) {
    console.log('Hire2!');
}

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */
const grade = 'E';
if (grade === 'A' || grade === 'B'){
    console.log('The exam is passed');
} else if (grade === 'C' || grade === 'D'){
    console.log('The exam should be retaken');
} else  if (grade === 'E'){
    console.log('You are expelled from the Hogwarts School of Wizardry and Witchcraft');
}

/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */
const gameNumber = 42;
const userNumber = parseInt(prompt("Enter your guess:"));
if (!isNaN(userNumber)) {
    if (userNumber === gameNumber) {
        alert('Congratulations! You guessed the number.');
    } else if (gameNumber < userNumber) {
        alert('Your number is less');
    } else if (gameNumber > userNumber){
        alert("Your number is more");
    }
} else {
    alert('Not a number');
}

 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */
let height = 100;
let rule = (height < 140) ? "Заборонено на атракціон" : "Проходьте, будь ласка!";
console.log(rule);
/* Task - 6

Rewrite if..else using several ternary operators '? */
/*if (height < 50)
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/
let personHeight = 80
console.log(
    personHeight < 50
        ? "Forbidden to use attraction"
        : personHeight >= 50 && personHeight < 80
            ? "Permit - attraction №1"
            : personHeight >= 80 && personHeight < 120
                ? "Permit - attraction №1 or №2"
                : "Permit - All"
);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */
let dayNumber = 5;
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Not our case!');
}

/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */
let monthNumber = 12;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('winter');
        break;
    case 3:
    case 4:
    case 5:
        console.log('spring');
        break;
    case 6:
    case 7:
    case 8:
        console.log('summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('fall');
        break;
    default:
        console.log('Not a month number')
}
 /* Task - 9
 Rewrite the "switch" into an "if"

 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */
let browser = '';
if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome') {
    alert( 'Okay we support these browsers too' );
} else if (browser === 'Firefox') {
    alert('Okay we support these browsers too');
} else if (browser === 'Safari') {
    alert('Okay we support these browsers too');
} else if (browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    console.log( 'We hope that this page looks ok!' );
}

/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/
const employeeAge = 16;
switch (true){
    case employeeAge < 16:
        console.log('We cant hire u!');
        break;
    case employeeAge >= 18:
        console.log( 'U can take full time job' );
        break;
    case employeeAge === 16 || age === 17:
        console.log( 'U can take part time job' );
        break;
    default:
        console.log('Invalid info')
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/
let userName = prompt("Enter your username:");
if (userName === "Admin") {
    let password = prompt("Enter your password:");
    if (password === null || password === "") {
        alert("Canceled");
    } else if (password === "TheMaster") {
        alert("Welcome!");
    } else {
        alert("Wrong password");
    }
} else if (userName === null || userName === "") {
    alert("Canceled");
} else {
    alert("I don't know you");
}