var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('phone-error');
var emailError=document.getElementById('email-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('submit-error');

function validateName(){
  var name=document.getElementById('contact-name').value;

if(name.length==0 ||name.length==''){
  nameError.innerHTML='Name is required';
  return false;
}

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
  nameError.innerHTML='Write full name';
  return false;
}
nameError.innerHTML='<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
return true;
}

function validatePhone(){
  var phone=document.getElementById('contact-phone').value;

  if(phone.length == 0){
    phoneError.innerHTML='Phone no is required';
    return false;
  }
  if(phone.length!==10){
    phoneError.innerHTML='Phone no should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML='Only digits';
    return false;
  }

  phoneError.innerHTML='<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateEmail(){
  var email=document.getElementById('contact-email').value;

  if(email.length==0){
    emailError.innerHTML='Email is required';
    return false;
  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Invalid Email';
    return false;
  }

  emailError.innerHTML='<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateMessage(){
  var message=document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML= left + ' more characters required';
    return false;
  }

  messageError.innerHTML='<i class="fa-solid fa-check" style="color: #63E6BE;"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
    submitError.innerHTML='Please fix error to submit';
    return false;
  }else{
    console.error();
    
  }
}

//home-hamburger
 function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
  }

//contact 
// Contact form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.backgroundColor = '#28a745';
        
        // Reset form
        this.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
        }, 3000);
    }, 2000);
});

// Input validation and visual feedback
document.querySelectorAll('.input-group input, .input-group textarea').forEach(input => {
    input.addEventListener('blur', function() {
        if (this.checkValidity()) {
            this.style.borderColor = '#28a745';
        } else {
            this.style.borderColor = '#dc3545';
        }
    });
    
    input.addEventListener('input', function() {
        this.style.borderColor = '';
    });
});