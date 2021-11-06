
// 1. MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// 2. Progress Bar(s) fill on hovering


var progress= document.querySelectorAll('.bar'); // array: bars that are outside

progress.forEach(item=> {
    
  item.addEventListener('mouseover', ()=>{ // when hovering over bars
      var x = item.firstElementChild;
      var val = x.getAttribute('data-done') + '%';
      x.style.width = val;
  });
});

progress.forEach(item=> { // when hovering out

  item.addEventListener('mouseout', ()=> {

    var x = item.firstElementChild;
    x.style.width = 0;

  });
});


// 3,4,5. Contact us Form

var message_area = document.getElementById("message");
var remaining_characters = document.getElementById("remaining-chars");
var MAX_CHARS = 200;

message_area.addEventListener('input', () => { // this function counts remaining characters

      var remaining = MAX_CHARS - message_area.value.length;
      remaining_characters.textContent = remaining + ' characters remaining';
 
      // changing color of counter according to the remaining characters
      var color;
      if (remaining < 0){
          color = 'red';
      }
      else if (remaining < 10){
          color = 'orange';
      }
      else {
        color = null;
      }

      remaining_characters.style.color = color;
  
});

var my_form = document.getElementById('myform');

my_form.addEventListener('submit', (e) => { // e is a Helper Parameter

  e.preventDefault(); // preventing browser from refreshing the page on submitting while there is an error

  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  var message = document.getElementById("message").value;
  error_message.style.padding = "10px";
  
  var text;

  if ( name.length == 0 || phone.length == 0
      || email.length == 0 || message == 0){ // if one field is empty
          error_message.innerHTML = "At least one of the fields is empty";
          return false;
      }

  if(isNaN(phone)){ // phone should not contain letters
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }

  if(email.indexOf("@") == -1){ // mail should contain "@" symbol
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }

  if(message.length > 200){ // 200 letters at most
    text = "Please Enter Less than 200 Characters";
    error_message.innerHTML = text;
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;

});

// 6. Return to Top Button
const btn = document.getElementById("btnScrollToTop");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});