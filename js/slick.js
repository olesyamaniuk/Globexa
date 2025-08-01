$(function () {
  $(".y-h-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".y-h-reviews-list-left",
    nextArrow: ".y-h-reviews-list-right",
  });
});
