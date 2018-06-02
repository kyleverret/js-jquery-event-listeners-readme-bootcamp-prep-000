//define functions here

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
});


function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('#typing').on('keydown', function(myKey){
    if (myKey.which == 71){
      alert ('success!');
    }
  })
}

function submitIt(){
  $('form input:last-child').on('click', function(){
    alert("Your form is going to be submitted now.");
  })
}