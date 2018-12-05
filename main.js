
var mainMenu;
var total = 0;
function processJSON(event) {
    var json = this.responseText;
    var obj = JSON.parse(json);
    mainMenu = obj;
    init(obj);
}
function init(obj){

    createLinks(obj);
    loadMenu(Object.keys(mainMenu)[0]);
    document.getElementById("clear").addEventListener("click",function(){
        var cart = document.getElementById("cartItems");
        while (cart.firstChild) {
            cart.removeChild(cart.firstChild);
        }
        calculateTotals();
    });
}

window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json");
    xhr.addEventListener('load', processJSON);
    xhr.send();
}

function createLinks(menu){
    var linkMenu = document.getElementById("menu");
    for(let key in menu){
        (function(){
        var link = document.createElement("a");
        link.addEventListener("click",function(){loadMenu(key);})
        link.innerHTML = key;
        console.log(key);
        linkMenu.appendChild(link);
        }());
    }
}

function loadMenu(category){
    var categoryMenu = mainMenu[category];
    document.getElementById("category-title").innerHTML = category;
    var main = document.getElementById("category");
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    var i = 0;
    categoryMenu.forEach(element => {
        element.id = i;
       var item =  menuItem(element,category);
       item.addEventListener("click",function(){AddToCart(category+'-'+element.id)});
       main.appendChild(item);
       i++;
    });
}


function AddToCart(id){
    //check if already exist in cart
    var cartItems = document.getElementById("cartItems");
    var flag = false;
    cartItems.childNodes.forEach(element => {
        if(element.id == id){
           var quantityElement = element.getElementsByClassName("cart-quantity")[0];
           var quantity = parseInt(quantityElement.value) + 1;
           quantityElement.value = quantity;
            flag = true;
            calculateTotals();
        }
    });
    if(flag) return;
    var item = cartItem(id);
    cartItems.appendChild(item);
    calculateTotals();
}

function menuItem(element, category){
    var item = document.createElement("div");
    item.setAttribute("class","item");
    item.setAttribute("id",category+"-"+element.id);

    var img = document.createElement("img");
    img.setAttribute("class","item-image");
    img.setAttribute("src","img/"+element.image);
    item.appendChild(img);

    var title = document.createElement("h3");
    title.setAttribute("class","item-name");
    var name = element.name;
    title.innerHTML = name;
    item.appendChild(title);

    var p = document.createElement("p");
    var desc = element.description
    p.setAttribute("class","item-desc");
    p.innerHTML =  desc;
    item.appendChild(p);

    var strong = document.createElement("strong");
    strong.setAttribute("class","item-price");
    strong.innerHTML = "$" + element.price.toFixed(2);
    item.appendChild(strong);

    return item;
}

function cartItem(id){
    var product = id.split("-");
    var element = mainMenu[product[0]][product[1]];
    var item = document.createElement("div");
    item.setAttribute("class","cart-item");
    item.id=id;

    var img = document.createElement("img");
    img.setAttribute("src","img/"+element.image);
    item.appendChild(img);

    var data = document.createElement("div");
    data.setAttribute("class","cart-item");
    item.appendChild(data);

    var name = document.createElement("h3");
    name.setAttribute("class","cart-name");
    name.innerHTML = element.name;
    data.appendChild(name);
    var orig = document.createElement("p");
    orig.setAttribute("class","cart-original");
    orig.innerHTML = "@$"  + element.price.toFixed(2);
    data.appendChild(orig);

    var productID = document.createElement("input");
    productID.setAttribute("class","cart-id");
    productID.setAttribute("type","hidden");
    productID.setAttribute("name","id");
    productID.setAttribute("value",id);
    data.appendChild(productID);

    var quantity = document.createElement("input");
    quantity.setAttribute("class","cart-quantity");
    quantity.setAttribute("type","number");
    quantity.setAttribute("name","quantity");
    quantity.setAttribute("min","1");
    quantity.setAttribute("max","100");
    quantity.setAttribute("value","1");
    quantity.addEventListener("change",function(){calculateTotals();});
   // quantity.addEventListener("blur",function(){if((!quantity.value)||quantity.value <= 0){quantity.value=1;calculateTotals();}});
    quantity.addEventListener("input",function(){if((!quantity.value)||quantity.value <= 0){quantity.value=1;calculateTotals();}});
    data.appendChild(quantity);

    var remove = document.createElement("button");
    remove.setAttribute("class","cart-remove");
    remove.innerHTML = "Remove";
    remove.addEventListener("click",function(){removeItem(item);});
    data.appendChild(remove);

    var price = document.createElement("p");
    price.setAttribute("class","cart-price");
    price.innerHTML = element.price;
    data.appendChild(price);

    var hr = document.createElement("hr");
    item.appendChild(hr);

    return item;
}

function removeItem(item){
    item.parentNode.removeChild(item);
    //update totals
    calculateTotals();
}

function calculatePrice(item){
    console.log(item.id);
var id = item.id.split("-");
var product = mainMenu[id[0]][id[1]];
var quantity = parseInt(item.getElementsByClassName("cart-quantity")[0].value);
var subtotal = quantity * parseFloat(product.price);
item.getElementsByClassName("cart-price")[0].innerHTML = "Sub:$"  + subtotal.toFixed(2);
return subtotal;
}

function calculateTotals(){
    var cart = document.getElementById("cartItems");
    var children = cart.childNodes;
    console.log(children);
    total = 0;
    children.forEach(function(element){
        if(element.id != undefined)
        total +=  calculatePrice(element);
    });
    document.getElementById("total").innerHTML= "$"  + total.toFixed(2);
}

function isValidForm(){
    if(total > 0)
    return true;
    else
    return false;
}
/*
<div class="cart-item">
<img src="img/noimage.jpg">
<div class="cart-data">
    <h3 class="cart-name">Hello</h3>
    <input  class="cart-qunatity" type="number" name="quantity" min="1" max="100" value="1">
    <button class="cart-remove">Remove</button>
</div>

</div>
*/