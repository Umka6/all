/*-----------------------------------------------------------
* Template Name    : Knight
* Author           : beingeorge
* Version          : 1.0
* Created          : Sep 2019
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('.preloader').fadeOut();

        setTimeout(function(){
            $('.intro-section').addClass('animate-now')
            textAnimate();    
        }, 500);
        
    });

    /* ---------------------------------------------- /*
    * Text Animate 
    /* ---------------------------------------------- */

    function textAnimate() {
        if($('#text').length > 0){
            var text = document.getElementById('text');
            var newDom = '';
            var animationDelay = 6;

            for(let i = 0; i < text.innerText.length; i++)
            {
                newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
            }

            text.innerHTML = newDom;
            var length = text.children.length;

            for(let i = 0; i < length; i++)
            {
                text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
            }
        }
    }

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.navbar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');

        if($('.navbar').hasClass('active')){
            $('.navbar').removeClass('active')
            $('.ham').removeClass('active')
        }

        event.preventDefault();
    });

    $('.navbar-toggler').on('click', function(){
        $('.navbar').toggleClass('active');
        $(".ham").toggleClass('active');
    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    // $(".navbar-collapse").scrollspy();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })



    /* ---------------------------------------------- /*
    * Initialize shuffle plugin
    /* ---------------------------------------------- */

    $(window).on('load', function () {


        var $portfolioContainer = $('.filter-container');

        $('#filter a').on('click', function (e) {
            e.preventDefault();

            $('#filter a').removeClass('active');
            $(this).addClass('active');

            var group = $(this).attr('data-group');
            var groupName = $(this).attr('data-group');

            $portfolioContainer.shuffle('shuffle', groupName );
        });

    });


    /* ---------------------------------------------- /*
    * Initialize imagesLoaded.js
    /* ---------------------------------------------- */

    var ImageDemo = (function($, imagesLoaded) {
    var $projectsContainer = $('.filter-container'),
        $imgs = $projectsContainer.find('img'),
        imgLoad,

    init = function() {
        imgLoad = new imagesLoaded($imgs.get());
        imgLoad.on('always', onAllImagesFinished);
    },

    onAllImagesFinished = function(instance) {
        // Adds visibility: visible;
        $projectsContainer.addClass('images-loaded');

        // Initialize shuffle
        $projectsContainer.shuffle({
            itemSelector: '.portfolio-item',
            delimeter: ' '
        });

    };

    return {
        init: init
    };

    }( jQuery, window.imagesLoaded ));

    $(document).ready(function() {
        ImageDemo.init();
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        }
    });


    /* ---------------------------------------------- /*
    * owlCarousel - Init
    /* ---------------------------------------------- */

    $("#owl-testimony").owlCarousel({
        loop:true,
        items:1,
        nav:false,
        dots: true
    });

    $('#owl-blog').owlCarousel({
        loop:true,
        items:2,
        nav:true,
        margin: 30,
        autoWidth:true,
        dots: false
    });

    /* ---------------------------------------------- /*
    * Banner Wave - Init
    /* ---------------------------------------------- */


    if($('#canv').length > 0){
        var c = document.getElementById('canv');
        var canvasBg = c.getAttribute("data-bgColor");
        var context = c.getContext('2d');

        var w = c.width = window.innerWidth;
        var h = c.height = window.innerHeight;

        var draw = function(a, b, t) {
          context.lineWidth = 0.8;
          context.fillStyle = canvasBg;
          context.fillRect(0, 0, w, h);
          for (var i = -60; i < 60; i += 1) {
            context.strokeStyle = 'hsla(277, 95%, 15%, .5)';
            context.beginPath();
            context.moveTo(0, h / 2);
            for (var j = 0; j < w; j += 10) {
              context.lineTo(10 * Math.sin(i / 10) +
                j + 0.008 * j * j,
                Math.floor(h / 2 + j / 2 *
                  Math.sin(j / 50 - t / 50 - i / 118) +
                  (i * 0.9) * Math.sin(j / 25 - (i + t) / 65)));
            };
            context.stroke();
          }
        }
        var t = 0;

        window.addEventListener('resize', function() {
          c.width = w = window.innerWidth;
          c.height = h = window.innerHeight;
          context.fillStyle = 'hsla(277, 95%, 55%, 1)';
        }, false);

        var run = function() {
          window.requestAnimationFrame(run);
          t += 1;
          draw(33, 52 * Math.sin(t / 2400), t);
        };

        run();
    }
    

    /* ---------------------------------------------- /*
    * mouse follower remove area 
    /* ---------------------------------------------- */

    $("a, button").mouseenter(function () {
        $("#follower").addClass("active");
    });
    $("a, button").mouseleave(function () {
        $("#follower").removeClass("active");
    });

    $(document).on('mousemove', function(e){
        var width = $(document).width();
        var height = $(document).height();

        if(width > 991) {
        $('#follower').css({'display':'block','left': Number((e.pageX)-10),'top': Number((e.pageY)-10),'z-index': '9999999'});
        if(Number((e.pageX)+24) > width) { $('#follower').css({'display': 'none'}); }
        if(Number((e.pageX)) < 10) { $('#follower').css({'display': 'none'}); }
        if(Number((e.pageY)+24) > height) { $('#follower').css({'display': 'none'}); }
        if(Number((e.pageY)) < 10) { $('#follower').css({'display': 'none'}); }

        $('a, button').hover(
            function() {
                $('#follower').css({'transform':'scale(7)','border':'none','background':'rgba(0,0,255,0.5)'});
            },
            function() {
                $('#follower').css({'transform':'scale(1)','border':'2px #6C63FF solid','background':'#6C63FF'});
            }
        );
        }
    });


}(window.jQuery);

