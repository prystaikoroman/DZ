// // --створити масив з:
// - з 5 числових значень
// варіант #1
// let array5 = [4, 6, 5.4, 5.34, NaN];
// console.log('варіант #1', array5);

// //варіант #2
// let array5digits = [];
// for(let i = 0; i <= 4; i++)
// {
//     array5digits.push(Number.parseFloat(prompt('Ведіть число '+(i+1)+':')) ) 
// }
// console.log('варіант #2', array5digits);


// // - з 5 стічкових значень
// // #1
// let arr5str = ['Fender', 'Gibson', 'Ibanes', 'ESP', 'Gretsch'];
// console.log(arr5str);

// // #2
// let array5strings = [];
// for(let i = 0; i <= 4; i++)
// {
//     array5strings.push(prompt('Ведіть слово '+(i+1)+':') ) 
// }
// console.log(array5strings);


// // - з 5 значень стрічкового, числового та булевого типу
// let array5mix = ['Andriy', 35, 4.245, true, false];
// console.log(array5mix);
// // - та вивести його в консоль


// // -- Створити пустий масив.
// // Наповнити його будь-якими значеннями
// // звертаючись до конкретного індексу. Вивести в консоль
// let strLorem25elements =[];
// strLorem25elements = document.getElementById('loremString').textContent.split(' ');
// console.log('Lorem на 16 позиції містить слово :', strLorem25elements[15]);
//
//
// // - За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write()
// // вивести 10 блоків div c довільним текстом і індексом всередині
// let strLorem25elements2 =[];
// strLorem25elements2 = document.getElementById('loremString').textContent.split(' ');
//
// for(let i =1; i<=10; i++)
// {
//    document.write('<div style = "background-color: rgb(179, 200, 212);"> #'+ i +': ' + strLorem25elements2[i]+' </div>') ;
//    document.write('<br>');
// }


// - За допомогою циклу while
// вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while 
// вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

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


// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', 'Gretta', NaN]
// for (const cElement of arrayN1) {
//     if (typeof (cElement) === "boolean")
//         console.log(cElement);
// }

//
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', undefined, NaN];
// for (const cElement of arrayN1) {
//     if (typeof (cElement) ==="number")
//         console.log(cElement);
// }


// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrayN1 = ['John', true, 'Jassie', 23, 1, 'Marshall', false, 'Ace', undefined, NaN];
// for (const cElement of arrayN1) {
//     if (typeof (cElement) ==="string")
//         console.log(cElement);
// }


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


// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<10; i++){
//     console.log(`поточний номер кроку № ${i+1} `)
//     document.write(`поточний номер кроку № ${i+1} `)
//     document.write("<br>")
// }


// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<100; i++){
//     console.log(`поточний номер кроку № ${i} `)
//     document.write(`поточний номер кроку № ${i} `)
//     document.write("<br>")
// }


// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for(let i = 0; i<100; i = i + 2){
//     console.log(`поточний номер кроку № ${i} `)
//     document.write(`поточний номер кроку № ${i} `)
//     document.write("<br>")
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(`парний номер кроку № ${i} `)
//         document.write(`парний номер кроку № ${i} `)
//         document.write("<br>")
//     }
// }


// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(`парний номер кроку № ${i} `)
//         document.write(`парний номер кроку № ${i} `)
//         document.write("<br>")
//     }
// }


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


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
let hour = 0;
let minutes = 0;
let seconds = 0;

for (hour; hour < 24; hour++) {
    for (minutes; minutes < 60; minutes++) {
        if (hour === 2 && minutes === 20 && seconds === 0) {
             break;
        }

        for (seconds; seconds < 60; seconds++) {
        //      console.log(`${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
        }
        seconds = 0;
    }
    if (hour === 2 && minutes === 20 && seconds === 0) {
         break;
    }
    minutes = 0;
}
console.log(` ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`)
