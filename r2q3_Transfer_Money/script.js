// PLACE YOUR CODE HERE

let topUp = document.querySelector("#topup10")
let transferWallet = document.querySelector("#transfer10ToWallet")
let transferAccount = document.querySelector("#transfer10ToAccount")
let account = document.querySelector("#account")
let wallet = document.querySelector("#wallet")
let spend = document.querySelector("#spend")
let walletBalanceB4click = parseInt(wallet.innerHTML)
let accountBalanceB4Click = parseInt(account.innerHTML);

topUp.addEventListener('click', function() {

    let sum = parseInt(account.innerHTML) + 10
    account.innerHTML = `${sum}`

}
)

transferWallet.addEventListener('click', function() {

    if (parseInt(account.innerHTML) >= 10){
    
        let accountbal = parseInt(account.innerHTML) - 10
        account.innerHTML = `${accountbal}`

        let walletbal = parseInt(wallet.innerHTML) + 10
        wallet.innerHTML = `${walletbal}`
    }
}
)

transferAccount.addEventListener('click', function() {

    if (parseInt(wallet.innerHTML) >= 10){
 
        let accountbal = parseInt(account.innerHTML) + 10
        account.innerHTML = `${accountbal}`

        let walletbal = parseInt(wallet.innerHTML) - 10
        wallet.innerHTML = `${walletbal}`

    }
}
)


spend.addEventListener('click', function() {

    let spending = document.querySelector("#amount").value

    if ((parseInt(wallet.innerHTML)) >= parseInt(spending)) {

        let walletbal = parseInt(wallet.innerHTML) - parseInt(spending)
        wallet.innerHTML = `${walletbal}`

    }
}
)
