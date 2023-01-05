// Store the wallet amount to your local storage with key "amount"
let display_amount=document.getElementById("paisa")

let amount=JSON.parse(localStorage.getItem("amount"))
display_amount.innerText=amount

function bookFn(){
window.location.href='movies.html'
}

let total=0 || amount
function walletFn(){
let enterd_amount=document.getElementById("amount").value

total+=Number(enterd_amount)

display_amount.innerText=total

localStorage.setItem("amount",JSON.stringify(total))
}

