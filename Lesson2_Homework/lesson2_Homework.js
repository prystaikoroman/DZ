// // --створити масив з:
// // - з 5 числових значень
// // варіант #1
// let array5 = [4, 6, 5.4, 5.34, NaN];
// console.log('варіант #1', array5);
//
// //варіант #2
// let array5digits = [];
// for (let i = 0; i <= 4; i++) {
//     array5digits.push(Number.parseFloat(prompt('Ведіть число ' + (i + 1) + ':')))
// }
// console.log('варіант #2', array5digits);
//
//
// // - з 5 стічкових значень
// // #1
// let arr5str = ['Fender', 'Gibson', 'Ibanes', 'ESP', 'Gretsch'];
// console.log(arr5str);
//
// // #2
// let array5strings = [];
// for (let i = 0; i <= 4; i++) {
//     array5strings.push(prompt('Ведіть слово ' + (i + 1) + ':'))
// }
// console.log(array5strings);
//
//
// // - з 5 значень стрічкового, числового та булевого типу
// let array5mix = ['Andriy', 35, 4.245, true, false];
// console.log(array5mix);
// // - та вивести його в консоль
//
//
// // -- Створити пустий масив.
// // Наповнити його будь-якими значеннями
// // звертаючись до конкретного індексу. Вивести в консоль
// let strLorem25elements = [];
// strLorem25elements = document.getElementById('loremString').textContent.split(' ');
// console.log('Lorem на 16 позиції містить слово :', strLorem25elements[15]);
//
//
// // - За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом і індексом всередині
// let strLorem25elements2 = [];
// strLorem25elements2 = document.getElementById('loremString').textContent.split(' ');
//
// for (let i = 1; i <= 10; i++) {
//     document.write('<div style = "background-color: rgb(179, 200, 212);"> #' + i + ': ' + strLorem25elements2[i] + ' </div>');
//     document.write('<br>');
// }
//
//
// // - За допомогою циклу while
// // вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while
// // вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let strLorem25elements4 = [];
// strLorem25elements4 = document.getElementById('loremString').textContent.split(' ');
// let i = 0;
// while (i < 20) {
//     let hAttrib = document.createElement('h1');
//     hAttrib.textContent = `#${i}: ${strLorem25elements4[24 - i]}`;
//     document.body.appendChild(hAttrib);
//     document.write('<br>');
//     i++;
// }
//
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNumbers = [1, 23.4, 66, 34, 2, 3, 7, 90, 0.3256, 10]
// for (const nNumber of arrayNumbers) {
//     console.log(nNumber);
// }
//
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayStrings = ['John', 'Starr', 'Jassie', 'Paul', 'Jimi', 'Marshall', 'Gin', 'Ace', 'Gretta', 'Flit']
// for (const sString of arrayStrings) {
//     console.log(sString);
// }
//
//
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', 'Gretta', NaN]
// for (const cElement of arrayN1) {
//     if (typeof (cElement) === "boolean")
//         console.log(cElement);
// }
//
//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', undefined, NaN];
// for (const cElement of arrayN1) {
//     if (typeof (cElement) === "number")
//         console.log(cElement);
// }
//
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', undefined, NaN];
// for (const cElement of arrayN1) {
//     if (typeof (cElement) === "string")
//         console.log(cElement);
// }
//
//
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arrayChild = [];
// let arrayFather = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', undefined, NaN]
//
// for (let i = 0; i < arrayFather.length; i++) {
//     arrayChild[i] = arrayFather[arrayFather.length - i - 1];
// }
// for (const cElement of arrayChild) {
//     console.log(cElement);
// }
//
//
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`поточний номер кроку № ${i + 1} `)
//     document.write(`поточний номер кроку № ${i + 1} `)
//     document.write("<br>")
// }
//
//
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`поточний номер кроку № ${i} `)
//     document.write(`поточний номер кроку № ${i} `)
//     document.write("<br>")
// }
//
//
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i = i + 2) {
//     console.log(`поточний номер кроку № ${i} `)
//     document.write(`поточний номер кроку № ${i} `)
//     document.write("<br>")
// }
//
//
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`парний номер кроку № ${i} `)
//         document.write(`парний номер кроку № ${i} `)
//         document.write("<br>")
//     }
// }
//
//
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`парний номер кроку № ${i} `)
//         document.write(`парний номер кроку № ${i} `)
//         document.write("<br>")
//     }
// }
//
//
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let minutes = 0;
// let seconds = 0;
// for (minutes; minutes < 60; minutes++) {
//     for (seconds; seconds < 60; seconds++) {
//         console.log(`${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
//         if (minutes === 2) {
//             break;
//         }
//     }
//
//     if (minutes === 2 && seconds === 0) {
//         break;
//     }
//     seconds = 0;
// }
//
//
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// let hour = 0;
// let minutes = 0;
// let seconds = 0;
//
// for (hour; hour < 24; hour++) {
//     for (minutes; minutes < 60; minutes++) {
//         if (hour === 2 && minutes === 20 && seconds === 0) {
//             // console.log(`minutes brake ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
//             break;
//         }
//
//         for (seconds; seconds < 60; seconds++) {
//             //      console.log(`${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
//         }
//         seconds = 0;
//     }
//     if (hour === 2 && minutes === 20 && seconds === 0) {
//         // console.log(`hour brake ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
//         break;
//     }
//     minutes = 0;
// }
// console.log(` ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
//
//
// // - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array = ['a', 'b', 'c'];
//
// for (let i = 0; i < 3; i++) {
//     array.push(i + 1);
// }
// console.log(array);
//
//
// // - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let array1 = [1, 2, 3];
// let array2 = [];
//
// for (let i = 0; i < array1.length; i++) {
//
//     array2.push(array1[array1.length - i - 1]);
// }
// console.log(array2);
//
//
// // - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let array1 = [1, 2, 3];
// let lastElement = array1[array1.length - 1];
// let arrayLength = array1.length;
//
// for (let i = 0; i < arrayLength; i++) {
//
//     array1.push(lastElement + i + 1);
// }
// console.log(array1);
//
//
// // - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let array1 = [1, 2, 3];
// let lastElement = array1[array1.length - 1];
// let arrayLength = array1.length;
//
// for (let i = 0; i < arrayLength; i++) {
//
//     array1.unshift(lastElement - i + arrayLength);
// }
// console.log(array1);
//
//
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array1 = ['js', 'css', 'jq'];
//
// let firstElement = array1.shift();
// console.log(firstElement);
//
//
// // - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array1 = ['js', 'css', 'jq'];
//
// let lastElement = array1.pop();
// console.log(lastElement);
//
//
// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let array1 = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < 3; i++) {
//
//     array1.shift();
// }
// console.log(array1);
//
//
// // - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let array1 = [1, 2, 3, 4, 5];
//
// for (let i = 0; i < 3; i++) {
//
//     array1.pop();
// }
// console.log(array1);
//
//
// // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// //     Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// let array1 = [1, 2, 3, 4, 5];
// let array2 = ['a', 'b', 'c'];
// let positionToInsert = 3;
// let array1Length = array1.length;
//
// for (let i = 0; i < array2.length; i++) {
//     if (positionToInsert + i < array1Length) {
//         array1[positionToInsert + array2.length + i] = array1[positionToInsert + i];
//     }
//     array1[positionToInsert + i] = array2[i];
// }
// console.log(array1);
//
//
// // - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// //     Підказка. Працюйте по принципу задачі вище.
// let array1 = [1, 2, 3, 4, 5];
// let arrayPart1 = [];
// let arrayPart2 = [];
// arrayPart2.push(array1.pop());
// for (let i = 0; i < 3; i++) {
//     arrayPart1.unshift(array1.pop());
// }
// // console.log(arrayPart1);
// // console.log(arrayPart2);
// array1.push('a');
// array1.push('b');
// for (const arrayItem of arrayPart1) {
//     array1.push(arrayItem);
// }
// array1.push('c');
// for (const arrayItem of arrayPart2) {
//     array1.push(arrayItem);
// }
// array1.push('e');
// console.log(array1);
//
//
// // - Взяти масив з 10 чисел або створити його.
// // Вивести в консоль тільки ті елементи, значення яких є парними.
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrayEvenPart = [];
// for (const arrayItem of array1) {
//     if (arrayItem % 2 === 0) {
//         arrayEvenPart.push(arrayItem);
//     }
// }
// console.log(arrayEvenPart);
//
//
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// // За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [];
// for (const arrayItem of array1) {
//     array2.push(arrayItem);
// }
// console.log(array2);
//
//
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// // За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let array2 = [];
// for (const arrayItem of array1) {
//     array2.push(arrayItem);
// }
// console.log(array2);


