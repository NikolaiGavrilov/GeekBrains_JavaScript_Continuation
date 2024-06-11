// Задание 1
// 1. Поиск в интернете(бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const content = document.createElement('div');
content.setAttribute('class', 'content');
document.body.appendChild(content);
content.insertAdjacentHTML('afterbegin', `
<h1 class="readme">Результат упражнений с <a href="https://randomuser.me/api/">Random User Api</a></h1>`)

const parsedDataFromJSON = JSON.parse(dataFromJSON);
console.log(parsedDataFromJSON);

content.insertAdjacentHTML('beforeend', `
<div class="item">
<span class="item__message">Получение данных из data.js, куда скопирован JSON c ссылки (не обновляется)</span><br>
<img class="item__img" src=${parsedDataFromJSON.results[0].picture.large}>
<h2>${parsedDataFromJSON.results[0].name.first} ${parsedDataFromJSON.results[0].name.last}</h2>
<p>${parsedDataFromJSON.results[0].location.city}, ${parsedDataFromJSON.results[0].location.country}</p>
</div>`)


// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных(картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости(по желанию).

const url = "https://randomuser.me/api";
fetch(url)
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
        console.log(error.message);
        console.log("Упс! Возникла непредвиденная ошибка");
    });

const getData = async (url) => {
    try {
        const res = await fetch(url);
        const jsonFromServer = await res.json();
        return jsonFromServer;
    } catch {
        console.log(error.message);
    }
};

const fetchedData = await getData(url);
console.log(fetchedData);

content.insertAdjacentHTML('beforeend', `
<div class="item">
<span class="item__message">Результат c получением JSON с сервера (обновить страницу для получения другого результата)</span><br>
<img class="item__img" src=${fetchedData.results[0].picture.large} alt="">
<h2>${fetchedData.results[0].name.first} ${fetchedData.results[0].name.last}</h2>
<p>${fetchedData.results[0].location.city}, ${fetchedData.results[0].location.country}</p>
</div>`);