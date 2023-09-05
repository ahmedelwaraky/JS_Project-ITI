let productId = localStorage.getItem("productId");
let data = JSON.parse(localStorage.getItem("data"));

let details = data.filter((element) => {
  if (element.id == productId) {
    return element;
  }
})[0];
console.log(data);

function display() {
  let img = document.getElementById("img");
  let name = document.getElementById("name");
  let des = document.getElementById("des");
  let price = document.getElementById("price");
  let stars = document.getElementById("stars");

  for (let i = 0; i < details.star; i++) {
    stars.innerHTML += `<i class="fas fa-star fa-sm"></i>`;
  }
  img.setAttribute("src", `${details.img}`);
  name.innerHTML = `${details.name}`;
  des.innerHTML = `${details.des}`;
  price.innerHTML = `${details.price}`;
}
display();

// Get Size //
function Size(size) {
  details.size = size;
}
let sizeInput = document.getElementById("size");
sizeInput.addEventListener("change", () => {
  Size(sizeInput.value);
});

// Get count //
function countt(num) {
  details.count = num;
  console.log(details);
}

let count = document.getElementById("count");
count.addEventListener("change", () => {
  countt(count.value);
});

//Add To Cart
let btnAdd = document.getElementById("addCart");
btnAdd.setAttribute("onclick", `addToCart()`);
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) cart = [];
  manageCount(cart);
}

function manageCount(cart) {
  // let cart = JSON.parse(localStorage.getItem("cart"));

  let foundedItemIndex = cart.findIndex((c) => c.id == details.id);
  console.log(foundedItemIndex);

  if (foundedItemIndex !== -1) {
    console.log(cart[foundedItemIndex].cartCount);
    cart[foundedItemIndex].cartCount = `${
      Number(cart[foundedItemIndex].cartCount) + 1
    }`;
  } else cart.push(details);
  
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log(cart);
}
