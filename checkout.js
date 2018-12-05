var mainMenu;

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

}