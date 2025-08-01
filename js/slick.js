$(function () {
  $(".y-g-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,

    cssEase: "linear",
    prevArrow: ".y-g-characters-list-left",
    nextArrow: ".y-g-characters-list-right",
  });
});
