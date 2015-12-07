//Contains all data for sending and receiving data between JS and PHP files (and PHP files and the database)
//Performs all AJAX calls
function sendData(form_data)
{
         $.ajax({
           url: "wiki.php",
           data: form_data, //The data we're sending it
           type: 'POST', //via GET
           success: function(d){ //Add code that changes content1-3 here
             var result = d.result;

             if (d.succeed == "true")
             {
               $('#debug').html("Success! "+result);
             }
             else {
               $('#debug').html("Failed! "+result);
             }
           },
           error: function(d, stat){
             console.log(d);
             $('#debug').html("Error "+d+' '+stat);
           }
        });
}

  setInterval(function(){ retrieveData(); }, 1500);

//Retrieves all data via AJAX from database and throws them into an unordered list.
function retrieveData()
{
  $.ajax({
    url: "retrieve.php",
    type: 'POST', //via GET
    success: function(d){ //Add code that changes content1-3 here
      var result = d.result;

      if (d.succeed == "true")
      {
        $('#debug').html("Success! "+result);

        //Empty ordered list
        $('#chatty').empty();

        //Retrieve data here
        var num_rows = (Object.keys(d).length) - 2; //The number of chatboxes (rows) returned! -2 to take into account keys "result" and "success"
        $.each(d, function(i, v){
          if (i != 'result' && i != 'succeed')
          {
            var row = v;
            //Create new divs for chat rooms here
            var chatbox = $.parseJSON(row); //'id' => the unique id, 'timestamp' => the timestamp string, 'name' => the user submiting it, 'content' => the content
            $('#chatty').append(
               $('<li>').append(
                 $('<div>').attr('class', 'name_box').html('<b>'+chatbox.name+'</b> <i>submitted at: '+chatbox.timestamp+'</i>')
               ).append(
                 $('<div>').attr('class', 'content_box').html(chatbox.content)
               )
            )
          }
        });


      }
      else {
        $('#debug').html("Failed! "+result);
      }
    },
    error: function(d, stat){
      console.log(d);
      $('#debug').html("Error "+d+' '+stat);
     }
 });

}
