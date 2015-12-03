<?php
  header('Content-Type: application/json; charset=utf-8');

  if (isset($_POST['name']))
  {
   $string = htmlspecialchars($_POST['name']);

   $json_array = json_encode(array(
     name => $string
   ));

   echo $json_array;
   exit();
  }
?>
