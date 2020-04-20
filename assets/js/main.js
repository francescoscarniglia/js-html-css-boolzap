$(document).ready(function(){

  console.log('jQuery ok');

  var conversation = $('.conversation .message-list');



  // aggiunta di un nuovo elemento list-item
  $('.input-message').keyup(function(e) {
      if(e.which === 13 || e.keyCode === 13) {
          var text = $(this).val().trim();
          if(text !== '') {
              var template = $('.template .your-message').clone();
              var newMessage = $('.input-message').val().trim();
              conversation.append(template.append(newMessage));
              $('.input-message').val('');
          }
      }


  });

});//ready
