// //
// // ______________________________________________________________________________________________________________________________________________________
// // РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________
// //
// // Взяти файл template_2.html та працювати в ньому
//
// // 1) Напишіть код, який :
//
// // a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// //-------------------------------------------------------------
// let ulElement = document.getElementById('main_header');
// ulElement.style.color = '#022021';
//
//
// // b) робить шириниу елементу ul 400px
// //-------------------------------------------------------------
// let ulElement = document.getElementsByTagName('ul');
// ulElement[0].style.width = '400px';
//
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// //-------------------------------------------------------------
// let listElements = document.getElementsByClassName('linkList');
// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].style.width = '50%';
// }
//
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// //-------------------------------------------------------------
// let listElements = document.getElementsByClassName('listElement2');
// for (let i = 0; i < listElements.length; i++) {
//     console.log(listElements[i].textContent);
// }
//
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// //-------------------------------------------------------------
// let listElements = document.getElementsByTagName('li');
// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].style.backgroundColor = 'grey';
// }
//
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByTagName('a');
// for (let i = 0; i < arrayElements.length; i++) {
//     arrayElements[i].classList.add('anchor');
// }
//
//
// // g) отримує всі елементи 'a' та у випадку,
// // якщо текстовий контен елементу дорівнює link3,
// // змінює йому розмір тексту на 40 пікселів
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByTagName('a');
// for (let i = 0; i < arrayElements.length; i++) {
//     if (arrayElements[i].textContent === 'link3') {
//         arrayElements[i].style.fontSize = '40px';
//     }
// }
//
//
// // h) отримує всі елементи 'a' та додає їм клас element_XXX.
// // Де XXX - текстовий контент елементу a
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByTagName('a');
// for (let i = 0; i < arrayElements.length; i++) {
//     arrayElements[i].classList.add(`element_${arrayElements[i].textContent.replaceAll(' ', '')}`);
// }
//
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону.
// // Фон отримати з prompt()
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByClassName('sub-header');
// let colorPrompt = prompt('вкажіть колір:')
// for (let i = 0; i < arrayElements.length; i++) {
//     let element = arrayElements[i];
//     element.style.backgroundColor = colorPrompt;
// }
//
//
// // j) отримує всі елементи 'sub-header' та змінює колір тексту
// // у видаку якщо текст елемнту = content 2 segment .
// // Колір отримати з prompt()
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByClassName('sub-header');
// let colorPrompt = prompt('вкажіть колір:');
// for (let i = 0; i < arrayElements.length; i++) {
//     if (arrayElements[i].textContent === 'content 2 segment') {
//         let elementN = arrayElements[i];
//         elementN.style.color = colorPrompt;
//     }
// }
//
//
// // k) отримує елемент з класом content_1
// // та заміняє  в ньому тест на довільний.
// // Текст отримати з prompt()
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByClassName('content_1');
// let Prompt = prompt('введіть текст:');
// for (let i = 0; i < arrayElements.length; i++) {
//     let elementN = arrayElements[i];
//     elementN.textContent = Prompt;
// }
//
//
// // l) отримати елементи p та змінити їм padding на 20px
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByTagName('p');
//
// for (let i = 0; i < arrayElements.length; i++) {
//     let elementN = arrayElements[i];
//     elementN.style.padding = '20px';
// }
//
//
// // m) отримати елементи з класом text2
// // та змінити їм текст на назву групи (mon-year)
// //-------------------------------------------------------------
// let arrayElements = document.getElementsByClassName('text2');
//
// for (let i = 0; i < arrayElements.length; i++) {
//     let elementN = arrayElements[i];
//     elementN.textContent = 'feb 2021';
// }
//
//
// // 2) Є масив котрий характеризує правила.
// //     Створити скрипт який ітерує цей масив,
// //     та робить кожне правило в окремому блоці.
// //     При цому в блоці, номер правила записати в свій блок,
// //     текст правила записати в свій окремий блок.
// //     Результатом відпрацювання скріпта повинна бути
// //     така ж структура яка міститься в файлі rules.html
// // -------------------------------------------------------------
// let bodyNodes = document.body;
//
// let bodyChildElementsCount = bodyNodes.childElementCount;
// console.log(bodyChildElementsCount);
// for (let i = 0; i < bodyChildElementsCount; i++) {
//     bodyNodes.firstElementChild.remove();
// }
//
// let newElement = document.createElement('div');
// newElement.id = 'content';
// document.body.appendChild(newElement);
//
// newElement = document.createElement('h1');
// newElement.textContent = 'Правила бійцівського клубу';
// document.body.appendChild(newElement);
//
// newElement = document.createElement('div');
// newElement.id = 'wrap';
// document.body.appendChild(newElement);
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// let classLength = rules.length;
// for (let i = 0; i < classLength; i++) {
//     let mainDivForRule = document.createElement('div');
//     mainDivForRule.classList = `rules rule${i}`;
//
//     newElement = document.createElement('h2');
//     newElement.textContent = rules[i]['title'];
//     mainDivForRule.appendChild(newElement);
//
//     newElement = document.createElement('p');
//     newElement.textContent = rules[i]['body'];
//     mainDivForRule.appendChild(newElement);
//
//     document.getElementById('wrap').appendChild(mainDivForRule);
// }
//
//
// //
// // ===========================================================================
// //
// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
// // -------------------------------------------------------------
//
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let newcombinedArray = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (usersWithId[i]['id'] === citiesWithId[j]['user_id']) {
//             // console.log(usersWithId[i]['id']);
//
//             newcombinedArray[i] = usersWithId[i];
//             newcombinedArray[i]['address'] = citiesWithId[j];
//         }
//     }
// }
// console.log(newcombinedArray);
//
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// // Example:
// //     let usersWithCities = [
// //         {
// //             id: 1, // <===
// //             name: 'vasya',
// //             age: 31,
// //             status: false,
// //             address: {
// //                 user_id: 1, // <===
// //                 country: 'Ukraine',
// //                 city: 'Ternopil'
// //             }
// //         },
// //         // TO BE CONTINUED .....
// //     ]
