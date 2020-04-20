$(document).ready(function(){

  var messageInput = $('.input-message');
  var sendIcon = $('.record-message i')
  var conversation = $('.conversation .message-list');

  // Show send message icon on message input focus

  messageInput.on('focus blur', function() {
      sendIcon.toggleClass('fas fa-microphone fas fa-paper-plane');
  });

  sendIcon.click(function(){
    var text = $('.input-message').val().trim();
    if(text !== '') {
        var template = $('.template .your-message').clone();
        var templateTime = $('.template .your-message .absolute-time').clone();
        var newMessage = $('.input-message').val().trim();
        conversation.append(template.append(newMessage));
        $('.input-message').val('');
    }
  });


  // aggiunta di un nuovo elemento list-item
  $('.input-message').keyup(function(e) {
      if(e.which === 13 || e.keyCode === 13) {
          var text = $(this).val().trim();
          if(text !== '') {
              var template = $('.template .your-message').clone();
              var templateTime = $('.template .your-message .absolute-time').clone();
              var newMessage = $('.input-message').val().trim();
              conversation.append(template.append(newMessage));
              $('.input-message').val('');
          }
      }


  });

});//ready
