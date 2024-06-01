// Задание 1 (тайминг 25 минут)
{/* <div class="block">

</div> */}
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)
const divEl = document.querySelector('.block');
const itemEl = document.createElement('div');
itemEl.className = "item";
itemEl.textContent = "Элемент внутри";
itemEl.style.color = "blue";
itemEl.style.border = "1px solid black";
itemEl.style.backgroundColor = "#f8f8f8";
itemEl.style.padding = "16px";
divEl.appendChild(itemEl);
itemEl.setAttribute('class', 'item_1');


// Задание 2 (тайминг 25 минут)
// Дан код
// <div class="elem">
//   <img src="photo.png" alt="photo">
//   <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
//     <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
//   </div>
// </div>

// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem
console.log('Задача 2');
const pEl = document.querySelector('.text');
console.log(pEl.previousElementSibling);
console.log(pEl.parentElement);
console.log(pEl.parentElement.parentElement.firstElementChild);
// или 
// console.log(pEl.parentElement.previousElementSibling);
console.log(pEl.parentElement.parentElement);

// Задание 3 (тайминг 20 минут)
// <div class="item">
//   <div class="elem">
//     <div class="info">
//       <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//     </div>
//   </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей
console.log('Задача 3');
const h2El = document.querySelector('.subtitle');
console.log(h2El.parentElement);
console.log(h2El.parentElement.parentElement);
console.log(h2El.parentElement.parentElement.parentElement);
console.log(h2El.parentElement.parentElement.parentElement.parentElement);
console.log(h2El.parentElement.parentElement.parentElement.parentElement.parentElement);

// Задание 4 (тайминг 25 минут)
// <form action="#">
//   <input type="text">
//   <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, 
// а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('.btn');
const formEl = document.querySelector('form');
let h2Elem;
buttonEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputEl.value.trim() === '') {
        if (!h2Elem) {
            h2Elem = document.createElement('h2');
            h2Elem.textContent = "Вы не заполнили поле ввода";
            inputEl.after(h2Elem);
        }
        inputEl.style.border = "4px solid red";
    } else {
        if (h2Elem) {
            inputEl.style.border = "1px solid black";
            h2Elem.remove();
            h2Elem = null;    
        }
        formEl.submit();
        console.log("Форма отправлена");
        formEl.reset();
    }
});

// function emptyInput() {
//     const formEl = document.querySelector('form');
//     const inputText = document.querySelector('input');
//     if (inputText.textContent.length === 0) {
//         let h2El = formEl.createElement('h2');
//         h2El.textContent = 'Вы не заполнили поле';
//         formEl.style.border = "1px solid red";
//     }
// }
// const buttonEl = document.querySelector('.btn');
// buttonEl.onclick = emptyInput();














