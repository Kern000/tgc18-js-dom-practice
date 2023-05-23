// PLACE YOUR CODE HERE
let num = document.querySelector("#roll")

num.addEventListener("click", function(){

    let leftBox = Math.floor(Math.random() * 6) + 1
    let rightBox = Math.floor(Math.random() * 6) + 1
    let leftHTML = document.querySelector("#left-box")
    let rightHTML = document.querySelector("#right-box")
    let resultHTML = document.querySelector("#result span")

    leftHTML.textContent = `${leftBox}`
    rightHTML.textContent = `${rightBox}`

    let total = leftBox + rightBox
    resultHTML.innerHTML = `${total}`

}
)
