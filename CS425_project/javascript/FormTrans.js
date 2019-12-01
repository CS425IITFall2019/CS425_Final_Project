// I've changed the class name for better reference

// When someone clicks on 'Sign Up' button
$('.to_register').on('click', function() {
  $('.signin_form').css('display', 'none');
  $('.signup_form').css('display', 'block');
});

// When someone clicks on 'Sign In' button
$('.to_login').on('click', function() {
  $('.signup_form').css('display', 'none');
  $('.signin_form').css('display', 'block');
});