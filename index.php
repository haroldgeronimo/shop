<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="main.css">
  
  <script src="main.js" async></script>

</head>

<body>

  <div class="header">
    <h1 id="storeName">Stephanie Cafe</h1>
  </div>

  <div class="wrapper">
    <div class="menu" id="menu">
    </div>

    <div class="main">
      <h2 id="category-title"> </h2>
        <div id="category">
            
        </div>
        
    </div>


    <div class="cart">
      <h2>Cart</h2>
      <p>Orders:</p>
      <div class="cart-item">
        <img src="img/noimage.jpg">
        <div class="cart-data">
            <h3 class="cart-name">Hello</h3>
            <input  class="cart-qunatity" type="number" name="quantity" min="1" max="100" value="1">
            <button class="cart-remove">Remove</button>
        </div>
    
       </div>
       <hr>
    </div>
  </div>

  <div class="footer">© copyright </div>

</body>

</html>