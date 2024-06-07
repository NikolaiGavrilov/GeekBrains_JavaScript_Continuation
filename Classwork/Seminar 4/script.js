// Задание 1 (тайминг 20 минут)
// В html создать элемент checkbox и текст рядом 
// с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять 
// выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под 
// чекбоксом “Необходимо согласиться с условиями”

const labelEl = document.createElement('label');
labelEl.textContent = 'Согласен с условиями';
const checkboxEl = document.createElement('input');
checkboxEl.type = 'checkbox';
document.body.appendChild(labelEl);
labelEl.before(checkboxEl);
labelEl.insertAdjacentHTML('afterend',
    '<br><button class="button">Отправить</button>')
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', (event) => {
    if (!checkboxEl.checked) {
        labelEl.insertAdjacentHTML('afterend',
            '<span class="error" style="color:red;"><br>Необходимо согласиться с условиями<span>')
    } else {
        const errorText = document.querySelector('.error');
        if (errorText !== null) errorText.remove();
    }
});

// Задание 2
// В html создать 2 элемента радио кнопки (input type=”radio”) 
// и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”


document.body.insertAdjacentHTML('beforeend',
    '<br><input type="radio" class="tea" name="choice">Чай</input>');
document.body.insertAdjacentHTML('beforeend',
    '<br><input type="radio" class="coffee" name="choice">Кофе</input>');
document.body.insertAdjacentHTML('beforeend',
    '<br> <button class="buttonTask2">Отправить</button>');
const btnEl = document.querySelector('.buttonTask2');
const teaEl = document.querySelector('.tea');
const coffeeEl = document.querySelector('.coffee');

btnEl.addEventListener('click', () => {
    const errorMessage = document.querySelector('.errorTask2');
    if (teaEl.checked) {
        if (errorMessage !== null) {
            errorMessage.remove();
        }
        btnEl.insertAdjacentHTML('beforebegin',
            '<span class="errorTask2" style="color:red;">Чай закончился<br></span>');

    }
    if (coffeeEl.checked) {
        if (errorMessage !== null) {
            errorMessage.remove();
        }
        btnEl.insertAdjacentHTML('beforebegin',
            '<span class="errorTask2" style="color:red;">Кофе закончился<br></span>');
    }
});

// Задание 3 (тайминг 20 минут)
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

document.body.insertAdjacentHTML('beforeend', '<br><span>Введите пароль:</span>');
document.body.insertAdjacentHTML('beforeend', '<input type="password">');
document.body.insertAdjacentHTML('beforeend', '<br><button class="submitBtn">Войти</button>');
const submitBtn = document.querySelector('.submitBtn');
const inputPass = document.querySelector('input[type = "password"]')

submitBtn.addEventListener('click', () => {
    const passwordErr = document.querySelector('.passwordErr');
    if (passwordErr !== null) passwordErr.remove();
    if (inputPass.value !== "пароль") {
        inputPass.style.border = "1px solid red";
        inputPass.insertAdjacentHTML('afterend', 
        '<span class="passwordErr" style="color: red;"><br>Пароль неверный!</span>')
    } else {
        inputPass.style.border = "1px solid green";

    }
});

// Задание 4(тайминг 20 минут)
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри 
// заголовка менятся на введенный в поле ввода

document.body.insertAdjacentHTML('beforeend', '<h1 class="heading">Заголовок</h1>');
document.body.insertAdjacentHTML('beforeend', '<input type="text" class="inputForHeading">');
const heading = document.querySelector('.heading');
const inputForHeading = document.querySelector('.inputForHeading');
inputForHeading.addEventListener('keydown', () => {
    heading.textContent = inputForHeading.value;
})
