const myPromise = new Promise((resolve, reject) => {

});
console.log(myPromise);
myPromise.then((value) => {

}).catch((error) => {

})

const url2 = "https://jsonplaceholder.typicode.com/";
const url1 = "https://dog.ceo/api/breeds/image/random";
fetch(url1)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        // console.log(error.message);
        console.log("Что-то сломалось");
    })

const getData = async (url1) => {
    try {
        const res = await fetch(url1);
        const dataFromServer = await res.json();
        return dataFromServer;
    } catch (error) {
        console.log(error.message);
    }
}


const btnEl = document.querySelector('button');
btnEl.addEventListener('click', async (e) => {
    const fetchData = await getData(url1);
    // console.log(fetchData);
    const imgEl = document.querySelector('img');
    imgEl.src = fetchData.message;

})