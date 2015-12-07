//Bot and all its subclasses here

var HelloBot = {
   name: "Bot",
   on: false, //Checks to see if bot is active in case of multiple users.
   changeName: function(new_name)
   {
      this.name = new_name;
   },
   spam: function(interval, times)
   {
     if (!this.on)
     {
      this.on = true;
      var count = 0;
      var repeat = setInterval(function(){

        sendData('name='+name+'&content='+"Hello World!  I'm a bot!");

        if (count < times)
        {
          count++;
        }
        else {
          clearInterval(repeat);
        }
      }, interval)
      this.on = false;
    }
   }
}
