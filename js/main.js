// Корзина

let priceBuy = document.getElementById('priceBuy');
let valueProducts = document.getElementById('valueProducts');

let btnInBuyBasket = document.querySelectorAll('.btn__flex-item');

for(let elem of btnInBuyBasket) {
    elem.onclick = () => {
        valueProducts.textContent = parseInt(valueProducts.textContent) + 1;
        priceBuy.textContent = parseFloat(priceBuy.textContent) + parseFloat(elem.previousElementSibling.textContent);
    }
}