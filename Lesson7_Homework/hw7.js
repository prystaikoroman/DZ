// // - Створити довільний елемент с id = text.
// // використовуючи JavaScript,
// // зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// document.getElementById("btnHide").onclick = (ev =>{
//    const textEl = document.getElementById("text");
//     textEl.hidden? textEl.hidden = false: textEl.hidden = true;
// });
//
// //     - Створіть кнопку, при кліку на яку,
// //     вона буде приховувати сама себе.
// let selfHideBtn = document.getElementById("btnHideSelf");
//   selfHideBtn.onclick = (ev =>{
//       selfHideBtn.hidden = true;
// });
//
// // - Створити інпут який приймає вік людини
// // та кнопку яка підтверджує дію.
// //     При натисканні на кнопку
// //     зчитати інформацію з інпуту
// //     та перевірити вік чи менше він ніж 18,
// //     та повідомити про це користувача
// let btnMess = document.getElementById("okBtn").onclick =
//     ev => {
//     ev.preventDefault();
//     let age = document.forms.myForm1.someText.value;
//         age<18? confirm("Your age less then 18"): 0;
// }
//
// // - Створіть меню, яке розгортається/згортається при клику
// document.onclick = ev => {
//     const menu1 = document.getElementById('menuEl');
//     menu1.hidden? menu1.hidden =false: menu1.hidden = true;
// }
//
// // - Створіть список коментарів , приклад об'єкту коментаря -
// // {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// const coments = [
//     {title: 'lorem', body: "lorem ipsum dolo sit ameti"},
//     {title: 'lorem2', body: "lorem2 ipsum dolo sit ameti"},
//     {title: 'lorem3', body: "lorem3 ipsum dolo sit ameti"},
//     {title: 'lorem4', body: "lorem4 ipsum dolo sit ameti"},
//     {title: 'lorem5', body: "lorem5 ipsum dolo sit ameti"},
//     {title: 'lorem6', body: "lorem6 ipsum dolo sit ameti"},
//     {title: 'lorem7', body: "lorem7 ipsum dolo sit ameti"},
// ];
// // Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
// coments.forEach((value) =>{
//     const divEl = document.createElement('div');
//     const h = document.createElement('h3');
//     const p = document.createElement('p');
//     const bthHide = document.createElement('button');
//     bthHide.onclick = (ev) => {p.hidden?p.hidden = false:p.hidden = true};
//     h.innerHTML = value.title;
//     p.innerHTML = value.body;
//     bthHide.textContent = 'hide';
//     divEl.appendChild(h);
//     divEl.appendChild(p);
//     divEl.appendChild(bthHide);
//     document.body.appendChild(divEl);
// })
//
// // - Створити 2 форми  по 2 інпути в кожній.
// // створити кнопку при кліку на яку зчитується
// // та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм
// //     (Щоб уникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API.
// // Отже дайте формі та інпутам всі необхідні атрибути.
// document.getElementById("btnGetText").onclick = (ev) =>{
//     for (let form of document.forms) {
//         for (let formElement of form) {
//             console.log(formElement.value);
//         }
//     }
// }
//
//
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
// function TableCreator (rows, column, el ='p'){
//     const table = document.createElement('table');
//     for (let i = 0; i< rows; i++) {
//         const row = table.insertRow(i);
//         for (let j = 0; j<column; j++ ) {
//             const column = row.insertCell(j);
//             const givenElem = document.createElement(el);
//             givenElem.innerHTML = `  ${i+1}${j+1}  `;
//             column.appendChild(givenElem);
//         }
//     }
//     document.body.appendChild(table);
// }
// TableCreator(10, 5,'div')

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
let curPicPos = 1;
console.log(document.dir);
document.getElementById("back").onclick = (ev) => {
    if (curPicPos > 1) {
        curPicPos--;
        const picBox = document.getElementById("pictureBox");
        picBox.setAttribute("src", `img/${curPicPos < 10 ? '0' + curPicPos : curPicPos}.jpg`);
    }
}
document.getElementById("forward").onclick = (ev) => {
    if (curPicPos < 14) {
        curPicPos++;
        const picBox = document.getElementById("pictureBox");
        picBox.setAttribute("src", `img/${curPicPos < 10 ? '0' + curPicPos : curPicPos}.jpg`);
    }
}

//
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
let arrForbidenWords = ['abc', 'cola', 'cbs', 'nbc', 'fox'];
// //     Сворити інпут текстового типу.
let input2 = document.getElementById('someText2');
// //     Якщо людина вводить слово і воно міститься
// //     в масиві нецензурних слів кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// input2.oninput = (ev) => {
//    let enteredWords = input2.value.split(' ');
//     for (let i = 0; i< enteredWords.length; i++) {
//             arrForbidenWords.forEach((value) =>{
//              value===enteredWords[i]?alert(`you entered forbiden word: ${value}`):0;
//         })
//     }
// };

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення
//     в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const btnOk = document.getElementById('okBtn');
btnOk.onclick = (ev) => {
    let enteredWords = input2.value.split(' ');
    for (let i = 0; i < enteredWords.length; i++) {
        arrForbidenWords.forEach((value) => {
            value === enteredWords[i] ? alert(`you entered forbiden word: ${value}`) : 0;
        })
    }
};


// -- Взяти масив юзерів
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// console.log(userFiltered);
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву.
// Фільтри можуть працювати як разом так і окремо.
const myForm2 = document.forms.form2;
const table = document.createElement('table');

document.getElementById("townKyiv").onclick = (ev) => {
    filterUsers(myForm2);
};
document.getElementById("married").onclick = (ev) => {
    filterUsers(myForm2);
};
document.getElementById("age").onclick = (ev) => {
    filterUsers(myForm2);
};
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
function filterUsers(myForm2) {
    let [...userFiltered] = usersWithAddress;
    if (myForm2.townKyiv.checked) {
        userFiltered = userFiltered.reduce((acc, value) =>
                value.address.city === "Kyiv" ? [...acc, value] : acc
            , []);
    } if (myForm2.married.checked) {
        userFiltered = userFiltered.reduce((acc, value) =>
                !value.isMarried ? [...acc, value] : acc
            , []);

    } if (myForm2.age.checked) {
        userFiltered = userFiltered.reduce((acc, value) =>
                value.age >29 ? [...acc, value] : acc
            , []);
    }
     // console.log(userFiltered.flat());
    TableCreator(userFiltered.length, Object.keys( usersWithAddress[0]).length,'div', userFiltered);
}

// Дані виводить в документ

function TableCreator(rows, column, el = 'p', arr = []) {
    let rowCount = table.rows.length;
    for (let x=rowCount-1; x>0; x--) {
        table.deleteRow(x);
    }
    console.log(rows, Object.keys( usersWithAddress[0]).length)
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < column; j++) {
              const column = row.insertCell(j);
            const givenElem = document.createElement(el);
            givenElem.innerHTML = ` ${(Object.keys(arr[i]))[j]} 
                                    : ${typeof (Object.values(arr[i])[j]) === 'object' ? Object.values(arr[i])[j].city: (Object.values(arr[i]))[j]}  `;
            column.appendChild(givenElem);
        }
    }
    document.body.appendChild(table);
}

