const cart = JSON.parse(localStorage.getItem('cart')) || []
let html = ''
let cartContainer = document.querySelector('.cart-container')
let buttonContainer=document.querySelector('.button-container')

let discount=0
const total = (array) => {
    let total = 0
    
    array.forEach((item) => {
        if(cart.length==1){
        total += parseInt(item.price)*1.15
        parseInt(total)
        }
        else if(cart.length==2){
        total += parseInt(item.price)*(1-5/100)*1.15
        parseInt(total)
        discount=5
        return discount
        }
        else if(cart.length==3){
        total += parseInt(item.price)*(1-10/100)*1.15
        parseInt(total)
        discount=10
        return discount
        }
        else if(cart.length>3){
        total += parseInt(item.price)*(1-15/100)*1.15
        parseInt(total)
        discount=15
        return discount
        }

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
<p class="total-js"> Total R${totalNumber.toFixed(1)} (15 % VAT Included and ${discount}% discount Applied )</p>
</div>`

cartContainer.addEventListener('click',(e)=>{
    if(
    e.target.classList.contains('reset-btn-js')){
        localStorage.removeItem('cart')
        location.reload()
    }
})