<?php
  header('Content-Type: application/json; charset=utf-8');

  $dsn = '127.0.0.1';
  $username = 'zmzhang';
  $password = 'LDkyeY"323';
  $database = 'zmzhang';

   //Create SQL link
  $mysqli = new mysqli($dsn, $username, $password, $database);

  //Checks to see if it worked!
  if ($mysql->connect_errno > 0){
    die('Cannot connect to database: ' . $mysql->connect_error);
  }

  //
  $sql_query = "
   SELECT *
   FROM chatty
  ";

   //Insert values into database
   if ($output = $mysql->query($sql_query))
   {

     $array = array('result' => "Input succeeded! ", 'succeed' => "true");
     while ($row = $output->fetch_assoc())
     {
        $row_as_json = json_encode($row);
        array_push($array, $row_as_json);
     }
      echo json_encode($array); //Array will contain "result" and "succeed" keys, then numeric keys associated with a JSON object associated to a row.
   }
   else
   {
      echo json_encode(array('result' => "Error: could not complete query storing data into database. " . $mysql->error, 'succeed' => "false" ) );
   }

 ?>
