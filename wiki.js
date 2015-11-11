document.getElementById('debug').innerHTML = "Hello! JQUERY Isn't working!";
$('#debug').html("Hello!");

function getParameter(param, queryString) //Gets parameter from uery string
{
   var string = queryString;
   var stringArray = queryString.split('&');
   $.each(stringArray, function(i, v) {
     var paramArray = v.split('=');
     if (paramArray[0] == param)
        return paramArray[1];
   })
   return null;
}

$(function() { //Wrap in ready function because apparently
  $('#debug').html("Wazzup!");
  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
     var form_data = $('#data').serialize(); //The form data we're submitting
     $.ajax({
       url: 'wiki.html', //We're submitting it to wiki.php
       data: form_data, //The data we're sending it
       type: 'POST', //via POST
       async: true, //Not asynchronous...
       success: function(data, stat){ //Add code that changes content1-3 here
         $('#debug').html("Success! ".concat(stat));
         $('form').addClass('hidden'); //Makes the form visible
         $('.content').removeClass('hidden'); //Makes whatever has id "content" invisible
         $('#content').html(getParameter('content', data));
         $('#content2').html(getParameter('content2', data));
         $('#content3').html(getParameter('content3', data));
       },
       error: function(data, stat){
         $('#debug').html("Error ".concat(form_data));
       }
    });
  });
});
