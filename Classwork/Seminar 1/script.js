// Задание 1 (тайминг 10 минут)
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

const linkToBlock = document.querySelector('#block');
console.log(linkToBlock.outerHTML);
console.log(linkToBlock.firstElementChild.outerHTML);

// Получите ссылку на первый абзац с классом www. и вывести его в консоль
// <p class="www">text 1</p>
// <p class="www">text 2</p>
// const linkToFirstParagraph = document.querySelector('.www')
const linkToFirstParagraph = document.querySelectorAll('.www')[0]
console.log(linkToFirstParagraph);

// Задание 2 (тайминг 15 минут)
// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/ 


const linkToChange = document.getElementsByClassName('link')[0];
linkToChange.textContent = 'link text js';
linkToChange.href = 'https://developer.mozilla.org/ru/';
console.log(linkToChange.outerHTML);

// Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const photoElem = document.querySelector('.photo');
photoElem.src = "https://w-dog.ru/wallpapers/6/2/529196211350601/kot-ryzhij-smotrit.jpg";

// Задание 3 (тайминг 20 минут)
// Дан тег <div class="content"></div> 
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри 
// Удалите добавленный узел 

const divElem = document.querySelector('.content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Новый текстовый элемент';
divElem.appendChild(newParagraph);
// divElem.removeChild(newParagraph);

// Задание 4 (тайминг 15 минут)
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
const newBtn = document.createElement('button');
divElem.appendChild(newBtn);
newBtn.textContent = 'Кнопка';
let i = 0;
newBtn.onclick = function () {
    i++;
    console.log('Меня нажали столько раз: ' + i);
}

// Задание 5 (тайминг 20 минут)
// Дан тег <div class="content"></div> 
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const sendBtn = document.createElement('button');
sendBtn.textContent = 'Отправить';
divElem.appendChild(sendBtn);
sendBtn.onclick = function () {
    sendBtn.textContent = 'Текст отправлен';
}







