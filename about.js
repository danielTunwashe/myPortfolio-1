const hamburger = document.querySelector(".hambuger");
const links = document.querySelector(".links");

hamburger.addEventListener("click",mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
}

document.querySelectorAll("lin").forEach(n => n.addEventListener(("click"), () =>{
    hamburger.classList.remove("active");
    links.classList.remove("active");
}))