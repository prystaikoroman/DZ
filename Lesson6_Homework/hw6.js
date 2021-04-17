// // 1) Створити масив з 20 чисел та:
// let arrayNum = [54,3,0,-12,3,123,-542,56,1];
// //  a) відсортувати його від меншого до більшого.
// console.log(arrayNum.sort((a,b)=>{
//     return a-b}));
// //  b) відсортувати його від більшого до меншого.
// console.log(arrayNum.sort((a,b)=>{
//     return b-a}));
//  c) Відфілтрувати числа які є кратними 3.
// console.log(arrayNum.filter((value,index,ar)=>{
// //console.log(value, !(value % 3));
// return !(value % 3);
// }));
// //  d) Відфілтрувати числа які є більшими за 10.
// console.log(arrayNum.filter((value,index,ar)=>{
// return value > 10;
// }));
// //  e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// arrayNum.forEach(value => document.write(value, " "));
// //  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let arrN2 = arrayNum.map(value =>value*3);
// console.log(arrN2);
// //  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let arrN3 = arrayNum.reduce((a,b,arr)=> a+b);
// console.log(arrN3);
// // 2) Створити масив з 20 стрічок та:
// let arrayStr = ['Dima','Sergio', 'Tania', 'Igor','Andrew', 'Stepan',
//     'Viktor', 'Roman', 'Vitaliy', 'Bogdan']
// //  a) Відсортувати його в алфавітному порядку
//  let arr1 = arrayStr.sort();
// console.log(arr1);
// //  b) Відсортувати в зворотньому порядку
// let arr2 = arrayStr.sort((a,b)=> {
//     if(a<b) {
//         return 1;
//     }
//         return -1; 
//      });
//      console.log(arr2);
//  c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let arr3 = arrayStr.filter(value=>value.length > 4);
// console.log(arr3);
// //  d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let arr4 = arrayStr.map(value=>`Sam says ${value}`);
// console.log(arr4);
// // 3) Все робити тільки за допомогою методів масивів!
// // Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];
// // a) відсортувати його за  віком (зростання , 
// let users1 = JSON.parse(JSON.stringify(users));
// users1.sort((a,b)=>{
//     if(a.age > b.age){
//         return 1 ;
//     }
//     return -1;
// });
// console.log(users1);

// // а потім окремо спадання)
// let users2 = JSON.parse(JSON.stringify(users));
// users2.sort((a,b)=>{
//     if(a.age < b.age){
//         return 1 ;
//     }
//     return -1;
// });
// console.log(users2);


// // b) відсортувати його за кількістю знаків в імені  (зростання , 
// let users3 = JSON.parse( JSON.stringify(users));
// users3.sort((a,b)=>{
//     if(a.name.length > b.name.length){
//         return 1;
//     } 
//     return -1;
// });
// console.log(users3);

// // а потім окремо спадання)
// let users4 = JSON.parse( JSON.stringify(users));
// users4.sort((a,b)=>{
//     if(a.name.length < b.name.length){
//         return 1;
//     } 
//     return -1;
// });
// console.log(users4);

// // c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує 
// //    унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// //    та зберегти це в новий масив (первинний масив залишиться без змін)
// let users5 = JSON.parse( JSON.stringify(users));
// users5.map((value, index) => value.id =index+1);
// console.log(users5);
// console.log(users);

// // або
// const users5_1 = users.map((a,i) => ({...a, id : i+1 }));
// console.log(users5_1);
// console.log(users);

// // d) відсортувати його за індентифікатором
// users5.sort((a,b)=>{return a.id - b.id});
// console.log(users5);

// // e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)
// let users6 = users.reduce((acc, user) => 
// user.isMarried ? [...acc, {...user, appart : true}]: acc,[]);
// console.log(users6);
// console.log(users);

// // ______________________________________________________________________________________________________________________________________________________
// //                                                                 РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________


// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// // Відфільтрувати масив за наступними крітеріями :
// // - двигун більше 3х літрів
// let cars1 = cars.filter(({...value}) => value.volume>3);
// console.log(cars1); 

// // - двигун = 2л
// let cars2 = cars.filter(({...value})=> value.volume === 2);
// console.log(cars2);

// // - виробник мерс
// let cars3 = cars.filter(({...value})=> value.producer ==='mercedes');
// console.log(cars3);

