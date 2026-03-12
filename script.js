function showVegetables() {
    document.getElementById("vegSection").style.display = "block";
    window.scrollTo(0, document.body.scrollHeight);
}

   let cart = [];
let prices = {
  Tomato: 20,
  Potato: 30,
  Onion: 25,
  Brinjal: 35,
  Okra: 30,
  "Bottle Gourd": 40,
  "Ridge Gourd": 45,
  Bittergourd : 15,
  Pampkin: 50,
  Carrot: 20
};

function orderItem(btn, item) {

  if (cart.includes(item)) {
    cart = cart.filter(i => i !== item);
    btn.innerText = "ORDER";
  } else {
    cart.push(item);
    btn.innerText = "REMOVE";
  }

  updateCart();
}

function updateCart() {

  let orderList = document.getElementById("orderList");
  let total = 0;

  orderList.innerHTML = "";

  cart.forEach(item => {

    let li = document.createElement("li");
    li.innerText = item + " - ₹" + prices[item];
    orderList.appendChild(li);

    total += prices[item];

  });

  document.getElementById("grandTotal").innerText =
    "Grand Total: ₹" + total;
}
document.getElementById("confirmBtn").addEventListener("click", function() {

  document.getElementById("orderMessage").innerHTML =
  "🌾 Thank you! Order received.<br>Farmer will contact you soon.";

});
function sendWhatsAppOrder() {

  let message =
  "🌾 New Order Received\n" +
  "Please check and prepare vegetables.\n" +
  "Thank You!";

  let phoneNumber = "919052800248";

  let url =
  "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}

