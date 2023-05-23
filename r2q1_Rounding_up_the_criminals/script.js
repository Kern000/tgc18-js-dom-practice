// PLACE YOUR CODE HERE


let jailed = document.querySelectorAll(".a")

for (let s of jailed){

    s.style.backgroundColor = "red"

    let neededNames = s.textContent

    s.textContent = neededNames + "jailed";

}

let undercover = document.querySelectorAll("div.undercover.a")

for (let s of undercover)
s.style.backgroundColor = "yellow"








