// PLACE YOUR CODE HERE
let x = document.querySelectorAll('.emphasis')

for (let i of x){

    i.style.fontFamily = "Verdana"
}


let y = document.querySelectorAll('li.finished')

for (let i of y){

    i.style.textDecoration = "line-through"
}

let z = document.querySelectorAll('ul#low-priority li.todo')

for (let i of z){

    i.style.backgroundColor = "blue"
}

let a = document.querySelectorAll('.alert')

for (let i of a){

    i.style.color = "red"
}




