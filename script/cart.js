const cart = JSON.parse(localStorage.getItem('cart')) || []
let html = ''
let cartContainer = document.querySelector('.cart-container')
let buttonContainer=document.querySelector('.button-container')


const total = (array) => {
    let total = 0
    array.forEach((item) => {
        total += parseInt(item.price)*1.15
        parseInt(total)
    })
    return total
}
const totalNumber = total(cart)
cart.forEach((item, index) => {
    html += `<div class="cart-items data-index=${index}">
        <img src="${item.image}" alt="${item.name}" >
        <div class="cart-info">
        <p class="cart-name">${item.name}</p>
        <p class="cart-price">R${item.price}</p>
        </div>
        </div>
        `
});







cartContainer.innerHTML += html
cartContainer.innerHTML+=`<div class="btn-container-js"><button class="reset-btn-js">Reset</button>
<p class="total-js"> Total R${totalNumber.toFixed(1)} (15 % VAT Included)</p>
</div>`

cartContainer.addEventListener('click',(e)=>{
    if(
    e.target.classList.contains('reset-btn-js')){
        localStorage.removeItem('cart')
        location.reload()
    }
})