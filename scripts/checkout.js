// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = JSON.parse(localStorage.getItem("amount"));
let display_amount = document.getElementById("paisa");
display_amount.innerText = amount;

let arr = [];
let movies = JSON.parse(localStorage.getItem("movie"));
arr.push(movies);
let movie_box = document.getElementById("movie");

arr.map(function (el) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  let p = document.createElement("h2");
  p.innerText = el.Title;
  let img = document.createElement("img");
  img.src = el.Poster;
  box.append(p, img);
  movie_box.append(box);
});

function submitFn() {
  let count = document.getElementById("number_of_seats").value;
  let total = count * 100;
  if (total > amount) {
    alert("Insufficient Balance !");
  } else {
    amount = amount - total;
    localStorage.setItem("amount", JSON.stringify(amount));
    display_amount.innerText = amount;
    alert("Booking Successful!");
  }
}

function checkoutfunc() {
  window.location.href = "index.html";
}
