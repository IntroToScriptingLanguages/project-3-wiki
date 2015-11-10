$('.content').click(function() { //What does this do?  There is no element with id "content"!
  $('form').removeClass('hidden'); //Makes the form visible
  $('.content').addClass('hidden'); //Makes whatever has id "content" invisible
});

$(function() { //Wrap in ready function because apparently
  $('#data').submit(function(event) {
    event.preventDefault();
    $('#response').html("Hi!");
     var data = $('#data').serialize(); //The form data we're submitting
     $.ajax({
       url: 'wiki.html', //We're submitting it to wiki.php
       data: data, //The data we're sending it
       type: 'POST', //via POST
       async: true, //Not asynchronous...
       success: function(n_data){ //Change data here
         $('#response').html("Yay!");
       },
       error: function(n_data){
         $('#response').html("Error!");
       },
     });
  });
});
