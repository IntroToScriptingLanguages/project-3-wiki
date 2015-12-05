jQuery(document).ready(function($) {

   function getParameter(param, queryString) //Function that gets parameter from query string
   {
      var string = queryString;
      console.log("queryString: ".concat(queryString));
      var stringArray = queryString.split('&');
      $.each(stringArray, function(i, v) {
        var paramArray = v.split('=');

        console.log(v);
        if (paramArray[0] == param)
           return paramArray[1];
      });
      return null;
   }

  var submitted = false;

  //Sends data via AJAX to database (wiki.php)
  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
     var form_data = $('#data').serialize(); //The form data we're submitting
            $.ajax({
              url: "wiki.php",
              data: form_data, //The data we're sending it
              type: 'POST', //via GET
              success: function(d){ //Add code that changes content1-3 here
                $('#debug').html("Success! ".concat(d));
                submitted = true;
              },
              error: function(d, stat){
                console.log(d);
                $('#debug').html("Error ".concat(d).concat(' ').concat(stat));
     					}
           });

   //Retrieves all data via AJAX from database and throws them into an unordered list.


  });
});
