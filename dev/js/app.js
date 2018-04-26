var link = $('.menu-link');
        var link_active = $('.menu-link_active');
        var menu = $('.sm-menu-list');
        var nav_link = $('.sm-menu-list a');

        link.click(function() {
            link.toggleClass('menu-link_active');
            menu.slideToggle(300);
        });



$('ul.header-menu__list li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
 
var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  slideSpeed: 500,
  itemsDesktop: 3,
  autoplay: true,
  autoplayTimeout: 4500,
  loop: false,
  mouseDrag: false,
  singleItem: true,
  dots: true,
  margin: 0,
  responsiveClass:true,
  nav: false
});
