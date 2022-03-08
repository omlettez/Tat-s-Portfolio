// window.onload = pageLoad;
// function pageLoad() {

// }

var validateForm = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('errormsg').style.color = 'green';
      document.getElementById('errormsg').innerHTML = 'password matched';
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById('errormsg').style.color = 'red';
      document.getElementById('errormsg').innerHTML = 'password not matching';
      document.getElementById("submit").disabled = true;
    }
  }
