const heroImage = document.querySelector('.myimg');
const fThumb = document.querySelector('.first');
const sThumb = document.querySelector('.second');
const tThumb = document.querySelector('.third');
const forThumb = document.querySelector('.forth');
fThumb.addEventListener('click', function(){
    heroImage.src ='image-product-1.jpg';
})
sThumb.addEventListener('click', function(){
    heroImage.src ='image-product-2.jpg';
})
tThumb.addEventListener('click', function(){
    heroImage.src ='image-product-3.jpg';
})
forThumb.addEventListener('click', function(){
    heroImage.src ='image-product-4.jpg';
})

// 
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const number = document.getElementById('number');
number.innerHTML = 0;
var newNumber = Number(number.innerHTML);
let counter=0;
minus.addEventListener('click', function() {
    if (newNumber > 0) { 
        newNumber--;
        number.innerHTML = `${newNumber}`;
        return((counter+newNumber)*125);
    }
});
plus.addEventListener('click', function() {
    newNumber++;
    number.innerHTML = `${newNumber}`;
    return((counter+newNumber)*125);
});
const addButton = document.querySelector('.add-btn');

addButton.addEventListener('click', function() {
    const items=document.querySelector('.items');
    const tempP=document.querySelector('.cart-item');
    tempP.remove();
    const myDiv=document.createElement('div');
    myDiv.classList.add('.items');
    const checkout = document.querySelector('.checkout');
    checkout.classList.add('show');
    myDiv.innerHTML=`<img class="added-image my-2 inline" src="image-product-1-thumbnail.jpg">
    <p style="display: inline;" >Fall Limited Edition Sneakers</p>
    <span class=" ">$125.00 X${newNumber}</span>
    <span class="fw-bold "> $${((counter+newNumber)*125)}.00</span>
    <svg onclick="deleteItem();"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mx-1" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>
    
    `;
    items.appendChild(myDiv);
});
const iconCart=document.querySelector('.cart-icon');
iconCart.addEventListener('click',function() {
    const cart = document.querySelector('.cart');
    cart.classList.toggle('show');
})


function deleteItem(){
    const items=document.querySelector('.items');
    items.remove();
    const checkout = document.querySelector('.checkout');
    checkout.classList.remove('show');
}
