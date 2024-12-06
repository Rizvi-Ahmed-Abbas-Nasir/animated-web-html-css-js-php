// js Document

    // Created on   : 11/10/2021.
    // Theme Name   : CleverStudio-Creative Agency & Portfolio HTML5 Template
    // Version      : 1.0.
    // Developed by : (me@heloshape.com) / (www.me.heloshape.com)


(function($) {
    "use strict";

// ----------------------------- Mobile Mega menu
        if($(".mega-menu-title").length) {
          $('.mega-menu-title').on('click', function() {
            if (!$(this).next().hasClass('active')) {
              $('.mega-dropdown-list').removeClass('active');
              $(this).next().addClass('active');
            }
            else if ($(this).next().hasClass('active')) {
              $(this).next().removeClass('active');
            }
            return false;
          });
        }


// ----------------------------- Counter Function
        var timer = $('.counter');
        if(timer.length) {
          $('.counter').counterUp({
            delay: 10,
            time: 1200,
          });
        }

// ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.sticky-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

// -------------------- From Bottom to Top Button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });

//---------------------- Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0});
          return false;
        });

// -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });

// ------------------------ Password Toggler
        if($(".user-data-form").length) {
          $(".passVicon").on('click', function() {
            $(".passVicon").toggleClass("eye-slash");
            var input = $(".pass_log_id");
            if (input.attr("type") === "password") {
              input.attr("type", "text");
            } else {
              input.attr("type", "password");
            }

          });
        }
        
// ----------------------------- MixItUp
        if ($(".mixitUp-container").length) {
          var containerEl = document.querySelector('.mixitUp-container');
          var mixer = mixitup(containerEl);
        };
        

