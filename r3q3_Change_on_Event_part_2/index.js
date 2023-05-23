box = document.querySelectorAll(".box")

box.forEach(function(singleBox) {
    
    singleBox.addEventListener("mouseover", mouseEvent)
    singleBox.addEventListener("mouseout", mouseEvent)

});

function mouseEvent (event) {
    
    if (event.type === "mouseover") {

        event.target.style.backgroundColor = "red"
    
    } else if (event.type === "mouseout") {

        event.target.style.backgroundColor = "white"

    }
}