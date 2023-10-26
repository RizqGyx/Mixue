export const Card = (image, product, price1, information) => {
    const src = `../assets/product/${image}`;
    const name = product;
    const price = price1;
    const info = information;

    return `<div class="card">
        <img class="card-img" src="${src}" alt="${name}">
        <div class="content">
            <div class="desc">
                <h4>${name}</h4>
                <h3 class="harga">${price}</h3>
            </div>
            <p class="information">${info}</p>
        </div>
    </div>`
};