// ------------------------ Partner Slider One
        if($(".partnerSliderOne").length) {
          $('.partnerSliderOne').slick({
              centerMode: true,
              centerPadding: '0px',
              arrows: false,
              slidesToShow: 5,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 992,
                  settings: {
                    centerMode: true,
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    centerMode: true,
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    centerMode: true,
                    slidesToShow: 2
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider One
        if($(".feedback_slider_one").length) {
          $('.feedback_slider_one').slick({
              centerMode: true,
              centerPadding: '0px',
              slidesToShow: 1,
              fade: true,
              prevArrow: $('.prev_c'),
              nextArrow: $('.next_c'),
              autoplay: true,
              autoplaySpeed: 6000,
            });
        }


// ------------------------ Feedback Slider Two
        if($(".feedback_slider_two").length) {
          $('.feedback_slider_two').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_b'),
              nextArrow: $('.next_b'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Feedback Slider Three
        if($(".feedback_slider_three").length) {
          $('.feedback_slider_three').slick({
              dots: true,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Four
        if($(".feedback_slider_four").length) {
          $('.feedback_slider_four').slick({
              dots: true,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              fade:true,
              autoplaySpeed: 3000,
            });
        }

// ------------------------ Feedback Slider Five
        if($(".feedback_slider_five").length) {
          $('.feedback_slider_five').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_f'),
              nextArrow: $('.next_f'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Six
        if($(".feedback_slider_six").length) {
          $('.feedback_slider_six').slick({
              dots: true,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              fade:true,
              autoplaySpeed: 3000,
            });
        }


// ------------------------ Feedback Slider Seven
        if($(".feedback_slider_seven").length) {
          $('.feedback_slider_seven').slick({
              dots: true,
              arrows: false,
              prevArrow: $('.prev_b'),
              nextArrow: $('.next_b'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Team Slider One
        if($(".team_slider_one").length) {
          $('.team_slider_one').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_team1'),
              nextArrow: $('.next_team1'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Team Slider Two
        if($(".team_slider_two").length) {
          $('.team_slider_two').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_team2'),
              nextArrow: $('.next_team2'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Hero Slider One
        if($(".hero_slider_one").length) {
          $('.hero_slider_one').slick({
              dots: false,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              fade:true,
              autoplaySpeed: 3000,
            });
        }

// ------------------------ Hero Slider Two
        if($(".hero_slider_two").length) {
          $('.hero_slider_two').slick({
              dots: false,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              fade:true,
              autoplaySpeed: 4000,
            });
        }

// ------------------------ Hero Slider Three
        if($(".hero_slider_three").length) {
          $('.hero_slider_three').slick({
              dots: false,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              fade:true,
            });
        }

// ------------------------ Shop Hero Slider One
        if($(".shop-hero-slider-one").length) {
          $('.shop-hero-slider-one').slick({
              dots: false,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 5000,
              fade:true,
            });

          $(".shop-hero-slider-one").on('wheel', (function(e) {
            e.preventDefault();

            if (e.originalEvent.deltaY < 0) {
              $(this).slick('slickNext');
            } else {
              $(this).slick('slickPrev');
            }
          }));
        }


// ------------------------ Feature Slider One
        if($(".feature_slider_one").length) {
          $('.feature_slider_one').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_f1'),
              nextArrow: $('.next_f1'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              centerMode: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Case Slider One
        if($(".case_slider_one").length) {
          $('.case_slider_one').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_case1'),
              nextArrow: $('.next_case1'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Case Slider two
        if($(".case_slider_two").length) {
          $('.case_slider_two').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_case2'),
              nextArrow: $('.next_case2'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              centerMode:true,
              autoplaySpeed: 3000,

            });
        }



// ------------------------ Product Slider One
        if($(".product_slider_one").length) {
          $('.product_slider_one').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_p1'),
              nextArrow: $('.next_p1'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Product Slider Two
        if($(".product_slider_two").length) {
          $('.product_slider_two').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_p2'),
              nextArrow: $('.next_p2'),
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Product Slider Three
        if($(".product_slider_three").length) {
          $('.product_slider_three').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_p3'),
              nextArrow: $('.next_p3'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Product Slider Four
        if($(".product_slider_four").length) {
          $('.product_slider_four').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_p4'),
              nextArrow: $('.next_p4'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 3000,
              responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }



// ------------------------ Full Page Setup One
        if($("#page-scroll-container-one").length) {
          $('#page-scroll-container-one').pagepiling({
            scrollingSpeed: 50,
            loopTop: true,
            loopBottom: true,
          });
        }


// ------------------------ Full Page Setup Two
        if($("#page-scroll-container-two").length) {
          $('#page-scroll-container-two').pagepiling({
            scrollingSpeed: 50,
            loopTop: true,
            loopBottom: true,
          });
        }


// ---------------------------- Select Dropdown
        if($('select').length) {
          $('.theme-select-menu').selectize();
        }

// ------------------------ Credit Card Option 
        if($("#credit-card").length) {
          $(".payment-radio-button").on('click',function(){
             if ($("#credit-card").is(":checked")) {
               $(".credit-card-form").show(300);
             } else {
               $(".credit-card-form").hide(300);
             }
           });
        }

// ----------------------- SVG convert Function
        $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
    
        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');
    
            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
    
            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            
            // Check if the viewport is set, else we gonna set it if we can.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
    
            // Replace image with new SVG
            $img.replaceWith($svg);
    
            }, 'xml');
    
        });

// ------------------------ Product Quantity Selector
        if ($(".product-value").length) {
            $('.value-increase').on('click',function(){
              var $qty=$(this).closest('ul').find('.product-value');
              var currentVal = parseInt($qty.val());
              if (!isNaN(currentVal)) {
                  $qty.val(currentVal + 1);
              }
          });
          $('.value-decrease').on('click',function(){
              var $qty=$(this).closest('ul').find('.product-value');
              var currentVal = parseInt($qty.val());
              if (!isNaN(currentVal) && currentVal > 1) {
                  $qty.val(currentVal - 1);
              }
          });
        }
        

// --------------------------------- Contact Form
          // init the validator
          // validator files are included in the download package
          // otherwise download from http://1000hz.github.io/bootstrap-validator

        if($("#contact-form").length) {
            $('#contact-form').validator();
            // when the form is submitted
            $('#contact-form').on('submit', function (e) {

                // if the validator does not prevent form submit
                if (!e.isDefaultPrevented()) {
                    var url = "inc/contact.php";

                    // POST values in the background the the script URL
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            // data = JSON object that contact.php returns

                            // we recieve the type of the message: success x danger and apply it to the
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;

                            // let's compose Bootstrap alert box HTML
                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                            // If we have messageAlert and messageText
                            if (messageAlert && messageText) {
                                // inject the alert to .messages div in our form
                                $('#contact-form').find('.messages').html(alertBox);
                                // empty the form
                                $('#contact-form')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            });
          }

    
$(window).on ('load', function (){ // makes sure the whole site is loaded

// -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});



// ------------------------------- AOS Animation
        // if ($("[data-aos]").length) { 
        //     AOS.init({
        //     duration: 1000,
        //     mirror: true
        //   });
        // }
        
// ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            buttons: [
              "zoom",
              //"share",
              "slideShow",
              //"fullScreen",
              //"download",
              "thumbs",
              "close"
            ],
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }



// ----------------------------- isotop gallery
        if ($("#isotop-gallery-wrapper").length) {
            var $grid = $('#isotop-gallery-wrapper').isotope({
              // options
              itemSelector: '.isotop-item',
              percentPosition: true,
              masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
              }

            });

            // filter items on button click
            $('.isotop-menu-wrapper').on( 'click', 'li', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
                });
            });
        }


    });  //End On Load Function
    
})(jQuery);