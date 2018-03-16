// console.log(`%c I see you like looking under the hood! `, `background: #3498db; color: white; display: block;`);
// console.log(`%c I hope that's because you like what you see and want a closer look. `, `background: #3498db; color: white; display: block;`);
// console.log(`%c You can check out my work here https://github.com/JoshuaMcEvoy `, `background: #3498db; color: white; display: block;`);
// console.log(`%c (V)(;,;)(V) `, `background: #3498db; color: white; display: block;`);

$(document).ready(function() {

  // sticky navigation
  $('.js--section-about').waypoint(function(direction){
    if ( direction == 'down' ){
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // Button scroll
  $('.js--scroll-to-about').click(function(){
    $('html, body').animate({scrollTop: $( '.js--section-about' ).offset().top}, 1000);
  })

  $('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop: $( '.js--section-contact' ).offset().top}, 1000);
  });

  // Navigation button smooth scrolling
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });
  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });
  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  $(window).on('scroll', function(){
    const height = parseInt($('header').css('height'));
    const scrollTop = $(window).scrollTop() - (height);
    $('header').css('background-position-y', scrollTop );
  });

  // Mobile navigation

  $('.js--nav-icon').click(function() {
    let nav = $('.js--main-nav');
    let icon = $('.js--nav-icon i')

    nav.slideToggle(200);
    //change icon
    if (icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

  $(document).ready(function(){
  	$('#nav-icon').click(function(){
  		$(this).toggleClass('open');
  	});
  });

});
