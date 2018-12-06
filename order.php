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
    <div class="nav">
      <div class="navlinks">
        <ul>
          <li><a href="index.php">Home</a></li>
          <li class="active"><a href="#">Order</a></li>
          <li><a href="about.php">About</a></li>
          <li><a href="contact.php">Contact</a></li>
       
        </ul>
      </div>
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
      <button id="clear">Clear All</button>
      <form id="myCart" name="cart" method="get" action="checkout.php" onsubmit="return isValidForm();" >
      <div id="cartItems">
      </div>
      <hr>
      <div id="summary">
        <h3><b>Total:</b><span id="total">$0.00</span></h3>
      </div>
      <hr>
      <input type="submit" value="CHECKOUT"/>
      </form>
    </div>
  </div>

  <div class="footer">© copyright </div>

</body>

</html>