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

let buttonContact = document.querySelector("#buttonContact")
buttonContact.addEventListener('click', (buttonCont)=>{
    buttonCont.preventDefault();
    alert("Your request have been submitted we will get in contact with you soon")
})