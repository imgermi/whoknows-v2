$("#contactForm").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $( "contactForm button" ).replaceWith( "<p class='light-gray'>Thank you</p>" );
  });
});
