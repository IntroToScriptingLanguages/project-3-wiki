<?php
  header('Content-Type: application/json; charset=utf-8');

  if (isset($_POST['name']) && isset($_POST['content']))
  {
    $delete_database = 120;  //Delete all data in database after it hits this number of posts.
   //MySQL login data:
   $dsn = '127.0.0.1';
   $username = 'zmzhang';
   $password = 'LDkyeY"323';
   $database = 'zmzhang';
   $string = htmlspecialchars($_POST['name']);
   $content = htmlspecialchars($_POST['content']);

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

   //Check to see if database should be cleansed first
   $check_size_query = "
    SELECT *
    FROM chatty
   ";

   //Escape strings
   $name = $mysql->real_escape_string($name);
   $content = $mysql->real_escape_string($content);

   //Checks size of database and compares it to "delete_database"
   if ($check_size_result = $mysql->query($check_size_query))
   {
     $check_size_count = $check_size_result->num_rows;

     //If size is greater than "delete_database" delete all rows in chatty
     if ($check_size_count > ($delete_database-1)) //Need to account by off-by-0
     {
       $delete_query = "
        DELETE FROM chatty
        ";

        if ($mysql->query($delete_query) == 0)
        {
             echo json_encode(array('result' => "Error: could not successfully purge database. " . $mysql->error, 'succeed' => "false" ) );
        }
      }
   }
   else
   {
      echo json_encode(array('result' => "Error: could not access database. " . $mysql->error, 'succeed' => "false" ) );
   }

   //Our MySQL commands
   $sql_query = "
    INSERT INTO chatty
    (timestamp, name, content)
    VALUES ('$timestamp', '$name', '$content')
   ";
   //Insert values into database
   if ($mysql->query($sql_query) > 0)
   {
      echo json_encode(array('result' => "Input succeeded! ", 'succeed' => "true") );
   }
   else
   {
      echo json_encode(array('result' => "Error: could not complete query storing data into database. " . $mysql->error, 'succeed' => "false" ) );
   }

   //Close database
   $mysql->close();
  }
?>
