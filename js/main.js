$(document).ready(function () {
  $(".footer-title").click(function (event) {
    if ($(".footer").hasClass("one")) {
      $(".footer-title").not($(this)).removeClass("active");
      $(".footer-nav").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-burger,.header-menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
$(document).ready(function () {
  $(".heder-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      { duration: 1000, esing: "swing" }
    );
  });
});
