//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
$("button#resume").click(function() {
  $(".resume").toggle();
  $(".portfolio").hide();
  $(".about").hide();
  $(".social").hide();
  $(".publication").hide();
  $(".contact").hide();
});
$("button#portfolio").click(function() {
  $(".resume").hide();
  $(".portfolio").toggle();
  $(".about").hide();
  $(".social").hide();
  $(".publication").hide();
  $(".contact").hide();
});
$("button#about").click(function() {
  $(".resume").hide();
  $(".portfolio").hide();
  $(".about").toggle();
  $(".social").hide();
  $(".publication").hide();
  $(".contact").hide();
});
$("button#social").click(function() {
  $(".resume").hide();
  $(".portfolio").hide();
  $(".about").hide();
  $(".social").toggle();
  $(".publication").hide();
  $(".contact").hide();
});
$("button#publication").click(function() {
  $(".resume").hide();
  $(".portfolio").hide();
  $(".about").hide();
  $(".social").hide();
  $(".publication").toggle();
  $(".contact").hide();
});
$("button#contact").click(function() {
  $(".resume").hide();
  $(".portfolio").hide();
  $(".about").hide();
  $(".social").hide();
  $(".publication").hide();
  $(".contact").toggle();
});
