<?php
 if( $_GET["name"] && $_GET["email"] && $_GET["message"]) {
     $name = $_GET["name"];
     $email = $_GET["email"];
     $message = $_GET["message"];

    $file = file_get_contents('messages.json', FILE_USE_INCLUDE_PATH);
    $msg = json_decode($file,true);
    $message = [
        'name' => $name,
        'email' =>  $email,
        'message' =>  $message
    ];
    array_push($msg['messages'],$message);
    print_r($msg['messages']);
    $json = json_encode($msg);

    $myfile = fopen("messages.json", "w") or die("Unable to open file!");
    fwrite($myfile, $json);
    fclose($myfile);
 }


header("location:../index.php");
