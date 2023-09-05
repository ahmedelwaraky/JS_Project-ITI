window.addEventListener("load", (event) => {
  event.preventDefault();
  getCart();
});

function getCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  displayProductsInCart(cart);
}

function displayProductsInCart(products) {
  let contain = document.getElementById("containCart");
  contain.innerHTML = "";

  products.forEach((product) => {
    contain.innerHTML += ` <div class="col-md-12">
<div class="row d-flex justify-content-evenly">
    <div class="col-md-2 ">
        <div class="">
            <img src="${product.img}">
        </div>
    </div>
    <div class="col-md-6">
        <div class="description d-flex justify-content-around">
            <div class="left mt-3">
                <h4 id="nameCart">${product.name}</h4>
                <h5 id="desCart">${product.des}</h5>
            </div>
            <div class="mid">
                <div class="up">
                    <button class="btn"><i class="fas fa-angle-left"></i></button>
                    <span id="countCart">${product.cartCount}</span>
                    <button class="btn"><i class="fas fa-angle-right"></i></button>
                    
                </div>
            </div>
            <div class="right mt-2">
                <h6 id="priceCart">${product.price}</h6>
                <h5 class="bookmark"><a id="saveCart" href="" class="text-danger fst-italic"><i class="far fa-bookmark"></i></a></h5 class="">
                <p><a href=""class="text-danger fst-italic" ><i class="fas fa-trash-alt" id=${product.id} onClick= "deleteItem(event)"></i></a></p>
            </div>
        </div>
    </div>
    <hr>
</div>
</div>`;
  });
}

let deleteCart = document.getElementById("deleteCart");
function deleteItem(event) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  event.preventDefault();
  console.log(event.target);
  let targetItem = event.target.getAttribute("id");

  console.log(cart);
  cart = cart.filter((c) => c.id != targetItem);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayProductsInCart(cart);
}
