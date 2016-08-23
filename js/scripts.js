// Business Logic
function ticket(ticket, age, time, movie){
  this.ticket = ticket;
  this.age = age;
  this.time = time;
  this.movie = movie;
  this.ticetPrice = [""];
}
var ticketPriceChild = "$2";
var ticketPriceSenior = "$3";
var ticketPriceAdult = "$4";
ticket.prototype.prices = function () {
  this.ticket.push(ticketPriceChild);
}
// UI Logic
$(document).ready(function() {
$("form#movieForm").submit(function(event){
  event.preventDefault();
  var movieIn = $("#SpaceOdd").val();
  alert(ticketPriceChild);

  });
});
