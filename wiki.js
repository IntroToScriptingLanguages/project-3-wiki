jQuery(document).ready(function($) {

  //Data retrieval now happens whenever the document is loaded!
  retrieveData();


/*   function getParameter(param, queryString) //Function that gets parameter from query string
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
   }*/

  //Sends data via AJAX to database (wiki.php)
  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
    var form_data = $('#data').serialize(); //The form data we're submitting
    console.log(form_data);
    sendData(form_data);
  });

setInterval(function(){ retrieveData(); }, 1500);

});
