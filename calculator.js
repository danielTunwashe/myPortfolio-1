
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
// let inputBox = document.getElementsByClassName(".screen-input")
// let values = ""


// document.querySelectorAll('button').forEach((button) =>{
//     button.addEventListener(('click'),(e) =>{
//         console.log(e)
//         inputBox.innerText = button.innerText
//         values += inputBox.innerText
//         console.log(values)
//     })
// })

// console.log("Hello.....")
// console.log("Hello1.....")
// console.log("Hello2.....")
// console.log("Hello3.....")




// var button9 = document.querySelector(".button9")
// var button8 = document.querySelector(".button8")
// var button7 = document.querySelector(".button7")
// var button6 = document.querySelector(".button6")
// var button5 = document.querySelector(".button5")
// var button4 = document.querySelector(".button4")
// var button3 = document.querySelector(".button3")
// var button2 = document.querySelector(".button2")
// var button1 = document.querySelector(".button1")
// var button0 = document.querySelector(".button0")
let arrValues = []
var value = 0
var inputBox = document.getElementById("screen-in");



// button9.addEventListener(('click'),(e) => {
//     inputBox.value = button9.innerHTML
//     console.log(e)
// })

document.querySelectorAll('button').forEach((button) =>{
    button.addEventListener(('click'),(e) =>{
        console.log(`you have clicked on a button with name ${e.target.name}`)
        value = button.innerHTML
        inputBox.value += value
        arrValues.push(inputBox.value)
        console.log(inputBox.value)
        console.log(arrValues)
    })
})

// function buttonClicked (button){
    
//     button.addEventListener(('click'),(e) => {
//         inputBox.value = button.innerHTML
//         value = inputBox.value
//         console.log(e.target.name)
//         return value
//     })   
// }

// console.log(buttonClicked(button9))
// console.log(buttonClicked(button8))


// function display(e){
//     inputBox.value = button9.innerHTML
//     console.log(e)
// }





