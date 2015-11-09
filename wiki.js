$('.content').click(function() { //What does this do?  There is no element with id "content"!
  $('form').removeClass('hidden'); //Makes the form visible
  $('.content').addClass('hidden'); //Makes whatever has id "content" invisible
});

$('#debug').html("Hello!");

document.getElementById('debug').innerHTML = "Hello! JQUERY Isn't working!";

$(function() { //Wrap in ready function because apparently
  $('#debug').html("Wazzup!");

  $('#data').submit(function(event) {
    event.preventDefault();
    $('#debug').html("Submitting!");
     var data = $('#data'); //The form data we're submitting
     $.ajax({
       url: 'wiki.php', //We're submitting it to wiki.php
       data: data, //The data we're sending it
       contentType: 'application/json; charset=UTF-8', //Make sure we're actually sending a JSON and not just a query-string...
       dataType: 'json', //Sending it as a JSON
       type: 'POST', //via POST
       async: true, //Not asynchronous...
       success: function(data){
         $('#debug').html("Success!");
       },
       error: function(data){
         $('#debug').html("Error");
       }
     });
  });
});
