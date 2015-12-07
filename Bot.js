//Bot and all its subclasses here

class Bot{
  var name;

  constructor(n) {name = n;} //Abstract interface

  startSpam(interval, times) //Interval denotes interval size, times denotes number of intervals
  {}
}

class HelloBot extends Bot{
   startSpam(interval, times)
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
