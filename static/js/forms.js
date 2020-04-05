$("#contactForm").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    $("#contactForm").append("Some appended text."); 
  });
});
