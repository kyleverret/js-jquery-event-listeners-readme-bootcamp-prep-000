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
    if (myKey === )
  })
}