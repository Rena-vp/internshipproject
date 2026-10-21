// Scroll to contact section
document.getElementById('contactBtn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Handle form submit
document.getElementById('ticketForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert("Thank you! Your request has been submitted. Our team will contact you soon.");
  e.target.reset();
});