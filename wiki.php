<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>Okami's Wiki</title>
</head>
<body>
    <?php

    if (file_exists('wiki.txt')) {
      $content = file_get_contents('wiki.txt'); //Reads content from wiki.txt and puts it into $content
    }
    else {
      $content = '(no content)'; //No content by default if wiki.txt is missing
    }

    if (isset($_GET['content'])) //If there's stuff in ?content=
    {
       $content = $_GET['content']; //Assign $content to that stuff
       file_put_contents('wiki.txt', $content); //Then slaps $contents into wiki.txt
    }

    $s_content = htmlentities($content); //Escape code in text file to negate possible attack vector
    echo $s_content;

     ?>
     <form action="wiki.php">
       <textarea name="content" rows="8" cols="80"></textarea>
       <input type="submit" value="Save">
     </form>
</body>
