jQuery(document).ready(function($) {

   function getParameter(param, queryString) //Gets parameter from uery string
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


  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
     var form_data = $('#data').serialize(); //The form data we're submitting

          console.log("formdata: ".concat(form_data));

            $.ajax({
              url: "wiki.php",
              data: form_data, //The data we're sending it
              type: 'POST', //via GET
              success: function(d, stat){ //Add code that changes content1-3 here
                $('#debug').html("Success! ".concat(d));
              },
              error: function(data, stat){
                $('#debug').html("Error ".concat(form_data)..concat(' ').concat(stat));
     					}
           });
 //Writes form data to wiki.txt


  });
});
