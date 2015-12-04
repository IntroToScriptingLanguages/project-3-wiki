<?php
  header('Content-Type: application/json; charset=utf-8');

  if (isset($_POST['name']))
  {
   $string = htmlspecialchars($_POST['name']);
   $content = htmlspecialchars($_POST['content']);
   $json_array = json_encode(array(
     'name' => $string,
     'content' => $content,
   ));

   echo $json_array;
   exit();
  }
?>