// // - двигун більше 3х літрів + виробник мерседес
// let cars4 = cars.filter(({...value})=>value.volume>3 && value.producer ==='mercedes')
// console.log(cars4);

// // - двигун більше 3х літрів + виробник субару
// let cars5 = cars.filter(({...value})=>value.volume>3 && value.producer ==='subaru')
// console.log(cars5);

// // - сили більше ніж 300
// let cars6 = cars.filter(({...value})=>value.power>300)
// console.log(cars6);

// // - сили більше ніж 300 + виробник субару
// let cars7 = cars.filter(({...value})=>value.power>300 && value.producer ==='subaru')
// console.log(cars7);

// // - мотор серіі ej
// let cars8 = cars.filter(({...value})=>value.engine.startsWith('ej') )
// console.log(cars8);

// // - сили більше ніж 300 + виробник субару + мотор серіі ej
// let cars9 = cars.filter(({...value})=>value.power>300 && value.engine.startsWith('ej') )
// console.log(cars9);

// // - двигун меньше 3х літрів + виробник мерседес
// let cars10 = cars.filter(({...value})=>value.volume<3 && value.producer ==='mercedes' )
// console.log(cars10);

// // - двигун більше 2л + сили більше 250
// let cars11 = cars.filter(({...value})=>value.volume>3 && value.power>250)
// console.log(cars11);

// // - сили більше 250  + виробник бмв
// let cars12 = cars.filter(({...value})=>value.power>250 && value.producer ==='bmw')
// console.log(cars12);


// - взять слдующий массив
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

// // -- Відсортувати їх по ID
// let usersWithAddress1 = usersWithAddress.sort((a,b)=>a.id - b.id)
// console.log(usersWithAddress1);

// // -- Відсортувати їх по ID в зворотньому порядку
// let usersWithAddress2 = usersWithAddress.sort((a,b)=>b.id - a.id)
// console.log(usersWithAddress2);

// // -- Відсортувати по віку
// let usersWithAddress3 = usersWithAddress.sort((a,b)=>a.age - b.age)
// console.log(usersWithAddress3);

// // -- Відсортувати по віку в зворотньому порядку
// let usersWithAddress4 = usersWithAddress.sort((a,b)=>b.age - a.age)
// console.log(usersWithAddress4);

// // -- Відсорутвати по імені
// let usersWithAddress5 = usersWithAddress.sort((a,b)=>a.name>b.name?1:-1);
// console.log(usersWithAddress5);

// // -- Відсорутвати по назві вулиці 
// let usersWithAddress6 = usersWithAddress.sort((a,b)=>a.address.street>b.address.street?1:-1);
// console.log(usersWithAddress6);

// // -- Відсорутвати по номеру будинку
// let usersWithAddress7 = usersWithAddress.sort((a,b)=>a.address.number - b.address.number)
// console.log(usersWithAddress7);

// // -- Залигити тільки тих, хто молодший ніж 30 (filter)
// let usersWithAddress8 = usersWithAddress.filter(({...value}) => value.age<30);
// console.log(usersWithAddress8);

// // -- Залишити тільки одружених
// let usersWithAddress9 = usersWithAddress.filter(({...value}) => value.isMarried);
// console.log(usersWithAddress9);

// // -- Залишити тільки одружених, які молодні за 30
// let usersWithAddress10 = usersWithAddress.filter(({...value}) => value.isMarried && value.age<30);
// console.log(usersWithAddress10);

// // -- Залишити лише тих, в кого парні номери будинків.
// let usersWithAddress11 = usersWithAddress.filter((value, index,arr) =>
//     value.address.number%2 === 0?  value: null);
// console.log(usersWithAddress11);

// // -- Порахувати загальний вік всіх людей. (reduce)
// let summarizAge = usersWithAddress.reduce((acc, user) =>{
// return acc + user.age}, 0);
// console.log(summarizAge);

// // -- Ті, хто одружений і старий за 30
// // має отримати обєкти child і попасти в новий масив (reduce)
// const child = {name:'child', waight:3.3};
// let MarriedWithChildren = usersWithAddress.reduce((acc, value) =>
//    (value.isMarried && value.age>30) ? [...acc, {...value, child}]: acc, [])
// console.log(MarriedWithChildren);

// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
class BaseCar {
    constructor(model, power, price, year) {
        this.model = model;
        this.power = power;
        this.price = price;
        this.year = year;
        this.owner = {};
    }
}

