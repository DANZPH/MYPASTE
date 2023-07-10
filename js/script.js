
'use strict';

$(function () {
  $('.btn').click(function () {
    $(this).addClass('submit');
  });
});

  // Get the current date
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    var day = ('0' + currentDate.getDate()).slice(-2);
    var formattedDate = year + '-' + month + '-' + day;
    document.getElementById('title-input').value = formattedDate;
    
    
    //toggle switch
    const togglePassword = document.getElementById('toggle-password');
const passwordSection = document.getElementById('password-section');

togglePassword.addEventListener('change', function() {
  if (this.checked) {
    passwordSection.classList.remove('hidden');
  } else {
    passwordSection.classList.add('hidden');
  }
});


//submit code
function submitCode() {
        var codeInput = document.getElementById("code-input").value;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "save_code.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("code-output").innerHTML = xhr.responseText;
          }
        };
        xhr.send("code=" + encodeURIComponent(codeInput));
      }
      
 //auto paste
 function autoPaste() {
    navigator.clipboard.readText()
      .then(function (text) {
        var codeInput = document.getElementById("code-input");
        codeInput.value = codeInput.value + text; // Append clipboard content to existing textarea value
        document.getElementById("auto-paste-btn").style.display = "none"; // Hide the button
      })
      .catch(function (error) {
        console.error('Failed to read clipboard contents: ', error);
      });
  }
  
// VIEW PASTE and COPY PASTE
    function redirectToView(button) {
        var pasteId = button.getAttribute('data-paste-id');
        var viewUrl = 'view.php?id=' + pasteId;
        window.location.href = viewUrl;
    }

    function copyLink(button) {
        var pasteUrl = button.getAttribute('data-paste-url');
        var tempInput = document.createElement('input');
        tempInput.value = pasteUrl;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Link copied!');
    }
    
    
    
var cooldownTime = 2; // Cooldown time in seconds
var cooldownTimer; // Timer variable for the cooldown
function submitCode() {
    // Check if the cooldown timer is still running
    if (cooldownTimer) {
        document.getElementById("cooldown-timer").innerHTML = "Please wait for the cooldown period to end before submitting again.";
        return;
    }
    // Disable the submit button and start the cooldown timer
    document.getElementById("submit-btn").disabled = true;
    cooldownTimer = setInterval(function() {
        cooldownTime--;
        document.getElementById("cooldown-timer").innerHTML = "THANKS FOR USING MY WEBSITE! "; //+ cooldownTime + "s";
        if (cooldownTime == 2) {
            clearInterval(cooldownTimer);
            document.getElementById("submit-btn").disabled = false;
            document.getElementById("cooldown-timer").innerHTML = "";
            cooldownTime = 2;
            cooldownTimer = null;
        }
    }, 500);

    // Hide input after submit
    
    document.getElementById("title-input").style.display = "none";
    document.getElementById("code-input").style.display = "none";
    document.getElementById("auto-paste-btn").style.display = "none";
    document.getElementById("password-text").style		      .display = "none";
    document.getElementById("password-input").style		      .display = "none";
    // Rest of your code here
    var titleInput = document.getElementById("title-input").value;
    var codeInput = document.getElementById("code-input").value;
    var passwordInput = document.getElementById("password-input").value; // Get the password input value

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "save_code.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("code-output").innerHTML = xhr.responseText;
        }
    };
    // Append the password to the request parameters
    xhr.send("title=" + encodeURIComponent(titleInput) + "&code=" + encodeURIComponent(codeInput) + "&password=" + encodeURIComponent(passwordInput));
}