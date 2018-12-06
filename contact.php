    <!DOCTYPE html>
    <html>

    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

    </head>

    <body>

    <div class="header">
        <h1 id="storeName">Stephanie Cafe</h1>
    </div>
        <div class="nav">
        <div class="navlinks">
            <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="order.php">Order</a></li>
            <li><a href="about.php">About</a></li>
            <li  class="active"><a href="contact.php">Contact</a></li>
        
            </ul>
        </div>
        </div>
    <div class="wrapper disable">
        

        <div class="container rounded">
        <h2 id="category-title">Contact Us</h2>
        <div class="container-whole shadowed">
            <div class="split">
                <h3>Links:</h3>
                <p><i class="fas fa-envelope"></i><strong class="contact">Email:</strong> csr@stephaniecafe.com</p>
                <p><i class="fab fa-facebook"></i><strong class="contact">Facebook:</strong> <a href="#">https://facebook.com/steph</a></p>
                <p><i class="fab fa-twitter-square"></i><strong class="contact">Twitter:</strong> <a href="#">https://twitter.com/steph</a></p>
                <p><i class="fab fa-instagram"></i><strong class="contact">Instagram:</strong> <a href="#">https://instagram.com/steph</a></p>
                <p><i class="fas fa-phone-square"></i><strong class="contact">Telephone:</strong> <a href="#">702-524-5321</a></p>
            <img src="img/map.jpg" alt="" class="display-img">
            </div>
            <div class="split">
                <h3>Send us a message!</h3>
                <form action="log/messageHandler.php">
                    
                <label for="name">Name:</label><br>
                <input type="text" name="name" id="name" required><br>
            
                <label for="email">Email:</label><br>
                <input type="email" name="email" id="email" required><br>
                
                <label for="message">Message:</label><br>
                <textarea name="message" id="message" cols="30" rows="10" required></textarea><br>
                
                <input type="submit" value="Send">
                </form>
            </div>

        </div>
        </div>


        
    </div>

    <div class="footer">© copyright </div>

    </body>

    </html>