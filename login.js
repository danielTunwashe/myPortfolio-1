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


let firstInput = document.querySelectorAll("input")[0]
firstInput.focus()


let buttonLogin  =  document.querySelector("#buttonLogin")
buttonLogin.addEventListener('click', (buttonClick) => {
    buttonClick.preventDefault();
    alert("You are logged in...")
})