// /* Additional materials:
// https://www.w3schools.com/js/js_type_conversion.asp
// https://javascript.info/type-conversions
// https://www.programiz.com/javascript/type-conversion
// https://www.geeksforgeeks.org/javascript-type-conversion/
// https://medium.com/@13__TOMMY/type-conversion-javascript-basics-a6c55e71cada
// https://dev.to/alexanie_/javascript-type-conversions-1p3g
// */

// //Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:

console.log('number' + 3 + 3)  // number33 : на першому місті стрінг, тому відбувається перетвореннч чисел на стрінгу, зі знаком + відбувається конкатанація
console.log(null + 3) // 3 : null - це 0, тому 0+3 = 3
console.log(5 && "qwerty") // qwerty : 5 - true, "qwerty" - true, повертає останнє true значення
console.log(+'40' + +'2' + "hillel") // 42hillel + спереду перетворює строку у цифру, тому 40 +3 = 42. строка "hillel" перетворюж цифру 42 у строку
console.log('10' - 5 === 6) //  -  перетворює стрінгу у число 10, потім 10 - 5 = 6, що не дорівнює 6, тому повертає false
console.log(true + false) // + перетворює буліани на числа, а саме true на 1, false на 0, тому 1+0=1
console.log('4px' - 3) // 4px мало б перетворитись на цифру, але черех px це NaN 
console.log('4' - 3) // - перетворює стрінгу на цифру, тому буде 4-3=1
console.log('6' + 3 ** 0) // ** - це ступень, а будь-яке число піднесене до 0го ступеню - це 1. тому стрінга "6" конкатанується з 1
console.log(12 / '6') // стрінга "6" перетворюється на цифру, тому 12 / 6 = 2
console.log('10' + (5 === 6)) // 5 не дорівнює 6 і тому це false, стріншга "10" конкатанується з false, тому виходить стрінга '10false'
console.log(null == '') // null не дорівнює пустій стрінзі, тому false
console.log(3 ** (9 / 3)) // спочатку 9 / 3 = 3, а 3 у 3му ступені це 27
console.log(!!'false' == !!'true') // не пусті стрінги 'false' i 'true'  - це true, а знаки оклику це ні, виходить що в обох випадках не true і вони дорівнюють одне одному і це true
console.log(0 || '0' && 1) // 0 цифрв або стрінга "0", стрінга "0" буде true, тому далі перебираємо операнди, 1 також true, тому будемо виводити його, як останнє правдиве значення
console.log((+null == false) < 1) // + перетворює null yцифру 0, false також 0, так як вони рівні, то це true. true як число це 1, а 1 не менше 1, тому буде false
console.log(false && true || true) // false і true буде false, томущо обидва операнди мають бути true, потім порівнюємо попереднє false з або true, і  буде true, бо саме або дозволяє вибрати один із операндів який є  true
 console.log(false && (false || true)) // першв дія виконується у дужках і вона true, потім false і true приведеться до false 
console.log((+null == false) < 1 ** 5) // + робить з null цифру 0, false також дорівнює 0, тому операція в дужках буде true. 1 у ступені 5 буде 1. true < 1  буде false, тому що true перетворюється на 1, тому кірневий результата 1 < 1 = false
