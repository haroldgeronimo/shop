
var mainMenu;

function processJSON(event) {
    var json = this.responseText;
    var obj = JSON.parse(json);
    mainMenu = obj;
    createLinks(obj);
    loadMenu(Object.keys(mainMenu)[0]);
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
    categoryMenu.forEach(element => {
       var item =  menuItem(element,category);
       item.addEventListener("click",function(){AddToCart(category+'-'+element.id)});
       main.appendChild(item);
    });
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
    if(name.length > 15){
        name = name.substr(0,15);
        name = name + "..."
    }
    title.innerHTML = name;
    item.appendChild(title);

    var p = document.createElement("p");
    var desc = element.description
    p.setAttribute("class","item-desc");
    if(desc.length > 60){
        desc = desc.substr(0,60);
        desc = desc + "..."
    }
    p.innerHTML =  desc;
    item.appendChild(p);

    var strong = document.createElement("strong");
    strong.setAttribute("class","item-price");
    strong.innerHTML = "$" + element.price.toFixed(2);
    item.appendChild(strong);

    return item;
}

function AddToCart(id){
    console.log(id);
}