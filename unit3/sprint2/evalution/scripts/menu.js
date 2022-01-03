let item = JSON.parse(localStorage.getItem("item")) || [];

cartDisplay(item);

async function menu() {
  try {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    );

    let response = await data.json();

    // console.log(data);
    console.log(response.meals);
    let meals_arr = response.meals;
    menuItem(meals_arr);
  } catch (err) {
    console.log(err);
  }
}

menu();

// showing the menu on the screen

function menuItem(arr) {
  // menu div
  let div = document.getElementById("menu");

  arr.forEach(function (element) {
    let cont = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.strMealThumb;

    let name = document.createElement("p");
    name.innerText = element.strMeal;

    let price = document.createElement("p");
    let num = Math.floor(Math.random() * (500-100) + 100) ;
    price.innerText = num;

    let button = document.createElement("button");
    button.innerText = "Add to cart";
    button.addEventListener("click", function () {
      addToCart(element, num);
    });

    cont.append(img, name, button, price);

    div.append(cont);
  });
}

// for adding into the cart

function addToCart(elem, price) {
  item = JSON.parse(localStorage.getItem("item")) || [];

  console.log(elem, price);

  let obj = {
    name: elem.strMeal,
    img: elem.strMealThumb,
    price: price,
  };

  console.log(obj);

  item.push(obj);

  cartDisplay(item);

  localStorage.setItem("item", JSON.stringify(item));
}

function cartDisplay(arr) {
  let cart = document.getElementById("cart");

  cart.innerText = `Go To Cart: ${arr.length}`;
}

// strMeal; --> name
// strMealThumb; --> img
