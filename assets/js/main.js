$(document).ready(function(){

  console.log('jQuery ok');

  var conversation = $('.app .content-conversation .main-conversation .your-reply-message');
  var newMessage = $('.input-message');

  // aggiunta di un nuovo elemento list-item
    newMessage.keyup(function(e){
      if(e.which == 13 || e.keyCode == 13 ) {
        var newText = newMessage.val().trim();
        console.log(newText);
        var newReplyMessage = $('.template .reply-message').clone();
        newReplyMessage.prepend(newText);
        conversation.append(newReplyMessage);
        newMessage.val('');
      }
    });

});//ready