// // ============

// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// // 1. перебрати його циклом while
// let n = 0
// while (n < array1.length) {
//     console.log(array1[n]);
//     n++;
// }
//
//
// // 2. перебрати його циклом for
// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// }
//
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let n = 0
// while (n < array1.length) {
//     if (array1[n] % 2 !== 0) {
//         console.log(array1[n]);
//     }
//     n++;
// }
//
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 !== 0) {
//         console.log(array1[i]);
//     }
// }
//
//
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let n = 0
// while (n < array1.length) {
//     if (array1[n] % 2 === 0) {
//         console.log(array1[n]);
//     }
//     n++;
// }
//
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 2 === 0) {
//         console.log(array1[i]);
//     }
// }
//
//
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] % 3 === 0) {
//         array1[i] = 'okten';
//     }
// }
// console.log(array1);
//
//
// // 8. вивести масив в зворотньому порядку.
// let array2 = [];
// for (let i = 0; i < array1.length; i++) {
//
//     array2[i] = array1[array1.length - 1 - i];
//
// }
// console.log(array2);
//
//
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// // 1. перебрати його циклом while
// let n = array1.length - 1
// while (n > -1) {
//     console.log(array1[n]);
//     n--;
// }
// // 2. перебрати його циклом for
// for (let i = array1.length - 1; i > -1; i--) {
//     console.log(array1[i]);
// }
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let n = array1.length;
// while (n > -1) {
//     if (array1[n] % 2 !== 0) {
//         console.log(array1[n]);
//     }
//     n--;
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 2 !== 0) {
//         console.log(array1[i]);
//     }
// }
// // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let n = array1.length - 1
// while (n > -1) {
//     if (array1[n] % 2 === 0) {
//         console.log(array1[n]);
//     }
//     n--;
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 2 === 0) {
//         console.log(array1[i]);
//     }
// }
// // 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = array1.length - 1; i > -1; i--) {
//     if (array1[i] % 3 === 0) {
//         array1[i] = 'okten';
//     }
// }
// console.log(array1);


// // 10
// //  створити пустий масив та :
let arrayEmpty = [];
// // - заповнити його 50 парними числами за допомоги циклу.
// for (let i = 1; i < 102; i++) {
//     if (i % 2 === 0) {
//         arrayEmpty.push(i);
//     }
// }
// console.log(arrayEmpty);
//
//
// // - заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         arrayEmpty.push(i);
//     }
// }
// console.log(arrayEmpty);
//
//
// // 1. Створити пустий масив та :
// //        a. заповнити його 50 парними числами за допомоги циклу.
// //        b. заповнити його 50 непарними числами за допомоги циклу.
//
//
// //        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let min = Math.ceil(-10000);
// let max = Math.floor(10000);
//
// for (let i = 0; i < 20; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * (max - min) + min));
// }
// console.log(arrayEmpty);
//
//
// //        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let min = Math.ceil(8);
// let max = Math.floor(732);
//
// for (let i = 0; i < 20; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * (max - min) + min));
// }
// console.log(arrayEmpty);
//
//
// //  2. Вивести за допомогою console.log кожен третій елемен
// for (let i = 0; i < array1.length; i++) {
//     if ((i + 1) % 3 === 0) {
//         console.log(array1[i]);
//     }
// }
//
// // або
// for (let i = -1; i < array1.length; i = i + 3) {
//     if (i !== -1) {
//         console.log(array1[i]);
//     }
// }
//
//
// //  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 0; i < array1.length; i++) {
//     if ((i + 1) % 3 === 0 && array1[i] % 2 === 0) {
//         console.log(array1[i]);
//     }
// }
// // або
// for (let i = -1; i < array1.length; i = i + 3) {
//     if (i !== -1 && array1[i] % 2 === 0) {
//         console.log(array1[i]);
//     }
// }
//
//
// //  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// for (let i = 0; i < array1.length; i++) {
//     if ((i + 1) % 3 === 0 && array1[i] % 2 === 0) {
//         console.log(array1[i]);
//         arrayEmpty.push(array1[i]);
//     }
// }
// // або
// for (let i = -1; i < array1.length; i = i + 3) {
//     if (i !== -1 && array1[i] % 2 === 0) {
//         console.log(array1[i]);
//         arrayEmpty.push(array1[i]);
//     }
// }
//
//
// //  5. Вивести кожен елемент масиву, сусід справа якого є парним
// //   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arrayForNeiboure = [1, 2, 3, 5, 7, 9, 56, 8, 67]
// for (let i = 0; i < arrayForNeiboure.length; i++) {
//     if (i + 1 !== arrayForNeiboure.length && arrayForNeiboure[i + 1] % 2 === 0) {
//         console.log(arrayForNeiboure[i]);
//     }
// }


//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arraySumBuyings = [100,250,50,168,120,345,188]
// let averageSum = 0;
// for (let i = 0; i < arraySumBuyings.length; i++) {
//     averageSum = averageSum + arraySumBuyings[i]
// }
// averageSum = averageSum/arraySumBuyings.length;
// console.log(averageSum);


//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let min = Math.ceil(1);
// let max = Math.floor(100);
// let arrayDestination = [];
// for (let i = 0; i < 20; i++) {
//     arrayEmpty.push(Math.floor(Math.random() * (max - min) + min));
// }
// for (arrayItem of arrayEmpty) {
//     arrayDestination.push(arrayItem * 5);
// }
// console.log(arrayDestination);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arrayAny = ['24', 'js', 1, true, 34, 'css', NaN, 'jq', undefined, -234, '01.01.2021']
// let arrayDestination = [];
// for(arrayItem of arrayAny){
//     if(typeof (arrayItem) === 'number'){
//         arrayDestination.push(arrayItem);
//     }
// }
// console.log(arrayDestination);



// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.