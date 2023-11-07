
//Task 1. Які кінцеві значення всіх змінних a, b, c та d після виконання коду нижче?
// let a = 1, b = 1; 
// let c = ++a;  
// let d = b++; 

// console.log("a = " + a)
// console.log("b = " + b)
// console.log("c = " + c)
// console.log("d = " + d)

//Task 2. Які значення мають a та x після виконання коду нижче??
// let a = 2;
// let x = 1 + (a * 2); //a = a * 2
// console.log("a = " + a)
// console.log("x = " + x) 

//Task 3. Приклад завдання додому. Які результати цих виразів?
// console.log("" + 1 + 0)
// console.log("" - 1 + 0)
// console.log("" + 1 - 2)
// console.log(true + false)
// console.log(6 / "3")
// console.log("2" * "3")
// console.log(4 + 5 + "px")
// console.log("px" + 4 + 5 )
// console.log("$" + 4 + 5)
// console.log("4" - 2)
// console.log("4px" - 2)
// console.log("  -9  " + 5)
// console.log("  -9  " - 5)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(" \t \n" - 2)

//Task 4. Який буде результат цих виразів?
// console.log(5 > 4);
// console.log("ананас" > "яблуко");
// console.log("2" > "12");


/**
 Перетворення типів (примітиви)

 - Перетворення до рядка
 - Перетворення до числа
 - Перетворення до логічного значення

 В JavaScript існують два типи перетворень даних: явні (які ви явно вказуєте у коді)
 та неявні (які відбуваються автоматично за певних обставин).
 */

// Перетворення до рядка
// let text = String(3);
// console.log(text);
// console.log(typeof text);


// let text = String(undefined);
// console.log(text);
// console.log(typeof text);

// let text = String(null);
// console.log(text);
// console.log(typeof text);

// let text = String(false);
// console.log(text);
// console.log(typeof text);

//Перетворення до числа
// let number = Number('4');
// console.log(number, typeof number);

// let text = + "4";
// console.log(text, typeof text);

/*let number = Number(undefined);
console.log(number, typeof number);*/

/*let number = Number(null);
console.log(number, typeof number);*/

// let number = Number(true);
// console.log(number, typeof number);

// let number = Number('qwerty');
// console.log(number, typeof number);

// Перетворення до логічного значення
// let bool = Boolean('2');
// console.log(bool, typeof  bool);

// let bool = Boolean(undefined);
// console.log(bool, typeof  bool);

// let bool = Boolean(null);
// console.log(bool, typeof  bool);

// let bool = Boolean('');
// console.log(bool, typeof  bool);

// let bool = Boolean(-9);
// console.log(bool, typeof  bool);

/**
--- Умовні конструкції ---

 У JavaScript є кілька умовних конструкцій, які дозволяють вам виконувати код в залежності від певних умов.
 Основні умовні конструкції включають if, else if, else та switch.
 */

//Найпростіший випадок
// var age = 17;
// if(age > 18) console.log("Є доступ!");

// if(false) console.log("Hi bool");

// if ('text') console.log("Hi text");

// if("") console.log("Null"); // ??


// Ще раз NaN, 0, null, undefined, '' це false. Все інше true

//Якщо одним рядком не обійдешся
// var age = 22;
// if (age > 18) {
//     age += 10;
//     console.log("Тепер мені " + age);
// }

//можливі варіанти
// let salary = 1000;
// if (salary < 1000){
//     console.log("Маленька ЗП")
// } else {
//     console.log("Вже краще")
// }

//Повна форма запису
// let salary = 999;
// if (salary < 1000){
//     console.log("Маленька ЗП")
// } else if (salary === 1000){
//     console.log("Вже краще")
// } else {
//     console.log("Супер")
// }

// Терарний оператор
// let birthday = 25;
// let discount = (birthday === 25) ? "30%" : "10%";
// console.log(discount);

// Як би це виглядало через if. У випадках коли умов мало, та ми одразу хочемо присвоїти чомусь значення,
// краще використати тернарний оператор.
// let birthday = 25;
// let discount;
// if (birthday === 25){
//     discount = "30%"
// } else {
//     discount = "10%"
// }

// І ніхто нам не забороняє робити все разом.
// let sex = 'male';
// let birthday = 25;
// let discount;
// if (sex === 'male'){
//     discount = (birthday === 25) ? "30%" : "10%";
// } else if (sex === 'female'){
//     discount = (birthday === 19) ? "30%" : "10%";
// } else {
//     discount = (birthday === 7) ? "10%" : "5%";
// }

//Повернемось ло логічних операторів
// || (АБО / OR), && (І / AND), ! (НЕ / NOT), ?? (оператор null-об’єднання). 

//|| (АБО). Якщо будь-який з його аргументів означає true, повертається true, інакше повертається false.
// console.log( true || true );  
// console.log( false || true );  
// console.log( true || false ); 
// console.log( false || false );

