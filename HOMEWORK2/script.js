// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

// ```
// <p class="dropdown">Привет :)</p>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// Dropdown button
// </button>
// <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
// <a class="dropdown-item" href="#">Action</a>
// <a class="dropdown-item" href="#">Another action</a>
// <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>

// <script>
//     "use strict";
// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach(element => {
    element.classList.add("super-dropdown");
});
console.log("Задание 1");
console.log(dropdownItems);

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()

const buttonElem = document.querySelector(".btn");
let secondaryClassFound = false;
buttonElem.classList.forEach(element => {
    if (element === "btn-secondary") {buttonElem.classList.remove(element);
    secondaryClassFound = true;}
});
if (secondaryClassFound === false) {
    buttonElem.classList.add("btn-secondary")
}
console.log("Задание 2");
console.log(buttonElem);
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()

const menuClassElem = document.querySelector(".menu");
menuClassElem.classList.remove("dropdown-menu");
console.log("Задание 3");
console.log(menuClassElem);

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()

const dropdownDiv = document.querySelector("div.dropdown")
const linkElem = document.createElement("a");
linkElem.href = "#";
linkElem.textContent = "link";
dropdownDiv.after(linkElem);
console.log("Задание 4 - см. элементы div и a в отладчике кода");
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()

const ddMenuBtn = document.querySelector("#dropdownMenuButton");
ddMenuBtn.id = "superDropdown";
console.log("Задание 5");
console.log(ddMenuBtn);

// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()

const dataDD = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
dataDD.setAttribute("data-dd", 3);
console.log("Задание 6");
console.log(dataDD);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const deleteAttrElem = document.querySelector('.dropdown-toggle');
deleteAttrElem.removeAttribute('type');
console.log("Задание 7");
console.log(deleteAttrElem);