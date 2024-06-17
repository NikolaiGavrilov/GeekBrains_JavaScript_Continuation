// Дан макет сайта 
// https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0
// В блоке Featured Items небходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.
// Всю вёрстку остальных частей реализовывать не нужно, если у вас она 
// была сделана на html/css можно использовать, заново создавать не требуется.

const url = "/data.json";

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const data = await fetchData(url);
    const catalogueBlock = document.querySelector('.catalogue');
    data.forEach(catalogueEl => {
        catalogueBlock.insertAdjacentHTML('beforeend', `
        <article class="catalogue_element">
                <div class="catalogue_imagebox">
                    <div class="catalogue_img_idle"><img src=${catalogueEl.img} alt="catalogue picture ${catalogueEl.id}"></div>
                    <div class="catalogue_img_hover"><a href=""><img src="img/Add to cart.png" alt=""></a></div>
                </div>
                <div class="catalogue_down_part">
                    <h3 class="catalogue_heading">${catalogueEl.title}</h3>
                    <p class="catalogue_description">${catalogueEl.description}</p>
                    <span class="catalogue_cost">${catalogueEl.price}</span>
                </div>
            </article>
        `)
    });
})