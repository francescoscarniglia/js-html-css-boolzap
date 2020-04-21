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

  // aggiunta testo messaggio e tempo
  nuovoMessaggio.children('.text-message').text(testoMessaggio);


  // creo

  var data = new Date();
  var ora = addZero(data.getHours() );
  var minuti = addZero(data.getMinutes() );
  var orario = ora + ':' + minuti;

  nuovoMessaggio.children('.absolute-time').text(orario);
  
  // Aggiunta nuovo messaggio al contenitore messaggi attivo
  $('.conversation .message-list').append(nuovoMessaggio);

  // reset input messaggio
  input.val('');

  }
}

// aggiunta 0 prima del numero se minore di 10 (ex 09)
function addZero(numero){
  if(numero < 10 ) {
    numero = '0' + numero;
   }
   return numero;
}
