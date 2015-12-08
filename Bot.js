//Bot and all its subclasses here

var HelloBot = { //Spams "Hello after a given time interval"
   botName: "Hello Bot",
   on: false, //Checks to see if bot is active in case of multiple users.
   spam: function(interval, times)
   {
      num_active_bots++;
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
         num_active_bots++;
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
             num_active_bots--;
           }
         }, interval)
      }
    }


      var AdBot = { //Spams video game advertisements after a given time interval Times unused
         botName: "Ad Bot",
         on: false, //Checks to see if bot is active in case of multiple users.
         spam: function(interval, times)
         {
            num_active_bots++;
            var count = 0;
            var self = this;

            var names = [
              "Fallout 4", "Starcraft 2: Legacy of the Void", "Pokemon Super Mystery Dungeon", "Assassin's Creed: Syndicate"
            ]

            var messages = [
              ["Play Fallout 4 today!", "Mutants! Power armor! Synths!  Play Fallout 4!", "Buy Fallout 4 on Amazon for $60!"],
              ["Command your Protoss army!  Buy Starcraft II today!", "Latest expansion pack for Starcraft II released!  Buy it today!", "Build bases! Mine minerals! Crush other peoples' bases with nukes and crap! Play Starcraft II!"],
              ["Play an extremely underrated but incredibly in-depth Pokemon spinoff today!", "Recruit all 720 Pokemon today! Buy Pokemon Super Mystery Dungeon for $35!", "720 pokemon! 101 dungeons! 22 chapters! 20 starters! No fear! Play Pokemon Super Mystery Dungeon today!"],
              ["Assassinate people and stuff! Play Assassin's Creed: Syndicate today!", "Buy Assassin's Creed 6!  Watch your computer's graphic card spontaneously combust!", "Buy half of Assassin's Creed 6 today for only $60!  And then buy the other half for a $60 DLC season pass!"]
            ]

            var gameID = parseInt(Math.random() * 4, 10);

            var repeat = setInterval(function(){
              sendDataBot('name='+names[gameID]+'&content='+messages[gameID][count]);
              if (count < 2)
              {
                count++;
              }
              else {
                //Disable bots
                num_active_bots--;
                clearInterval(repeat);
              }
            }, interval)
         }
       }

         var NameBot = { //Talks directly to a user that submitted something
            botName: "Name Bot",
            dname: "", //User's name
            dcontent: "", //User's content
            syncData: function(n, c)
            {
              dname = n;
              dcontent = c;
            },
            spam: function(interval, times)
            {
               num_active_bots++;
               var count = 0;
               var self = this;

               var messages = [
                 ["Hey ", ", have you seen my awesome new volcano!  You should totally check out my awesome new volcano!  It's totally volcanic!  Ah, ", ", you just won't believe how volcanic it is!"],
                 ["Yo! I peeped into ", "'s dream yesterday!  It was full of unicorns and dragons and fairies and stuff like that!  ", " thinks of some weird stuff! Seriously, ", ", you should see a psychiatrist and get that stuff checked out and stuff!"],
                 ["3am waking up in the morning, doing my rounds, saying hi to ", ", no one cares except for ", ", why does no one but ", " care? It's ", "-day, ", "-day, gonna sleep in on ", "-day!  Everybody is so ", "-ified!"],
                 ["I SEE YOUR FUTURE, ", "!  AND IT'S FULL OF RADIOACTIVE ZOMBIE THINGS!  and puppies.  BUT MOSTLY RADIOACTIVE ZOMBIES!  WATCH OUT ", "!"],
                 ["Hey ", "! Hey ", "! Wazzup ", "! Wazzup ", "!  Poke ", "! Poke ", "!  Let's eat Marvel superheroes together ", "!  I'll start with Captain America ", "!  You do Iron Man ", "!  Yeah this is totally contributing to 21st century society!"],
                 [Math.random().toString(36).substr(2, 30), Math.random().toString(36).substr(2, 19)]
               ]

               self.botName = Math.random().toString(36).substr(2, 15);
               var messageID = parseInt(Math.random() * 6, 10);
               var message_string = "";

               $.each(messages[messageID], function(i, v){
                 message_string += v;
                 if (i < (messages[messageID].length - 1))
                 {
                   message_string += dname;
                 }
               })

               var repeat = setInterval(function(){
                 sendDataBot('name='+self.botName+'&content='+message_string); //Change bot input here
                 if (count < times)
                 {
                   count++;
                 }
                 else {
                   //Disable bots
                   num_active_bots--;
                   clearInterval(repeat);
                 }
               }, interval)
            }
          }

          var PoopBot = { //Changes every instance of "I" to "Poop", "me" to "pee", "you" to "dung" and more, even if they're inside words
             botName: "Name Bot",
             dname: "", //User's name
             dcontent: "", //User's content
             syncData: function(n, c)
             {
               dname = n;
               dcontent = c;
             },
             spam: function(interval, times)
             {
                num_active_bots++;
                var count = 0;
                var self = this;

                self.botName = Math.random().toString(36).substr(2, 15);
                var messageID = parseInt(Math.random() * 6, 10);
                var message_string = dcontent;

                message_string = message_string.replace("I", "Poop");
                message_string = message_string.replace("me", "pee");
                message_string = message_string.replace("you", "dung");
                message_string = message_string.replace("the", "toilet");
                message_string = message_string.replace("and", "vomit");
                message_string = message_string.replace("The", "Toilet");

                var repeat = setInterval(function(){
                  sendDataBot('name='+self.botName+'&content='+message_string); //Change bot input here
                  if (count < times)
                  {
                    count++;
                  }
                  else {
                    //Disable bots
                    num_active_bots--;
                    clearInterval(repeat);
                  }
                }, interval)
             }
           }

           var CapBot = { //Changes content of post to all caps
              botName: "JIPPYKAIJEI!!!!",
              dname: "", //User's name
              dcontent: "", //User's content
              syncData: function(n, c)
              {
                dname = n;
                dcontent = c;
              },
              spam: function(interval, times)
              {
                 num_active_bots++;
                 var count = 0;
                 var self = this;

                 var messageID = parseInt(Math.random() * 6, 10);
                 var message_string = dcontent;

                 message_string = message_string.toUpperCase();
                 message_string = dname.toUpperCase() + ": " + message_string + " AWWWWWWWWWWWWWWW YEAH!!!!!!!!";

                 var repeat = setInterval(function(){
                   sendDataBot('name='+self.botName+'&content='+message_string); //Change bot input here
                   if (count < times)
                   {
                     count++;
                   }
                   else {
                     //Disable bots
                     num_active_bots--;
                     clearInterval(repeat);
                   }
                 }, interval)
              }
            }

            var EchoBot = { //Echos content from a previous post
               botName: "Echo Bot",
               dname: "", //User's name
               dcontent: "", //User's content
               syncData: function(n, c)
               {
                 dname = n;
                 dcontent = c;
               },
               spam: function(interval, times)
               {
                  num_active_bots++;
                  var count = 0;
                  var self = this;

                  var messageID = parseInt(Math.random() * 6, 10);
                  var message_string = dcontent;
                  self.botName = dname;

                  var repeat = setInterval(function(){
                    sendDataBot('name='+self.botName+'&content='+message_string); //Change bot input here
                    if (count < times)
                    {
                      count++;
                    }
                    else {
                      //Disable bots
                      num_active_bots--;
                      clearInterval(repeat);
                    }
                  }, interval)
               }
             }

             var GhostBot = { //Whispers the name of a user repeatedly
                botName: "Freddy",
                dname: "", //User's name
                dcontent: "", //User's content
                syncData: function(n, c)
                {
                  dname = n;
                  dcontent = c;
                },
                spam: function(interval, times)
                {
                   num_active_bots++;
                   var count = 0;
                   var self = this;

                   var messageID = parseInt(Math.random() * 6, 10);
                   var message_string = dname + "...";

                   var repeat = setInterval(function(){
                     if (count < times)
                     {

                       sendDataBot('name='+self.botName+'&content='+message_string.toLowerCase());
                       //Change bot input here
                      count++;
                     }
                     else {
                       //Disable bots
                       sendDataBot('name='+self.botName+'&content='+"im coming 4 u...");
                       num_active_bots--;
                       clearInterval(repeat);
                     }
                   }, interval)
                }
              }

              var PokemonBot = { //Creates Pokemon sounds
                 botName: "Ad Bot",
                 on: false, //Checks to see if bot is active in case of multiple users.
                 spam: function(interval, times)
                 {
                    num_active_bots++;
                    var count = 0;
                    var self = this;

                    var names = [
                      "Charmander", "Bulbasaur", "Riolu", "Sceptile", "Dialga", "Chespin"
                    ]

                    var messages = [
                      ["Char!", "Charman! Charmander!", "AHHHHHHHHH!  AAAAAAHHHHHHHH! AHHH! AAAAAHHHHHHH!"],
                      ["Saur! Bulba!", "Saur! Saur! Saur!", "Stop making me fight!  I mean Venasaur! I mean Bulbasaur!"],
                      ["Lu!", "Rio!", "Riolulululu! Lucario! Car!"],
                      ["Sceptile scept!", "Sceh! Sceh!", "Sssssss......."],
                      ["RAOOOOOOOOHHHHHHH!", "GRUUUHHHHHHHH!!!", "GIGIGIGIGIGIGI...."],
                      ["Chespin pin!", "Ches!", "ches..."]
                    ]

                    var gameID = parseInt(Math.random() * 6, 10);

                    var repeat = setInterval(function(){
                      sendDataBot('name='+names[gameID]+'&content='+messages[gameID][parseInt(Math.random() * 3, 10);]);
                      if (count < times)
                      {
                        count++;
                      }
                      else {
                        //Disable bots
                        num_active_bots--;
                        clearInterval(repeat);
                      }
                    }, interval)
                 }
               }
