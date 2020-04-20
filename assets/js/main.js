$(document).ready(function(){

  var messageInput = $('.input-message');
  var sendIcon = $('.record-message i')

  // Show send message icon on message input focus

  messageInput.on('focus blur', function(){
    sendIcon.toggleClass('fa-microphone fa-paper-plane')
  });

  sendIcon.click(function(){
    sendMessage(messageInput);
  });

  messageInput.keypress(function(e){
    if(e.wich == 13 || e.keyCode == 13) {
      console.log('hai pigiato invio');
    }
  });

});//ready

// Functions

function sendMessage (input) {


  // ottengo il testo
  var testoMessaggio = input.val().trim();
  console.log(testoMessaggio);

  // check contenuto
  if(testoMessaggio.length > 0) {

  // clone template
  var nuovoMessaggio = $('.template .your-message').clone();

  // aggiunta testo messaggio
  nuovoMessaggio.children('.message-list li.text-message').text(testoMessaggio);

  // Aggiungi classe sent (inviata dall'utente)
  nuovoMessaggio.addClass('relative');

  // Aggiunta nuovo messaggio al contenitore messaggi attivo
  $('.message-list').append(nuovoMessaggio);

  // reset input messaggio
  input.val('');

  }
}
