let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}


let accuount = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () => {
    accuount.classList.add('active');
}

document.querySelector('#close-account').onclick = () => {
    accuount.classList.remove('active');
}


let myOrder = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () => {
    myOrder.classList.add('active');
}

document.querySelector('#close-orders').onclick = () => {
    myOrder.classList.remove('active');
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () => {
    shoppingCart.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    myOrder.classList.remove('active');
}

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
    acco.onclick = () =>{
        accordion.forEach(remove =>remove.classList.remove('active'));
        acco.classList.add('active');
    }
});
