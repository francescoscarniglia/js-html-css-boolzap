$(document).ready(function(){

  var messageInput = $('.input-message');
  var sendIcon = $('.record-message i')
  var conversation = $('.conversation .message-list');

  // Show send message icon on message input focus

  messageInput.on('focus blur', function(){
    sendIcon.toggleClass('fa-microphone fa-paper-plane')
  });

  sendIcon.click(function(){
    var text = $('.input-message').val().trim();
    if(text !== '') {
        var template = $('.template .your-message').clone();
        var templateTime = $('.template .your-message .absolute-time').clone();
        var newMessage = $('.input-message').val().trim();
        conversation.append(template.append(newMessage));

        var data = new Date();
        var ora = addZero(data.getHours() );
        var minuti = addZero( data.getMinutes() );
        var orario = ora + ':' + minuti;
        template.append(templateTime.append(orario));

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

// Aggiungi zero iniziale a numeri inferiori a 10
function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }

    return numero;
}
