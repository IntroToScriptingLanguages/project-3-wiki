<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>Okami's Wiki</title>
</head>
<body>
    <style>
      form {
        border: 10px solid black;
        margin: 20px;
        padding: 10px;
      }

      textarea{
        width: 100%;
        height: 30%; /* Change this if we add more input */
      }

      #save{
        height: 10%; /* Change this if we add more input */
      }

    </style>
    <script>
      $('#content').click(function() { //What does this do?  There is no element with id "content"!
        $('form').removeClass('hidden'); //Makes the form visible
        $('#content').addClass('hidden'); //Makes whatever has id "content" invisible
      }

      $('#data').submit(function(event) {

        event.preventDefault();
        alert("Hi");
         var data = $('#data'); //The form data we're submitting
         $.ajax({
           url: 'wiki.php', //We're submitting it to wiki.php
           data: data, //The data we're sending it
           dataType: 'json', //Sending it as a JSON
           type: 'POST', //via POST
           async: false, //Not asynchronous...
           success: function(data){
             alert("Success");
           }
         })
      })
    );
    </script>
    <?php

      if (file_exists('wiki.txt')) {
        $content = file_get_contents('wiki.txt'); //Reads content from wiki.txt and puts it into $content
      }
      else if (isset($_GET['content'])) //If there's stuff in ?content=
      {
         $content = $_GET['content']; //Assign $content to that stuff
         file_put_contents('wiki.txt', $content); //Then slaps $contents into wiki.txt
      }
      else {
        $content = '(no content)'; //No content by default if wiki.txt is missing
      }

      $s_content = htmlentities($content); //Escape code in text file to negate possible attack vector

    ?>
     <form id="data" class="hidden" action="wiki.php">
       <textarea name="content" rows="8" cols="80"><?php echo $safe_content; ?></textarea>
       <textarea name="content2" rows="8" cols="80"><?php echo $safe_content; ?></textarea>
       <textarea name="content3" rows="8" cols="80"><?php echo $safe_content; ?></textarea>
       <input id="save" type="submit" value="Save">
     </form>
</body>
