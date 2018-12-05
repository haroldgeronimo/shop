var mainMenu;
var items = [];
var subtotal;
var total;
var deliveryFee = 2;
window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "products.json");
    xhr.addEventListener('load', processJSON);
    xhr.send();
}
function processJSON(event) {
    var json = this.responseText;
    var obj = JSON.parse(json);
    mainMenu = obj;
    init();
}
function init(){
    var orderData = window.location.search;
    orderData = orderData.slice(1, orderData.length);
    orderData = orderData.replace(/[+]/g, " ");
    orderData = decodeURIComponent(orderData);
    var orderFields = orderData.split(/[=,&]+/);
    var i = 0;
    for (let index = 0; index < orderFields.length; index+=4) {
        const id = orderFields[index+1];
        const quan = orderFields[index+3];
        const item = {
            id:id,
            quantity:quan
        }
        items[i] = item;
        i++;
    }
    
    console.log(items);
    showitems();
}
function showitems(){
    var table = document.getElementById("itemTable");
    subtotal = 0;
    items.forEach(element=>{
        var id = element.id.split("-");
        var prod = mainMenu[id[0]][id[1]];
        var row = document.createElement("tr");

        var nametxt = document.createElement("td");
        nametxt.innerHTML = prod.name;
        row.appendChild(nametxt);

        var pricetxt = document.createElement("td");
        pricetxt.setAttribute("class","currency");
        var price = parseFloat(prod.price);
        pricetxt.innerHTML = "$"+ prod.price.toFixed(2);
        row.appendChild(pricetxt);

        var quantxt = document.createElement("td");
        var quan = parseInt(element.quantity);
        quantxt.innerHTML = "X "+ quan;
        row.appendChild(quantxt);
        
        var subtxt = document.createElement("td");
        subtxt.setAttribute("class","currency");
        var sub = price * quan;
        subtxt.innerHTML = "$"+  sub.toFixed(2);
        row.appendChild(subtxt);    
        subtotal += sub;
        table.appendChild(row);


    });

    document.getElementById("subtotal").innerHTML = "$"+  subtotal.toFixed(2);
    document.getElementById("delivery").innerHTML = "$"+  deliveryFee.toFixed(2);
    total = subtotal + deliveryFee;
    document.getElementById("total").innerHTML = "$"+  total.toFixed(2);
    
}