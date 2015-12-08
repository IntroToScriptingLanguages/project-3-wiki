//Contains all data for sending and receiving data between JS and PHP files (and PHP files and the database)
//Performs all AJAX calls
var active_bot_limit = 5; //Max number of active spambots

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

        console.log("Number of active bots: "+num_active_bots);
        //Add spambot
        if (num_active_bots < active_bot_limit && Math.random() * 100 < 40) //40% chance of spambot after each post.
        {
          var spambot_type = Math.random() * 100;

          if (spambot_type < 10) //Hello Bot
          {
             var interval = parseInt(3000 + Math.random() * 2999, 10);
             var time = parseInt(3 + Math.random() * 5, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             HelloBot.spam(interval, time);
          }
          else if (spambot_type < 20) //Delay Bot
          {
             var interval = parseInt(10000 + Math.random() * 19999, 10);
             var time = parseInt(3 + Math.random() * 5, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             DelayBot.spam(interval, time);
          }

          else if (spambot_type < 30) //Ad Bot
          {
             var interval = parseInt(5000 + Math.random() * 4999, 10);
             var time = parseInt(3 + Math.random() * 5, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             AdBot.spam(interval, time);
          }
          else if (spambot_type < 40) //Name Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(1500 + Math.random() * 1499, 10);
             var time = parseInt(5 + Math.random() * 10, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             NameBot.syncData(form_name, form_content);
             NameBot.spam(interval, time);
          }
          else if (spambot_type < 50) //Poop Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(7500 + Math.random() * 4999, 10);
             var time = parseInt(1 + Math.random() * 4, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             PoopBot.syncData(form_name, form_content);
             PoopBot.spam(interval, time);
          }
          else if (spambot_type < 60) //Cap Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(2500 + Math.random() * 4999, 10);
             var time = parseInt(3 + Math.random() * 3, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             CapBot.syncData(form_name, form_content);
             CapBot.spam(interval, time);
          }
          else if (spambot_type < 70) //Echo Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(10000 + Math.random() * 999, 10);
             var time = parseInt(5 + Math.random() * 10, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             EchoBot.syncData(form_name, form_content);
             EchoBot.spam(interval, time);
          }
          else if (spambot_type < 80) //Ghost Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(1000 + Math.random() * 999, 10);
             var time = parseInt(3 + Math.random() * 3, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             GhostBot.syncData(form_name, form_content);
             GhostBot.spam(interval, time);
          }
          else if (spambot_type < 90) //Pokemon Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(1000 + Math.random() * 999, 10);
             var time = parseInt(9 + Math.random() * 3, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             PokemonBot.syncData(form_name, form_content);
             PokemonBot.spam(interval, time);
          }
          else if (spambot_type < 100) //Bye Bot
          {
             var new_form_data = parseFormData(form_data);
             var form_name = new_form_data[0];
             var form_content = new_form_data[1];

             var interval = parseInt(10000 + Math.random() * 9999, 10);
             var time = parseInt(1 + Math.random() * 2, 10);
             console.log(interval+", "+time);  //Worried that Bot.js comes after ajax.js, Bot calls "sendData"
             ByeBot.spam(interval, time);
          }


        }

}

function parseFormData(formData)
{
  var data_split = formData.split("&");
  var n = data_split[0].split("=")[1];
  var c = data_split[1].split("=")[1];
  return [n, c];
}



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
