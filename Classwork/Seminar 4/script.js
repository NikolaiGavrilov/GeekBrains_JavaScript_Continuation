// Задание 1 (тайминг 20 минут)
// В html создать элемент checkbox и текст рядом 
// с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять 
// выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под 
// чекбоксом “Необходимо согласиться с условиями”


// document.body.insertAdjacentHTML('beforeend',
//     `<form>
// <input type="checkbox">
// <label>Согласен с условиями</label>
// <br><button>Отправить</button>
// </form>`);
// const checkboxElem = document.querySelector('input[type="checkbox"]');
// const buttonElem = document.querySelector('button');
// const formElem = document.querySelector('form');
// let errorMessage = false;
// buttonElem.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (!checkboxElem.checked && !errorMessage) {

//         const parElem = document.createElement('p');
//         parElem.textContent = "Необходимо согласиться с условиями";
//         buttonElem.insertAdjacentElement('afterend', parElem);
//         errorMessage = true;
//     } else if (checkboxElem.checked) {
//         formElem.submit();
//     }
// });

// МОЙ АЛЬТЕРНАТИВНЫЙ ВАРИАНТ РЕШЕНИЯ ПЕРВОГО ЗАДАНИЯ
// document.body.insertAdjacentHTML('beforeend',
//     `<form>
// <input type="checkbox">
// <label>Согласен с условиями</label>
// <br><button>Отправить</button>
// </form>`);
// const checkboxElem = document.querySelector('input[type="checkbox"]');
// const buttonElem = document.querySelector('button');
// const formElem = document.querySelector('form');
// buttonElem.addEventListener('click', (event) => {
//     event.preventDefault();
//     const errorText = document.querySelector('.error');
//     if (errorText !== null) {
//         errorText.remove();
//     }
//     if (!checkboxElem.checked) {
//         buttonElem.insertAdjacentHTML('afterend',
//             '<span class="error" style="color:red;"><br>Необходимо согласиться с условиями<span>')
//     } else {
//         formElem.submit();
//     }
// });


// // Задание 2
// // В html создать 2 элемента радио кнопки (input type=”radio”)
// // и текст “Чай”, “Кофе” соответственно
// // Кнопка отправить
// // Если выбран чай, необходимо вывести сообщение “Чай закончился”
// // Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// document.body.insertAdjacentHTML('beforeend',
//     `<form>
// <label><input type="radio" id="tea" name="chooseDrink">Чай</label>
// <label><input type="radio" id="coffee" name="chooseDrink">Кофе</label>
// <br><button>Отправить</button>
// <p></p>
// </form>`);
// const buttonEl = document.querySelector('button');
// const inputEls = document.querySelectorAll('input');
// const errorEl = document.querySelector('p');
// errorEl.style.color = "red";
// buttonEl.addEventListener('click', (event) => {
//     event.preventDefault();
//     inputEls.forEach((element) => {
//         if (element.checked) {
//             if (element.id === "tea") errorEl.textContent = "Чай закончился";
//             else if (element.id === "coffee") errorEl.textContent = "Кофе закончился";
//         }
//     })
// });


// // Задание 3 (тайминг 20 минут)
// // Создать поле ввода (пароль)
// // Кнопка отправить
// // Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// // Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// document.body.insertAdjacentHTML('beforeend',
//     `<form>
// <label>Введите пароль: <input type="password"></label>
// <br><button>Отправить</button>
// </form>`);

// const inputPass = document.querySelector('input');
// const buttonEl = document.querySelector('button');
// buttonEl.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (inputPass.value === "пароль") {
//         inputPass.style.border = "3px solid green";
//     } else {
//         inputPass.style.border = "3px solid red";
//         inputPass.placeholder = "Пароль неверный";
//         inputPass.value = '';
//     }
// });


// // Задание 4(тайминг 20 минут)
// // Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// // При вводе текста в поле ввода необходимо чтобы текст внутри
// // заголовка менятся на введенный в поле ввода

document.body.insertAdjacentHTML('beforeend',
    `<input type="text">
    <br><h1>Заголовок</h1>`);

const inputElem = document.querySelector('input');
const headingElem = document.querySelector('h1');
inputElem.addEventListener('input', () => {
    headingElem.textContent = inputElem.value;
});

