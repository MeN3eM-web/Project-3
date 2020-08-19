// Burger menu slider
function navSlide() {
    var burger = document.querySelector('.burger');
        nav = document.querySelector('.nav-bar'),
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle')
    });

} 
navSlide();
// Form translation
var x = document.getElementById('login'),
    y = document.getElementById('register'),
    z = document.getElementById('btn');
function getRegisterForm(){
    x.style.left = "-300px";
    y.style.left = "25px";
    z.style.left = "110px";
}
function getLoginForm(){
    x.style.left = "25px";
    y.style.left = "325px";
    z.style.left = "0px";
}