BaseCar.prototype.Owner = function (owner = {}) {
    this.owner = owner;
}

class BaseDriver {
    constructor(name, age, expirience) {
        this.name = name;
        this.age = age;
        this.expirience = expirience;
    }
}

BaseDriver.prototype.ExpirRaiseCourses = function () {
    this.expirience += 1;
};

owner1 = new BaseDriver('Ivan', 28, 4);
owner2 = new BaseDriver('Dima', 30, 13);
owner3 = new BaseDriver('Olga', 28, 2.5);
owner4 = new BaseDriver('Mathew', 27, 3);
owner5 = new BaseDriver('Anna', 33, 10);
owner6 = new BaseDriver('Vasil', 23, 3);
owner7 = new BaseDriver('Ivan', 23, 5);
owner8 = new BaseDriver('Daria', 13, NaN);
owner9 = new BaseDriver('Taras', 47, 20);
owner10 = new BaseDriver('Fara', 60, 35);

// Створити не менше 7 та не більше 20 машинок.
let car1 = new BaseCar("wrx", 250, 21000, 2010);
car1.Owner(owner1);
let car2 = (new BaseCar("legacy", 400, 23000, 2007));
car2.Owner(owner2);
let car3 = new BaseCar("tribeca", 300, 24000, 2011);
car3.Owner(owner3);
let car4 = new BaseCar("leone", 140, 25000, 1998);
car4.Owner(owner4);
let car5 = new BaseCar("impreza", 200, 26000, 2014);
car5.Owner(owner5);
let car6 = new BaseCar("outback", 165, 27000, 2014);
car6.Owner(owner6);
let car7 = new BaseCar("115", 120, 28000, 2013);
car7.Owner(owner7);
let car8 = new BaseCar("315", 120, 29000, 2010);
car8.Owner(owner8);
let car9 = new BaseCar("650", 350, 30000, 2009);
car9.Owner(owner9);
let car10 = new BaseCar("320", 180, 32000, 2012);
car10.Owner(owner10);

// Для початку вкладіть всі наші створені автомобілі в масив cars.
cars = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];
console.log(cars);

// Зробили половину автопарку ремонт мотору, що збільшить потужність
// автомобілів на 10% (переприсвоєння змінної потужності).
cars.forEach((value, index, ...arr) => index % 2 ? value.power *= 1.1 : 0)
console.log(cars);

// // На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
let driver11 = new BaseDriver("Andriy", 33, 11);
let driver12 = new BaseDriver('Katrine', 23, 5);
let driver13 = new BaseDriver('Stan', 25, 7);
let driver14 = new BaseDriver("Andy", 45, 23);
let driver15 = new BaseDriver('Mark', 20, 2);

let newOwner = [driver11, driver12, driver13, driver14, driver15];
let indexNewOwner= 0;
cars.forEach((value, index, ...arr) => {
   if(index%2){
      value.owner=newOwner[indexNewOwner];
      return indexNewOwner++;
   }else{
      return 0;
   }
})
console.log(cars);

// Далі необхідно брати кожну другу машинку (цикл з кроком в 2),
// та робити їй підвищення потужності двигуна на 10% та ціну на 5%
cars.forEach((value, index, ...arr) => {
    if (index % 2) {
        value.power *= 1.1;
        value.price *= 1.05;
    } else {
        return 0;
    }
})
console.log(cars);

// Після того зробити перевірку досвіду ВСІХ наших водіїв.
// Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації,
// що збільшить йому досвід на 1 рік.
cars.forEach((value)=> {
    if (value.owner.expirience < 5 && value.owner.age > 25) {
        value.owner.ExpirRaiseCourses();
    }
});
console.log(cars);

// Також спробуйте порахувати суму,
// яку потрібно потратити для покупки всіх цих авто в циклі
let allCarsValue = cars.reduce((acc, value)=> acc+value.price, 0);
console.log(allCarsValue);

// Задача: дан отсортированный по возрастанию массив целых чисел. 
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
let search = 15;
let indexStart = arr.findIndex((value)=> value === search);
let numfinded = arr.reverse().findIndex((value)=> value === search);
// console.log(numfinded);
let indexLast = numfinded !== -1? (arr.length -1 )-numfinded: numfinded ;
console.log(indexStart);
console.log(indexLast);

// Входные данные: arr — массив целых чисел значения которых
// по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента.
// Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.