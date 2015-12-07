//Bot and all its subclasses here
var num_active_bots = 0;

var HelloBot = {
   name: "Bot",
   on: false, //Checks to see if bot is active in case of multiple users.
   changeName: function(new_name)
   {
      this.name = new_name;
   },
   spam: function(interval, times)
   {
     if (!(this.on))
     {
      console.log("HelloBot enabled");
      num_active_bots++;
      this.on = true;
      var count = 0;
      var repeat = setInterval(function(){
        console.log("HelloBot post sent");
        sendData('name='+this.name+'&content='+"Hello World!  I'm a bot!");

        if (count < times)
        {
          count++;
        }
        else {
          clearInterval(repeat);
        }
      }, interval)
      console.log("HelloBot disabled");
      this.on = false;
      num_active_bots--;
    }
   }
}
