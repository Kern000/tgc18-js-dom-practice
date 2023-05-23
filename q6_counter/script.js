let count = 0;

let increaseBtn = document.getElementById('increment')
let decreaseBtn = document.getElementById('decrement')
let resetBtn = document.getElementById('reset')
let box1 = document.getElementById('box')

increaseBtn.addEventListener('click', function() {

    if (count < 10) {

        count++

        document.querySelector("#box").innerHTML = count

        if (count % 2 == 0 || count == 0){
            box1.style.backgroundColor = "red"
        } else {
            box1.style.backgroundColor = "green"
        }
    }
})

decreaseBtn.addEventListener('click', function() {

    if (count > 0) {

        count--

        document.querySelector("#box").innerHTML = count

        if (count % 2 == 0 || count == 0){
            box1.style.backgroundColor = "red"
        } else {
            box1.style.backgroundColor = "green"
        }
    }
})


resetBtn.addEventListener('click', function() {

    count = 0

    document.querySelector("#box").innerHTML = count

    box1.style.backgroundColor = "red"

})
