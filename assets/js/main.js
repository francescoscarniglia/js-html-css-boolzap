$(document).ready(function(){

  var messageInput = $('.input-message');
  var sendIcon = $('.record-message i');
  var searchInput = $('#search-input');

  // Show send message icon on message input focus

  messageInput.on('focus blur', function(){
    sendIcon.toggleClass('fa-microphone fa-paper-plane')
  });

  sendIcon.click(function(){
    sendMessage(messageInput);
  });

  messageInput.keypress(function(e){
    if(e.wich == 13 || e.keyCode == 13) {
      sendMessage(messageInput);
    }
  });

  // search input

  searchInput.keyup(function() {
    var search = $(this).val().toLowerCase().trim();
  //  console.log(search);

    $('.box-conversation').each(function(){
      var nomeContatto = $(this).find('.conversation-review h3').text().toLowerCase();

      if (nomeContatto.includes(search) ) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

  });

  // select single conversation

  $('.box-conversation').click(function(){
    console.log('hai pigiato su un box conversation');
    var singleConversation = $(this).attr('data-conversation');
    console.log('single conversation: ', singleConversation);

    // prima di aggiungere nuovamente active occorre rimuovere la precedente
    $('.message-list').removeClass('active');

    // prendo il contenitore della singola conversazione e come valore all'interno di data-conversation
    // inserisco il valore della convers. singola preso prima

    $('.message-list[data-conversation="' + singleConversation + '"]').addClass('active');

  });

  $('.friends-message').hover(
       function(){ $(this).addClass('.absolute-arrow active') },
       function(){ $(this).removeClass('hover') }
)

}); //ready

//****************************************
//****************************** Functions

function sendMessage (input) {


  // ottengo il testo
  var testoMessaggio = input.val().trim();
  console.log(testoMessaggio);

  // check contenuto
  if(testoMessaggio.length > 0) {

  // clone template
  var nuovoMessaggio = $('.template .your-message').clone();

  // aggiunta testo messaggio e orario di invio mex
  nuovoMessaggio.children('.text-message').text(testoMessaggio);


  var orario = oraAttuale();

  nuovoMessaggio.children('.absolute-time').text(orario);

  // Aggiunta nuovo messaggio al contenitore messaggi attivo
  $('.conversation .message-list.active').append(nuovoMessaggio);

  //reply message setTimeout
  setTimeout(replyMessage, 1000);
  // reset input messaggio

  //change time in last-access from my friend
  timeNow = $('.time-now');
  timeNow.text(orario);
  // nuovoMessaggio.children('.absolute-time').text(orario);

  input.val('');

  // scroll
  scrollMessaggio();

  }
}

// aggiunta 0 prima del numero se minore di 10 (ex 09)
function addZero(numero){
  if(numero < 10 ) {
    numero = '0' + numero;
   }
   return numero;
}

// setTimmeout
function replyMessage(messageFriend) {
  //alert("Compare 1 secondo dopo invio di un messaggio altrimenti non va bene");

  // clone template
  var nuovoMessaggio = $('.template .friends-message').clone();
  var textReply = nuovoMessaggio.text();

  // Aggiunta nuovo messaggio al contenitore messaggi attivo
  nuovoMessaggio.children('.text-message').text(textReply);

  var orario = oraAttuale();

  nuovoMessaggio.children('.absolute-time').text(orario);

  // aggiunta testo messaggio e orario di invio mex
  $('.conversation .message-list').append(nuovoMessaggio);
    console.log('risposta: ', textReply);

  // scroll
  scrollMessaggio();
}


// genero ora attuale per riutilizzo
function oraAttuale(){
  var data = new Date();
  var ora = addZero(data.getHours() );
  var minuti = addZero(data.getMinutes() );
  var orario = ora + ':' + minuti;
  return orario;
};

// scroll all'ultimo messaggio

function scrollMessaggio(){
  // prima cosa che serve: prendere il contenitore
  // attivo della convrsazione ed ottenere la sua altezza
  // metodo jQuery che mi ritorna altezza height()

  pixelScroll = $('.message-list.active').height();

  $('.main-conversation').animate({
    scrollTop: pixelScroll
  }, 500);

};
