//Bot and all its subclasses here
var num_active_bots = 0;

var HelloBot = {
   nombre: 'Hello Bot',
   on: false, //Checks to see if bot is active in case of multiple users.
   spam: function(interval, times)
   {
     if (!(this.on))
     {
      console.log("HelloBot enabled");
      num_active_bots++;
      this.on = true;
      var count = 0;
      console.log("Ison: "+this.on);
      var repeat = setInterval(function(){
        console.log(this.nombre);
        sendData('name='+this.nombre+'&content='+"Hello World!  I'm a bot!");

        if (count < times)
        {
          count++;
        }
        else {
          //Disable bots
          console.log("HelloBot disabled");
          this.on = false;
          num_active_bots--;
          clearInterval(repeat);
        }
      }, interval)
    }
   }
}
