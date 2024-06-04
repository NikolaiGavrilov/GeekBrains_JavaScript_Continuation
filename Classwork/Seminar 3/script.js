// Задание 1 (тайминг 15 минут)
// В html создать кнопку button
// После загрузки страницы вывести в консоль 
// текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль 
// текст “событие onclick”
// Добавить событие addEventListener которое выводит
//  в консоль текст “событие addEventListener”


// const btnEl = document.createElement('button');
// document.body.appendChild(btnEl);
// btnEl.textContent = "button";
// addEventListener('load', (event) => {
//     console.log('Страница загрузилась');
// });
// btnEl.onclick = function () {
//     console.log('Событие onclick');
// };
// btnEl.addEventListener('click', function (event) {
//     console.log('coбытие addEventListener');
// })

// Задание 2(тайминг 30 минут)
// Создать в html три кнопки button с нумерацией(1, 2, 3 соответственно)
// Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка
// на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на
// нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую,
// меняется текст данной кнопки на “Вы нажали на эту кнопку”


// const btnEls = document.createElement('div');
// const btnEl1 = document.createElement('button');
// btnEl1.textContent = "1";
// const btnEl2 = document.createElement('button');
// btnEl2.textContent = "2";
// const btnEl3 = document.createElement('button');
// btnEl3.textContent = "3";
// document.body.appendChild(btnEls);
// btnEls.append(btnEl1, btnEl2, btnEl3);
// btnEls.addEventListener('click', (e) => {
//     console.log(e.target);
// })
// btnEl4 = document.createElement('button');
// btnEl4.textContent = "4";
// let counter = 0;
// btnEl3.after(btnEl4);
// btnEl4.addEventListener('click', function (e) {
//     counter++;
//     console.log(`Раз нажато на кнопку: ${counter}`);
// });
// btnEl5 = document.createElement('button');
// btnEl5.textContent = "5";
// btnEl4.after(btnEl5);
// btnEl5.addEventListener('click', () => {
//     btnEl5.textContent = "Вы нажали на эту кнопку";
// })


// Задание 3(тайминг 30 минут)
// Создать кнопку, которая добавляем заголовок h1 с текстом, 
// “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет 
// выводиться текст “вы навели на данную кнопку” , 
// как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст 
// “Наведения на кнопку больше нет”

// const buttonAddh1 = document.createElement('button');
// buttonAddh1.textContent = "Добавь h1";
// document.body.append(buttonAddh1);
// const h1El = document.createElement('h1');
// h1El.textContent = "Новый заголовок";

// buttonAddh1.onclick = () => {
//     buttonAddh1.after(h1El);
// }

// const buttonDeleteH1 = document.createElement('button');
// buttonDeleteH1.textContent = "Удалить h1";
// document.body.append(buttonDeleteH1);
// buttonDeleteH1.onclick = function () {
//     h1El.remove();
// }
// const buttonPointAtMe = document.createElement('button');
// buttonPointAtMe.textContent = "наведи на меня";
// document.body.append(buttonPointAtMe);
// buttonPointAtMe.addEventListener('mouseenter', (e) => {
//     console.log("Вы навели на данную кнопку");
// })
// buttonPointAtMe.addEventListener('mouseleave', (e) => {
//     console.log("Наведения на кнопку больше нет");
// })

// Задание 4 (тайминг 30 минут)
// Создать в html список состоящий из 3 - х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const ulElem = document.createElement('ul');
// const liElem1 = document.createElement('li');
// const liElem2 = document.createElement('li');
// const liElem3 = document.createElement('li');
// liElem1.textContent = 'li elem1';
// liElem2.textContent = 'li elem';
// liElem3.textContent = 'li elem';
// document.body.append(ulElem);
// ulElem.append(liElem1, liElem2, liElem3);
// const buttonAddingElem = document.createElement('button');
// buttonAddingElem.textContent = 'Добавить элемент';
// document.body.append(buttonAddingElem);
// buttonAddingElem.addEventListener('click', () => {
//     const newLiElem = document.createElement('li');
//     newLiElem.textContent = "Новый элемент списка";
//     ulElem.appendChild(newLiElem)
// });
// const buttonRemovingElem = document.createElement('button');
// buttonRemovingElem.textContent = 'Удалить элемент';
// document.body.append(buttonRemovingElem);
// buttonRemovingElem.addEventListener('click', () => {
//     ulElem.removeChild(ulElem.firstElementChild);
// });
// const buttonAddClass = document.createElement('button');
// buttonAddClass.textContent = 'Добавить класс';
// document.body.append(buttonAddClass);
// buttonAddClass.addEventListener('click', () => {
//     buttonAddClass.setAttribute('class', 'click');
// });

// Задание 4 (тайминг 20 минут)
// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divContent = document.createElement('div')
divContent.setAttribute('class', 'content');
document.body.append(divContent);
const buttonSend = document.createElement('button');
buttonSend.textContent = 'отправить';
divContent.append(buttonSend);
buttonSend.onclick = () => {
    buttonSend.textContent = "Текст отправлен";
}

















