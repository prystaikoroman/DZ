// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
class Computer {
    constructor(raMemory, cpUnit, name) {
        this.raMemory = raMemory;
        if (cpUnit > 1000) {
            this.cpUnit = 1000;
        } else if (cpUnit < 0) {
            this.cpUnit = 0;
        } else {
            this.cpUnit = cpUnit;
        }
        this.name = name;
    }

    switchComputer(state) {
        console.log(`this computer - ${this.name} with CPU: ${this.cpUnit}MHz now has: ${state ? `working` : `turned off`}`)
    }
}

let myComputer = new Computer(8, 1100, "HP");
myComputer.switchComputer(confirm("Turn comtuter on?"));


// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
class Notebook extends Computer {
    constructor(raMemory, cpUnit, name, monitorSize) {
        super(raMemory, cpUnit, name);
        this.monitorSize = monitorSize;
        this.batteryLife = this.cpUnit / (this.monitorSize * this.raMemory);
    }
}

let myNoteBook = new Notebook(8, 900, "HP", 15);
console.log(myNoteBook);


// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
class Ultrabook extends Notebook {
    constructor(raMemory, cpUnit, name, monitorSize, weight) {
        super(raMemory, cpUnit, name, monitorSize);
        this.weight = weight;
    }

    switchComputer(state) {
        if (this.weight > 2 && this.batteryLife < 4) {
            console.error(`Parameters that you gave doesn't satisfied Ultrabook needs!`);
        }
    }
}

let myUltrabook = new Ultrabook(8, 300, "HP", 15, 1.8)
console.log(myUltrabook);
myUltrabook.switchComputer(true);


// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
class MainPC extends Computer {
    constructor(raMemory, cpUnit, name) {
        super(raMemory, cpUnit, name);
        this.fpsRate = this.cpUnit / this.raMemory;
    }

    gameStart(gameName) {
        console.log(`You are playing '${gameName}' with ${this.fpsRate} fps`);
    }
}

let myMainPC = new MainPC(256, 700, "AMD Duron 700");
myMainPC.gameStart("KISS Psycho Circus: The Nightmare Child");


// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===
class NotebookUpgrade extends Notebook {
    constructor(raMemory, cpUnit, name, monitorSize, weight) {
        super(raMemory, cpUnit, name, monitorSize, weight);
    }

    upgradeCPU(newCPU) {
        if (newCPU <= this.cpUnit * 1.1 && newCPU >= this.cpUnit) {
            this.cpUnit = newCPU;
            console.log(`CPU upgrade is sucsesfull. Installed CPU: ${this.cpUnit}`);
        }
    }

    upgradeRAM() {
        this.raMemory *= 2;
    }
}

let upgrade1 = new NotebookUpgrade(8, 900, "HP", 15);
upgrade1.upgradeCPU(930);
upgrade1.upgradeRAM();
console.log(upgrade1);


// Від базового ПК необхідно зробити ігровий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.
//
class gamePS extends MainPC {
    constructor(raMemory, cpUnit, name) {
        super(raMemory, cpUnit, name);
        this.fpsRate *= 2;
    }

    gameStart(gameName) {
        if (this.cpUnit < 500 && this.raMemory < 8) {
            console.error(`You can't start new game on this Computer! You have ${this.raMemory} RAM and CPU running on ${this.cpUnit} MHz`)
            return;
        }
        this.cpUnit /= 1.01;
    }
}

let newGamePC = new gamePS(4, 510, "HP");
newGamePC.gameStart();
console.log(newGamePC);
newGamePC.gameStart();
console.log(newGamePC);
newGamePC.gameStart();
console.log(newGamePC);

