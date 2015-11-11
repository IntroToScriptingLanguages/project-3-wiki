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
   })
   return null;
}

$(function() { //Wrap in ready function because apparently
  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
     var form_data = $('#data').serialize(); //The form data we're submitting

     $.ajax({url: 'wiki.php?string='.concat(form_data)
        success: function(new_data){
          $.ajax({
            url: 'wiki.html', //We're submitting it to wiki.php
            data: new_data, //The data we're sending it
            type: 'POST', //via POST
            async: true, //Not asynchronous...
            success: function(d, stat){ //Add code that changes content1-3 here
              $('#debug').html("Success! ".concat(stat));
              $('form').addClass('hidden'); //Makes the form visible
              $('#content').html(getParameter('content', d));
              $('#content2').html(getParameter('content2', d));
              $('#content3').html(getParameter('content3', d));
            },
            error: function(data, stat){
              $('#debug').html("Error ".concat(form_data));
              $('form').addClass('hidden'); //Makes the form visible
            }
         });
        }
      }); //Writes form data to wiki.txt


  });
});
