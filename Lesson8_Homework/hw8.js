// // - Дана textarea.
// //     В неё вводится текст.
// //     Сделайте так, чтобы после захода на эту страницу через некоторое время,
// //     введенный текст остался в textarea.
// const inputBox = document.getElementById("input")
// let storage2= localStorage.getItem(inputBox.id);
// storage2?inputBox.value = storage2: undefined;
//
//
// inputBox.onkeyup = (ev) =>{
//     let storage1 = localStorage.getItem(inputBox.id);
//      // storage1?localStorage.removeItem(inputBox.id):undefined;
//     localStorage.setItem(inputBox.id, inputBox.value);
//  };


// - Дана форма с инпутами, текстареа, чекбоксами,
// радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает
//     страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу
// введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
const mainForm = document.getElementById("form1");
for (const tag of mainForm) {
    console.log(tag);
    if (tag.type === "radio" && tag.id ===localStorage.getItem(tag.name)) {
        tag.checked = true;
    } else if (tag.type === 'checkbox') {
        tag.checked = localStorage.getItem(tag.id);
    } else {
        tag.value = localStorage.getItem(tag.id, tag.value);
    }

}
mainForm.oninput = ({target: {type, name, id, value, checked}}) => {
    if (type === "radio") {
        localStorage.setItem(name, id);
    } else if (type === 'checkbox') {
        localStorage.setItem(id, checked);
    } else {
        localStorage.setItem(id, value);
    }


};

//
// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
