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

var HelloBot = { //Spams "Hello after a given time interval"
   botName: "Hello Bot",
   on: false, //Checks to see if bot is active in case of multiple users.
   spam: function(interval, times)
   {
     if (!(this.on))
      num_active_bots++;
      this.on = true;
      var count = 0;
      var self = this;
      var repeat = setInterval(function(){
        sendDataBot('name='+self.botName+'&content='+"Hello World!  I'm a bot!");
        if (count < times)
        {
          count++;
        }
        else {
          //Disable bots
          self.on = false;
          num_active_bots--;
          clearInterval(repeat);
        }
      }, interval)
     }
   }

   var DelayBot = { //Times unused, waits an interval then posts a message
      botName: "Delay",
      on: false, //Checks to see if bot is active in case of multiple users.
      spam: function(interval, times)
      {
        if (!(this.on))
         num_active_bots++;
         this.on = true;
         var count = 0;
         var self = this;

         var messages =[
        "YOLO!",
        "Join the robot revolution!  Only 9999 payments of $0.01!  Visit adware.com for more details!",
        "I see dead people",
        "I have to poop!  I have to poop!  I have to poop!  I have to poop!",
        "Touch me!",
        "Don't eat the cards!",
        "420 Blaziken!",
        "It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house! It's a monster house!",
        "DON'T READ THIS OR YOU'LL DIE!",
        "In 1924, a man was viciously murdered by seven packs of wolves, a rogue Delta Force squad, and a Japanese schoolgirl.  If you don't copy this message and repost it five times, his ghost will pop up on your computer screen when you get home!  Its SOOPER SPOOKY!"]

         self.botName += parseInt(Math.random() * 99, 10);
         var content = messages[parseInt(Math.random() * 10, 10)];
         var repeat = setTimeout(function(){
           sendDataBot('name='+self.botName+'&content='+content);
           if (count < times)
           {
             count++;
           }
           else {
             //Disable bots
             self.on = false;
             num_active_bots--;
           }
         }, interval)
        }
      }
