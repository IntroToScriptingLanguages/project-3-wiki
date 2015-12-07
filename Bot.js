//Bot and all its subclasses here

var HelloBot = {
   name: "Bot";
   changeName: function(new_name)
   {
      this.name = new_name;
   }
   spam: function(interval, times)
   {
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
   }
}
