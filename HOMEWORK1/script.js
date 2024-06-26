// Обязательное задание.

// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

/*
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>

<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make up the bulk of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another link</a>
</div>
</div>

<script>
"use strict";
*/

// []()
// []()
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// []()

const superLink = document.getElementById('super_link');
console.log(superLink.outerHTML);
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// []()

const cardLinkElems = document.querySelectorAll('.card-link');
cardLinkElems.forEach(element => {
    element.textContent = 'ссылка';
    console.log(element.outerHTML);
});


// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// []()

const cardBody = document.querySelector('.card-body');
const cardLinksInCardBody = cardBody.querySelectorAll('.card-link');
console.dir(cardLinksInCardBody);

// 4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.
// []()

const dataNumber = document.querySelectorAll('[data-number="50"]')[0];
console.log(dataNumber);

// 5. Выведите содержимое тега title в консоль.
// []()

const titleElem = document.title;
console.log(titleElem);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// []()

const cardTitle = document.querySelector('.card-title');
console.log(cardTitle.parentNode);
// console.log(cardTitle.parentElement);

// 7. Создайте тегp`, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const paragrElem = document.createElement('p');
paragrElem.textContent = 'Привет';
const cardElem = document.querySelector('.card');
// cardElem.appendChild(paragrElem);
cardElem.insertBefore(paragrElem, cardElem.firstChild);

// 8. Удалите тег h6 на странице.

const h6ToRemove = document.querySelector('h6');
h6ToRemove.remove();