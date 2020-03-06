function register() {
var username = document.getElementById('username').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var confirmpassword = document.getElementById('confirmpassword').value;

    var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
    if(email.value.match(emailExp)){
    return true;
    }else{
    document.getElementById('emailErrorMsg').innerText = "Invalid Email Id";
    inputtext.focus();
    return false;
    }
}