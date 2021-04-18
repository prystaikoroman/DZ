let bodyNodes = document.body;

let bodyChildElementsCount = bodyNodes.childElementCount;
console.log(bodyChildElementsCount);
for (let i = 0; i < bodyChildElementsCount; i++) {
    bodyNodes.firstElementChild.remove();
}

let newElement = document.createElement('div');
newElement.id = 'content';
document.body.appendChild(newElement);

newElement = document.createElement('h1');
newElement.textContent = 'Правила бійцівського клубу';
document.body.appendChild(newElement);

const divConteiner = document.createElement('div');
divConteiner.id = 'divConteiner';
divConteiner.style.display ='flex';
divConteiner.style.flexDirection ='row';
document.body.appendChild(divConteiner);

const divMenu = document.createElement('div');
divMenu.id = 'menu';
divMenu.style.width= '20%';
divConteiner.appendChild(divMenu);

// newElement = document.createElement('div');
// newElement.id = 'menu1';
// newElement.innerHTML = 'jkffjkhg';
// divMenu.appendChild(newElement);

newElement = document.createElement('div');
newElement.id = 'wrap';
divConteiner.appendChild(newElement);

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

let classLength = rules.length;
for (let i = 0; i < classLength; i++) {
    let mainDivForRule = document.createElement('div');
    mainDivForRule.classList = `rules rule${i}`;

    newElement = document.createElement('h2');
    newElement.textContent = rules[i]['title'];
    newElement.id = `title${i}`;
    mainDivForRule.appendChild(newElement);

    newElement = document.createElement('p');
    newElement.textContent = rules[i]['body'];
    mainDivForRule.appendChild(newElement);

    document.getElementById('wrap').appendChild(mainDivForRule);
}



// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html)
// текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
    let wrap = document.getElementById("wrap");
const headers =  wrap.getElementsByTagName('h2')
for (let i =0;i< headers.length; i++){
    const ahref = document.createElement('a');
    ahref.innerHTML=headers[i].innerHTML.toString() ;
    ahref.setAttribute('href',`#${headers[i].id}`) ;
    divMenu.appendChild(ahref);
}






