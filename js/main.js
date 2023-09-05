/************************Data*********************** */
localStorage.setItem("data", JSON.stringify(data));
window.addEventListener("load", () => {
  displayData(data);
});

const starsDiv = document.getElementsByClassName("star")[0];
let inner = document.getElementById("inner");

function displayData(data) {
  inner.innerHTML = "";
  data.forEach((element) => {
    let starsHtml = "";
    for (let i = 0; i < Number(element.star); i++) {
      starsHtml += '<i class="fas fa-star" ></i>';
    }

    inner.innerHTML += `
    <div class="col-md-3 mb-5">
    <div class="pro" >
        <img onclick="goDetails('${element.id}')" src='${element.img}'>
        <div class="des">
            <span>${element.name}</span>
            <h5>${element.des}</h5>
            <div class="star">
                ${starsHtml}
            </div>
            <h4>${element.price}</h4>
        </div>
            <i class="fas fa-shopping-cart cart"></i
    </div>
</div>`;
  });
}
function goDetails(id) {
  window.open("datails.html", "_self");
  localStorage.setItem("productId", id);
  console.log(id);
}

/***********************Slider*************************** */
var img = document.getElementById("img");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var images = ["4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
var i = 0;

next.addEventListener("click", function () {
  if (i >= images.length - 1) i = -1;
  i++;
  img.setAttribute("src", "../image/slider/" + images[i]);
});

prev.addEventListener("click", function () {
  if (i <= 0) i = images.length;
  i--;
  img.setAttribute("src", "../image/slider/" + images[i]);
});
/************************Scroll up and down****Jquery Part***********************/

$("#btnUP").click(() => {
  $("html , body").animate({ scrollTop: 0 }, 100);
});

$("#btnDown").click(() => {
  $("html , body").animate({ scrollTop: 100000 }, 100);
});

$("#searchIcon").click(() => {
  $("#searchBar").css("display", "block");
  $("#colseSearchBar").css("display", "block");
});

$("#colseSearchBar").click(() => {
  $("#searchBar").fadeOut();
  $("#colseSearchBar").fadeOut();
});

// var close = document.getElementById("colseSearchBar")
// var searchBarr = document.getElementById("searchBar")

// close.addEventListener("click" , function(){
//   searchBarr.style.display = "none";
//   close.style.display = "none";
// })

//*****************************filter******************************* */
const filtersButton = document.querySelectorAll(".btn-warning");
function filterProducts(e) {
  let filterdData = [];
  console.log(e.target.innerText);
  data.forEach((p) => {
    if (p.des == e.target.innerText) filterdData.push(p);
  });
  displayData(filterdData);
}

//*****************************search******************************* */
let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", function (event) {
  console.log(event.target.value);

  searchProducts(event.target.value);
});

function searchProducts(searchTxt) {
  let foundedProducts = [];

  foundedProducts = data.filter((p) => p.name.includes(searchTxt));
  console.log(foundedProducts);

  displayData(foundedProducts);
}
