// //
// // - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
// //
// // 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // a) отримує текст з параграфа з id "content"
// let elementContent  = document.getElementById('content');
// let elementString = elementContent.textContent;
//     console.log(elementString);


// // b) отримує текст з блоку з id "rules"
// let elementRules  = document.getElementsByClassName('fc');
// let elementString = elementRules[0].textContent;
// console.log(elementString);


// // c) замініть текст параграфа з id 'content' на будь-який інший
// let elementContent  = document.getElementById('content');
// elementContent.textContent = 'Правила Бійцівського Клубу';


// // d) замініть текст параграфа з id 'rules' на будь-який інший
// let elementRules = document.getElementsByTagName('div');
// elementRules[0].textContent = 'Тут були правила бійцівського клубу, а могла бути ваша реклама';
// console.log(elementRules);


// // e) змініть кожному елементу колір фону на червоний
// let elementContent = document.getElementById ('content');
// elementContent.style.backgroundColor ='red';
//
// let elementRules = document.getElementById ('rules');
// elementRules.style.backgroundColor ='red';
//
// let elementLi = document.getElementsByTagName ('li');
// for(let i = 0; i<elementLi.length; i++){
//     elementLi[i].style.backgroundColor ='red';
// }


// // f) змініть кожному елементу колір тексту на синій
// let elementContent = document.getElementById('content');
// elementContent.style.color = 'blue';
//
// let elementRules = document.getElementById('rules');
// elementRules.style.color = 'blue';
//
// let elementLi = document.getElementsByTagName('li');
// for (let i = 0; i < elementLi.length; i++) {
//     elementLi[i].style.color = 'blue';
// }


// // g) отримати весь список класів елемента з id=rules і вивести їх в console.log
// let rulesClases = document.getElementById('rules').classList;
// for (let i = 0; i < rulesClases.length; i++) {
//     console.log(rulesClases[i]);
// }


// // h) отримати всі елементи з класом fc_rules
// // i) поміняти колір тексту у всіх елементів fc_rules на червоний
// let elementsRules = document.getElementsByClassName('fc_rules')
// for (let i = 0; i < elementsRules.length; i++) {
//     let rule = elementsRules[i];
//     rule.style.color='red';
// }



// //
// //
// // 2) За допомоги циклу проітерувати  масив users,
// // записати кожного юзера в сівй блок за допомоги
// // document.createElement.
// //     Вставити цей блок на сторінку
// // 3) За допомоги циклу проітерувати  масив users,
// // записати кожного юзера в сівй блок за допомоги
// // document.createElement.
// //     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
// //
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
// let userLength = users.length;
// for(let i = 0; i<userLength; i++){
//     let userDivElement = document.createElement('div');
//     userDivElement.innerHTML = `My name is ${users[i]['name']} <br>
//     I am ${users[i]['age']} old, and I am ${users[i]['status']?'married':'single'}`;
//     document.body.appendChild(userDivElement);
//
//     let element_Ul = document.createElement('ul');
//     element_Ul.classList.add(`userElement${i}`);
//     document.body.appendChild(element_Ul);
//
//     let addressElement = users[i]['address'];
//     let addressLength = Object.keys(addressElement).length ;
//      // console.log(addressLength);
//     // console.log(addressElement);
//     for (let j= 0; j<addressLength; j++){
//         let UlForInsert_Elements = document.getElementsByClassName(`userElement${i}`);
//         let userLiElement = document.createElement('li');
//         userLiElement.innerHTML = `My ${Object.keys(addressElement)[j]} : ${addressElement[Object.keys(addressElement)[j]]}`;
//         console.log(userLiElement);
//         UlForInsert_Elements[0].appendChild(userLiElement);
//
//     }
// }



