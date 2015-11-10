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
     var data = $('#data').serialize(); //The form data we're submitting
     $.ajax({
       url: 'wiki.php', //We're submitting it to wiki.php
       data: data, //The data we're sending it
       dataType: 'json', //Sending it as a JSON
       type: 'POST', //via POST
       async: true, //Not asynchronous...
       success: function(data){ //Change data here
         $('#debug').html("Success!");
       },
       error: function(data){
         $('#debug').html("Error ".concat(data.serialize()));
       },
       complete: function(xhr, text){
          $('#debug').html("Finished with code ".concat(xhr.status).concat(", ").concat(text));
       }
     });
  });
});
