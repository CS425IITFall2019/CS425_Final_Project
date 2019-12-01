//var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
if ( username == 'cgeorge3' && password == 'Login'){
alert ("Login successfully");
//location.replace("https://www.w3schools.com");
window.location.href = "HomePage"; // Redirecting to other page.
return false;
}
else{
alert("Wrong password or username");
// Disabling fields after 3 attempts.
}
}