$(document).ready(function () {
  $(".servicer-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    autoplay: true,
    setTimeout: 2000,
    variableMode: true,
    variableHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".papers-card-wrap").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    prevArrow: $(".pc-prev"),
    nextArrow: $(".pc-next"),
    margin: 10,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".tsml-prev"),
    nextArrow: $(".tsml-next"),
    margin: 10,
  });
});
$(".blg-grid").masonry({
  // options
  itemSelector: ".blg-item",
  horizontalOrder: true,
  columnWidth: 30,
  gutter: 25,
  fitWidth: true,
});
$(document).ready(function () {
  $(".burger-wrap").click(function (e) {
    $(this).toggleClass("active");
    $(".nav__links").toggleClass("active");

    e.preventDefault();
  });
});
