/*$(function () {
  $isValid=false;

  $('#cc_number').validateCreditCard(function(result){
    result.valid ? $isValid=true : $isValid=false;
  });

  $('.confirm').on('click', function() {
    $isValid ? $(window).attr("location", "confirmed.html") : alert("Not valid cc");
  });
});*/
$(function(){

$isValid=false; //global variable for validator result

//credit card validator
$('#cc_number').validateCreditCard(function(result){
result.valid ? $isValid=true : $isValid=false;
});
//Confirm button
$('.confirm').on('click', function(){
$isValid ? $(window).attr("location", "lally.html") : alert("Not valid cc");
});
});