// //     ______________________________________________________________________________________________________________________________________________________
// // РОБОТА В АУДИТОРІЇ
// // ______________________________________________________________________________________________________________________________________________________
// //
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// // з властивостями модель, виробник, рік випуску, максимальна швидкість,
// // об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної
// //     швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік  випуску на значення newValue
// function baseCar(model, company, yearProduction, maxSpeed, engineVolume, drivers = []) {
//     this.model = model;
//     this.company = company;
//     this.yearProdaction = yearProduction;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drivers = drivers;
//
//     this.drive = function () {
//         console.log(`We driving with the speed of ${this.maxSpeed} p/h`);
//     }
//
//     this.info = function () {
//         let imgCar = document.createElement("img");
//         imgCar.src = `img/car.jpg`;
//         imgCar.height = "100";
//         document.body.appendChild(imgCar);
//         let divElement = document.createElement("div");
//         divElement.textContent = "Company: " + this.company;
//         document.body.appendChild(divElement);
//         document.write(`<div>model: "${this.model}"</div>`);
//         document.write(`<div>year production: ${this.yearProdaction}</div>`);
//         document.write(`<div>maximum speed: ${this.maxSpeed} mph</div>`);
//         document.write(`<div>engine volume: ${this.engineVolume} cu. in.</div>`);
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.yearProdaction = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляє його в поточний об'єкт car
//     this.addDriver = function (driver) {
//         drivers.push(driver);
//     }
// }
//
// function baseDriver(name, age, gander, category)  {
//         this.name = name;
//         this.age = age;
//         this.gander = gander;
//         this.category = category;
// }
//
// let driver1 = new baseDriver('Igor', 56, "male", "B");
// let driver2 = new baseDriver("Roman", 38, "male", "B");
//
// let newCar = new baseCar("Challenger", "Dodge", 1969, 155.34, 426.01);
// newCar.info();
// newCar.addDriver(driver1);
// newCar.addDriver(driver2);
// newCar.increaseMaxSpeed(25);
// newCar.changeYear(1970);
//
// console.log(newCar);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class BaseCar {
    constructor(model, company, yearProduction, maxSpeed, engineVolume, drivers = []) {
        this.model = model;
        this.company = company;
        this.yearProdaction = yearProduction;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.drivers = drivers;
    }

    drive() {
        console.log(`We driving with the speed of ${this.maxSpeed} p/h`);
    }

    info() {
        let imgCar = document.createElement("img");
        imgCar.src = `img/car.jpg`;
        imgCar.height = "100";
        document.body.appendChild(imgCar);
        let divElement = document.createElement("div");
        divElement.textContent = "Company: " + this.company;
        document.body.appendChild(divElement);
        document.write(`<div>model: "${this.model}"</div>`);
        document.write(`<div>year production: ${this.yearProdaction}</div>`);
        document.write(`<div>maximum speed: ${this.maxSpeed} mph</div>`);
        document.write(`<div>engine volume: ${this.engineVolume} cu. in.</div>`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.yearProdaction = newValue;
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляє його в поточний об'єкт car
    addDriver(driver) {
        this.drivers.push(driver);
    }
}

class BaseDriver {
    constructor(name, age, gander, category) {
        this.name = name;
        this.age = age;
        this.gander = gander;
        this.category = category;
    }
}

let driver1 = new BaseDriver('Igor', 56, "male", "B");
let driver2 = new BaseDriver("Roman", 38, "male", "B");

let newCar = new BaseCar("Challenger", "Dodge", 1969, 155.34, 426.01);
newCar.info();
newCar.addDriver(driver1);
newCar.addDriver(driver2);
newCar.increaseMaxSpeed(25);
newCar.changeYear(1970);

console.log(newCar);


//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
function createTag(name, specification, atr) {
    this.name = name;
    this.specification = specification;
    this.atr = atr;

}

// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//


// // -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// // -- info () - яка виводить всю інформацію про автомобіль
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class BaseCar {
//     constructor(model, company, yearProduction, maxSpeed, engineVolume, drivers = []) {
//         this.model = model;
//         this.company = company;
//         this.yearProdaction = yearProduction;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//         this.drivers = drivers;
//     }
//
//     drive() {
//         console.log(`We driving with the speed of ${this.maxSpeed} p/h`);
//     }
//
//     info() {
//         let imgCar = document.createElement("img");
//         imgCar.src = `img/car.jpg`;
//         imgCar.height = "100";
//         document.body.appendChild(imgCar);
//         let divElement = document.createElement("div");
//         divElement.textContent = "Company: " + this.company;
//         document.body.appendChild(divElement);
//         document.write(`<div>model: "${this.model}"</div>`);
//         document.write(`<div>year production: ${this.yearProdaction}</div>`);
//         document.write(`<div>maximum speed: ${this.maxSpeed} mph</div>`);
//         document.write(`<div>engine volume: ${this.engineVolume} cu. in.</div>`);
//     }
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.yearProdaction = newValue;
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і добавляє його в поточний об'єкт car
//     addDriver(driver) {
//         this.drivers.push(driver);
//     }
// }
//
// class BaseDriver {
//     constructor(name, age, gander, category) {
//         this.name = name;
//         this.age = age;
//         this.gander = gander;
//         this.category = category;
//     }
// }
//
// let driver1 = new BaseDriver('Igor', 56, "male", "B");
// let driver2 = new BaseDriver("Roman", 38, "male", "B");
//
// let newCar = new BaseCar("Challenger", "Dodge", 1969, 155.34, 426.01);
// newCar.info();
// newCar.addDriver(driver1);
// newCar.addDriver(driver2);
// newCar.increaseMaxSpeed(25);
// newCar.changeYear(1970);
//
// console.log(newCar);
