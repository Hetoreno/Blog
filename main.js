const menuButton = document.querySelector(".menu-bars");
const menuClose = document.querySelector(".exit");
const menu = document.querySelector(".mobile-menu");
const navLinks = document.querySelectorAll(".close");
const arrow = document.querySelector(".to-top");

menuButton.addEventListener("click",()=>{
    menu.classList.toggle("open-menu");
})

menuClose.addEventListener("click",()=>{
    menu.classList.toggle("open-menu");
})

navLinks.forEach((event)=>{
    event.addEventListener("click",()=>{
        menu.classList.toggle("open-menu");
    })
})

window.addEventListener("scroll",()=>{
    window.pageYOffset > 800 ? arrow.classList.add("active") : arrow.classList.remove("active");
})