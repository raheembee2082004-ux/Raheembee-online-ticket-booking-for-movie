const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;

movieSelect.addEventListener('change', function(){
ticketPrice = this.value;
updateTotal();
});

seats.forEach(function(seat){
seat.addEventListener('click', function(){
seat.classList.toggle('selected');
updateTotal();
});
});

function updateTotal(){
const selectedSeats = document.querySelectorAll('.seat.selected');
const selectedSeatsCount = selectedSeats.length;

count.innerText = selectedSeatsCount;
total.innerText = selectedSeatsCount * ticketPrice;
}

function bookTicket(){
let seats = count.innerText;
let price = total.innerText;

if(seats == 0){
alert("Please select seats");
}
else{
alert("Booking Successful!\nSeats Booked: " + seats + "\nTotal Price: ₹" + price);
}
}