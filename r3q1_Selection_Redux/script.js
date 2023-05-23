// PLACE YOUR CODE HERE

document.querySelector("h2").style.fontSize = "32px"
document.querySelector("h2").style.fontFamily = "Verdana"


document.querySelector("img").style.border = "1px solid black"

document.querySelector("#coyote").style.backgroundColor = "yellow"
document.querySelector("#duck").style.backgroundColor = "yellow"

document.querySelector("#pancakes").innerText = "Pancake Recipe"

let listAll = document.querySelectorAll("ol li")

for (let x of listAll){

    x.style.color = "orange"

}