// if (1 || 0) { 
//     console.log( 'правдиво!' );
//   }


// let hour = 9;
// if (hour < 10 || hour > 18) {  //24 pm
//     console.log( 'Офіс зачинений.' );
// }

//Ми можемо передавати більше умов:
// let hour = 12;
// let isWeekend = true;
// if (hour < 10 || hour > 18 || isWeekend) {
//     console.log( 'Офіс зачинений.' ); 
// }

//АБО "||" знаходить перше правдиве значення
// console.log( 1 || 0 );
// console.log( null || 1);
// console.log( undefined || null || 0);

// let firstName = "";
// let lastName = "";
// let nickName = "СуперКодер";
// console.log( firstName || lastName || nickName || "Анонім");

//&& (І). У класичному програмуванні І повертає true, якщо обидва оператори є правдивими, і false в іншому випадку
// console.log( true && true );   
// console.log( false && true );  
// console.log( true && false );  
// console.log( false && false ); 

// let hour = 12;
// let minute = 31;
// if (hour == 12 && minute == 30) {
//   console.log( 'Час: 12:30' );
// }

// if (1 && 0) { 
//     console.log( "Сюди зайде?" );
//   }


// console.log( 1 && 0 ); 
// console.log( 1 && 5 ); //Оскільки обидва значення (1 і 5) є "правильними", вираз 1 && 5 повертає останнє значення, тобто 5. 

console.log( 1 && 2 && null && 3 && undefined); //до першого false
console.log( 1 && 2 && 3 ); //до останнього true

//Пріоритет І && вище за АБО ||
//Отже, код a && b || c && d по суті є таким самим, як код з виразами && у дужках: (a && b) || (c && d).

//a && b || c && d = (a && b) || (c && d )

//Що виведе код нижче?
// console.log( null || 2 || undefined );

// console.log(1 && null && 2);

// console.log( null || (2 && 3) || 4 ); 

//Чи виконається if?
// if (-1 || 0) console.log( 'перший' );
// if (-1 && 0) console.log( 'другий' );
// if (null || -1 && 1) console.log( 'третій' );
console.log((+null == false) < 1 ** 5) 
//---------------------------------------------------------------------------------------
// перебір варіантів: ---switch---

// var a = 8;
// switch (a) {
//     case 1:
//         console.log('варіант 1');
//         break;
//     case 2:
//         console.log('варіант 2');
//         break;
//     case 3:
//         console.log('варіант 3');
//         break;
//     case 4:
//         console.log('варіант 4');
//         break;
//     case 5:
//         console.log('варіант 5');
//         break;
//     default:
//         console.log('Що ???');
// }


//switch при порівнянні використовує === і це важливо!
//var num = '1';
// var num = 1;
// switch (num) {
//     case 1:
//         console.log("Number!")
//         break
//     case '1':
//         console.log('String'); 
//         break;
//     case 2:
//         console.log(' два');
//         break;
//     case 3:
//         console.log(' три');
//         break;
//     default:
//         console.log('Що ???');
// }

// Практика
// Задача 1: Напишіть програму на JavaScript, яка приймає число від користувача і визначає, чи є введене число парним чи непарним.










// Відповідь
// Запитуємо користувача про число
/*var number = 10;

// Перевіряємо парність числа
if (number % 2 === 0) {
    console.log("Число " + number + " - парне.");
} else {
    console.log("Число " + number + " - непарне.");
}*/


/*
Задачка 2: Калькулятор знижки
Створіть програму, яка запитує в користувача суму покупки і визначає, яка знижка буде застосована в залежності від суми:
- Якщо сума менше або дорівнює 1000 грн, знижка складає 5%.
- Якщо сума більше 1000 грн, але менше або дорівнює 5000 грн, знижка складає 10%.
- Якщо сума більше 5000 грн, знижка складає 15%.
 */

// let amount = 13000;

// switch (true) {
//     case amount <= 1000: console.log ("Skidka is 5%"); break;
//     case (amount > 1000) && (amount <= 5000)  : console.log ("Skidka is 10%%"); break;
//     case (amount > 5000)  : console.log ("Skidka is 15%%"); break;
// }









// Сума покупки
// var purchaseAmount = 350;

// Ініціалізуємо змінну для знижки
// var discount = 0;

// Розраховуємо знижку залежно від суми покупки
// if (purchaseAmount <= 1000) {
//     discount = 0.05; // 5%
// } else if (purchaseAmount > 1000 && purchaseAmount <= 5000) {
//     discount = 0.10; // 10%
// } else {
//     discount = 0.15; // 15%
// }

// Розраховуємо суму до оплати
// var discountedAmount = purchaseAmount - (purchaseAmount * discount);

// Виводимо результати
// console.log("Сума покупки: " + purchaseAmount + " грн");
// console.log("Знижка: " + (discount * 100) + "%");
// console.log("Сума до оплати: " + discountedAmount + " грн");
