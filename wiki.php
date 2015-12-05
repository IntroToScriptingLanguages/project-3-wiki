<?php
  header('Content-Type: application/json; charset=utf-8');

  if (isset($_POST['name']) && isset($_POST['content']))
  {

   //MySQL login data:
   $dsn = '127.0.0.1';
   $username = 'zmzhang';
   $password = 'LDkyeY"323';
   $database = 'zmzhang';
   $string = htmlspecialchars($_POST['name']);
   $content = htmlspecialchars($_POST['content']);
   $json_array = json_encode(array(
     'name' => $string,
     'content' => $content,
   ));

   //Create SQL link
   $mysql = new mysqli($dsn, $username, $password, $database);

   //Checks to see if it worked!
   if ($mysql->connect_errno > 0){
     die('Cannot connect to database: ' . $mysql->connect_error);
   }

   //What we're throwing into the database:
   $timestamp = date('g:i:s M j o');
   $name = htmlspecialchars($_POST['name']);
   $content = htmlspecialchars($_POST['content']);

   //Our MySQL commands
   $sql_query = "
    INSERT INTO chatty
    (timestamp, name, content)
    VALUES ($timestamp, $name, $content)
   ";

   print_r($sql_query);
   //Insert values into database
   if ($mysql->query($sql_query) > 0)
   {
      echo json_encode(array('result' => "Input succeeded! ", 'succeed' => "true") );
   }
   else
   {
      echo json_encode(array('result' => "Error: could not complete query storing data into database. " . $mysql->error, 'succeed' => "false" ) );
   }

   $mysql->close();
  }
?>
