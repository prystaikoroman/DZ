// // // 1) створити функцію яка приймає масив та виводить його
// let arrayForTest = ['cola','wiskey', 'braided cheese'];
// function myListsFunction (lists){
//     document.write(`список містить ${lists}`)
// }
// myListsFunction(arrayForTest);
//
// // або
// const writeArray = arrayForTest => {
//     for(arrayElement of arrayForTest){
//         console.log(arrayElement);
//     }
// }
// writeArray(arrayForTest);
// // 2) створити функцію яка заповнює масив рандомними числами та виводить його. 
// // Для виведення використати попередню функцію.
// function myListsViewFunction (lists){
//     document.write(`список містить ${lists}`);
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);

//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
//   }

// let listRandom  = [];
// let intStart = prompt('Введіть мінімальне число для генерації:');

// for(let i = 0; i<20; i++){
//  listRandom[i] = getRandomInt(intStart, intStart*100);
// }

// myListsViewFunction(listRandom);


// // 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// // 6) створити функцію яка повертає найменьше число з масиву
// function myFindMaxInArrayFunc (){
// let smalestNumber = arguments[0]
//     for(let i = 1; i< arguments.length; i++){
// if(smalestNumber > arguments[i]){
// smalestNumber = arguments[i]
// }
// }
// return smalestNumber
// }

// document.write( myFindMaxInArrayFunc(9 ,45, -1, 0, -65, 987));


// // 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// // 5) створити функцію яка повертає найбільше число з масиву
// function myFindMaxInArrayFunc (){
//     let largestNumber = arguments[0]
//         for(let i = 1; i< arguments.length; i++){
//     if(largestNumber < arguments[i]){
//         largestNumber = arguments[i]
//     }
//     }
//     return largestNumber
//     }

//     document.write( myFindMaxInArrayFunc(9 ,45, -1, 0, -65, 987));


// // 7) створити функцію яка приймає масив чисел,
// // сумує значення елементів масиву та повертає його.
// function mySumArrayFunc (){
//     let sum = 0;
//         for(const argument of arguments){
//             sum +=argument;
//         }           
//     return sum;
//     }

//     document.write( mySumArrayFunc(9 ,45, -1, 0, -65, 87));


// // 8) створити функцію яка приймає масив чисел
// // та повертає середнє арифметичне його значень.
// function mySumArrayFunc (){
//     let sum = 0;
//         for(const argument of arguments){
//             sum +=argument;
//         }           
//     return sum/arguments.length;
//     }

//     document.write( mySumArrayFunc(9 ,45, -1, 0, -65, 87));


// // 9) Створити функцію яка приймає масив будь яких объектів,
// // та повертає масив ключів всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function mySumArrayFunc() {
//     let arrayKeys = [];
//     // console.log(arguments[0]);
//     for (const arrayObjects of arguments[0]) {
//         arrayKeys.push(Object.keys(arrayObjects));
//     }
//     return arrayKeys.flat(3);
// }
// console.log(mySumArrayFunc([{name: 'Dima', age: 13, gender: "male",car:false }, {model: 'Camry'}]));


// // 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// // EXAMPLE:
// // [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// function mySumArrayFunc() {
//     let arrayKeys = [];
//     // console.log(arguments[0]);
//     for (const arrayObjects of arguments[0]) {
//         arrayKeys.push(Object.values(arrayObjects));
//     }
//     return arrayKeys.flat(3);
// }
// console.log(mySumArrayFunc([{name: 'Dima', age: 13, gender: "male",car:false }, {model: 'Camry'}]));


// // 11) створити функцію  яка скаладає значення елементів
// // з однаковими індексами  та повертає новий результуючий масив.
// //   EXAMPLE:
// //   [1,2,3,4]
// //   [2,3,4,5]
// //   результат
// //   [3,5,7,9]
// let array1 =  [1,2,3,4];
// let array2 =  [2,3,4,5];
//
// function newArray (array1, array2){
//     let arr = array1.map((value , index, array) => {
//         return array[index] = array2[index] + value;});
//     return arr;
// }
// console.log(newArray(array1, array2));
// // ============================================================================================

// // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let givenArray = [-1, 25, 54, 4, 789, 0, -4562, 54, -45];
// let minValue = ( Array)=>{
//     console.log(Array.reduce( reducer= (acc, val) =>{
//         if(acc<val){return acc; }
//         return val;
//     }, 0));
//     return Array.reduce( reducer= (acc, val) =>{
//         if(acc>val){return acc; }
//         return val;
//     }, 0);
// }
// console.log(minValue(givenArray));


// // - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
// //   Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
// let userChoose = confirm("вивести: ключі -> так, значення -> ні");
// let arrayGiven = [{name: 'Dima', age: 13, gender: "male", car: false}, {model: 'Camry'}];
//
// function mySumArrayFunc() {
//     let arrayKeys = [];
//     if (userChoose) {
//         for (const arrayObjects of arguments[0]) {
//             arrayKeys.push(Object.keys(arrayObjects));
//         }
//         return arrayKeys.flat(3);
//     }
//     for (const arrayObjects of arguments[0]) {
//         arrayKeys.push(Object.values(arrayObjects));
//     }
//     return arrayKeys.flat(3);
// }
//
// console.log(mySumArrayFunc(arrayGiven));


// // - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let switchFunc = (array, indx)=>{
//     let elementFirstEntries = array[indx];
//     array[indx] = array[indx+1];
//     array[indx+1] = elementFirstEntries;
//     return array;
// }
// console.log(switchFunc([9, 8, 0, 4], 0));
// console.log(switchFunc([9, 8, 0, 4], 1));
// console.log(switchFunc([9, 8, 0, 4], 2));


// // - Сворити функцію яка буде переносити елементи з значенням 0
// // у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// let ff = [1, 0, 6, 0, 3];
//
// let concatFunc = (array) => {
//    let arr_1 = [];
//    let arr_2 = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] !== 0) {
//             arr_1.push(array[i]);
//         } else {
//             arr_2.push(array[i]);
//         }
//     }
//     return arr_1.concat(arr_2);
// }
// console.log(concatFunc(ff));


//
// // - Дано список імен.
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// // ============================================================================================
//
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// // let h =[];
// // h.filter()
// let normalizeFunc = (strName) =>{
//     let strNormalized ;
//     strNormalized  = strName.split(' ').filter(word => word !="").reduce(red = (acc, cur)=> acc + ' '+ cur);
//     // console.log(strNormalized);
//     return strNormalized;
// }
//
// console.log(normalizeFunc(n1));
// console.log(normalizeFunc(n2));
// console.log(normalizeFunc(n3));


// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //