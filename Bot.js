//Bot and all its subclasses here
var num_active_bots = 0;

function sendDataBot(form_data) //sendData with extra stuff cut out- I swear this can be done more efficiently because of repeated code...
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

var HelloBot = {
   botName: "Hello Bot",
  // on: false, //Checks to see if bot is active in case of multiple users.
   spam: function(interval, times)
   {
     /*if (!(this.on))
     {*/
      console.log("HelloBot enabled");
      num_active_bots++;
    //  this.on = true;
      var count = 0;
      var repeat = setInterval(function(){
        console.log(this.botName);
        sendDataBot('name='+this.botName+'&content='+"Hello World!  I'm a bot!");

        if (count < times)
        {
          count++;
        }
        else {
          //Disable bots
          console.log("HelloBot disabled");
      //    this.on = false;
    //      console.log("Ison: "+this.on);
          num_active_bots--;
          clearInterval(repeat);
        }
      }, interval)
    //}
   }
}
