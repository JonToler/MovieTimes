// Business Logic
function ticket(title) {
  this.movieTitle = title;
  this.admission = 5;
}

var myTicket;
var seniorDiscount;
var matineeDiscount;
var ticketPrice = [];

ticket.prototype.prices = function () {
  this.ticket.push(ticketPriceChild);
}



function myTicketPrice(age, time) {
  if (age > 65) {
    seniorDiscount = 0.5;
  } else {
    seniorDiscount = 1;
  }
  if (time < 17) {
    matineeDiscount = 0.5;
  } else {
    matineeDiscount = 1;
  }
  myTicket.admission *= seniorDiscount * matineeDiscount;
}

// UI Logic
$(document).ready(function() {
$("form#movieForm").submit(function(event){
  event.preventDefault();
  var movieIn = $("#movieList").val();
  var movieTime = parseInt($("#movieTimes").val());
  var movieAge = parseInt($("#ageInput").val());

  myTicket = new ticket(movieIn);
  myTicketPrice(movieAge, movieTime);
  $("#YourTicket").text("your ticket price is:" + "$" + myTicket.admission);

  });

});
