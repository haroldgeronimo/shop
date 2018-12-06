<?php
$file = file_get_contents('messages.json', FILE_USE_INCLUDE_PATH);
$msg = json_decode($file, true);
?>
<!DOCTYPE html>
<html>

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../main.css">


</head>

<body>

  <div class="header">
    <h1 id="storeName">Cafe</h1>
  </div>
    <div class="nav">
      <div class="navlinks">
        <ul>
          <li><a href="../index.php">Home</a></li>
          <li><a href="../order.php">Order</a></li>
          <li><a href="../about.php">About</a></li>
          <li class="active"><a href="../contact.php">Contact</a></li>

        </ul>
      </div>
    </div>
  <div class="wrapper disable">


    <div class="container rounded">
      <h2 id="category-title">Messages</h2>
      <?php
      
if (count($msg["messages"]) > 0) {
  $count = count($msg["messages"]) ;
  echo "$count message(s)";
    ?>
       <table>
         <tr><th>Name</th><th>Email</th><th>Message</th></tr>
         <?php

    foreach ($msg["messages"] as $message) {
      echo "<tr>";
        echo "<td>";
        echo $message['name'];
        echo "</td>";
        echo "<td>";
        echo $message['email'];
        echo "</td>";
        echo "<td>";
        echo $message['message'];
        echo "</td>";
        echo "</tr>";
    }
    ?>
       </table>
       <?php
}else{
  echo "<h3>No Messages</h3>";
}

?>
    </div>



  </div>

  <div class="footer">© copyright </div>

</body>

</html>