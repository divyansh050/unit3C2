let item = JSON.parse(localStorage.getItem('item')) || [] 


// for display the products
displayProduct(item)



function displayProduct(arr){

    // main div
let div = document.getElementById('main')

div.innerHTML = null


  arr.forEach(function (element,index) {
    let cont = document.createElement("div");

    let img = document.createElement("img");
    img.src = element.img;

    let name = document.createElement("p");
    name.innerText = element.name;

    let price = document.createElement("p");
    price.innerText =element.price;

    let button = document.createElement("button");
    button.innerText = "Remove form cart";
    button.addEventListener("click", function () {
      removeFromCart(index);
    });

    cont.append(img, name, button, price);

    div.append(cont);
  });
  cartDisplay(item);

}


// for removing from the cart

function removeFromCart(index) {
  
item.splice(index,1)


localStorage.setItem("item", JSON.stringify(item));
displayProduct(item)
  cartDisplay(item);

}



// HOF for total cart value
function cartDisplay(arr) {
  let cart = document.getElementById("cart");
  let total = arr.reduce(function (ac,av){
return ac + av.price
  },0)

  cart.innerText = `Cart Items value: ${total}`;
}