document.querySelector("#book").addEventListener("click", function extractFormInfo() {
  
  let firstName = document.querySelector("#firstName").value
  let lastName = document.querySelector("#lastName").value
  let ticketClass = document.querySelector(".radio:checked").value
  
  let options = document.querySelectorAll(".checkbox")
  
  let result = []
  
  console.log(options)

  for (let x of options){
    if (x.checked == true){
      result.push(x.value)
    }
  }

  options = result

  let priceList = {

    "First Class" : 1200,
  "Business Class" : 750,
  "Economy Class" : 250

  }

  let extraCost = options.length * 10

  totalCost = priceList[ticketClass] + extraCost

  let summary = document.querySelector("#summary").innerHTML = `{
    "firstName" : ${firstName},
    "lastName" : ${lastName},
    "ticketClass" : ${ticketClass},
    "options" : ${options}
    "TotalCost" : ${totalCost}
    }
    `
  }
)









