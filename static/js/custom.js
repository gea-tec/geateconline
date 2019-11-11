// Page loading animation
$(window).on('load', function() {

  $("#preloader").animate({
    'opacity': '0'
  }, 600, function(){
    setTimeout(function(){
      $("#preloader").css("visibility", "hidden").fadeOut();
    }, 300);
  });
});

/**
  shave - Shave is a javascript plugin that truncates multi-line text within a html element based on set max height
  @version v2.5.3
  @link https://github.com/dollarshaveclub/shave#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (jeffry.in)
  @license MIT
**/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.shave = factory());
  }(this, (function () { 'use strict';
  
    function shave(target, maxHeight) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!maxHeight) throw Error('maxHeight is required');
      var els = typeof target === 'string' ? document.querySelectorAll(target) : target;
      if (!els) return;
      var character = opts.character || '…';
      var classname = opts.classname || 'js-shave';
      var spaces = typeof opts.spaces === 'boolean' ? opts.spaces : true;
      var charHtml = "<span class=\"js-shave-char\">".concat(character, "</span>");
      if (!('length' in els)) els = [els];
  
      for (var i = 0; i < els.length; i += 1) {
        var el = els[i];
        var styles = el.style;
        var span = el.querySelector(".".concat(classname));
        var textProp = el.textContent === undefined ? 'innerText' : 'textContent'; // If element text has already been shaved
  
        if (span) {
          // Remove the ellipsis to recapture the original text
          el.removeChild(el.querySelector('.js-shave-char'));
          el[textProp] = el[textProp]; // eslint-disable-line
          // nuke span, recombine text
        }
  
        var fullText = el[textProp];
        var words = spaces ? fullText.split(' ') : fullText; // If 0 or 1 words, we're done
  
        if (words.length < 2) continue; // Temporarily remove any CSS height for text height calculation
  
        var heightStyle = styles.height;
        styles.height = 'auto';
        var maxHeightStyle = styles.maxHeight;
        styles.maxHeight = 'none'; // If already short enough, we're done
  
        if (el.offsetHeight <= maxHeight) {
          styles.height = heightStyle;
          styles.maxHeight = maxHeightStyle;
          continue;
        } // Binary search for number of words which can fit in allotted height
  
  
        var max = words.length - 1;
        var min = 0;
        var pivot = void 0;
  
        while (min < max) {
          pivot = min + max + 1 >> 1; // eslint-disable-line no-bitwise
  
          el[textProp] = spaces ? words.slice(0, pivot).join(' ') : words.slice(0, pivot);
          el.insertAdjacentHTML('beforeend', charHtml);
          if (el.offsetHeight > maxHeight) max = spaces ? pivot - 1 : pivot - 2;else min = pivot;
        }
  
        el[textProp] = spaces ? words.slice(0, max).join(' ') : words.slice(0, max);
        el.insertAdjacentHTML('beforeend', charHtml);
        var diff = spaces ? " ".concat(words.slice(max).join(' ')) : words.slice(max);
        var shavedText = document.createTextNode(diff);
        var elWithShavedText = document.createElement('span');
        elWithShavedText.classList.add(classname);
        elWithShavedText.style.display = 'none';
        elWithShavedText.appendChild(shavedText);
        el.insertAdjacentElement('beforeend', elWithShavedText);
        styles.height = heightStyle;
        styles.maxHeight = maxHeightStyle;
      }
    }
  
    return shave;
  
  })));
  
  //throttle function

function throttle(fn, wait) {

    var time = Date.now();
  
    return function() {
  
      if ((time + wait - Date.now()) < 0) {
  
        fn();
  
        time = Date.now();
  
      }
  
    }
  
  }

// Duration is the amount of time in between slides,
  // and fade is value that determines how quickly the next image will fade in

function backStrech1() {
  var isBackstretch = $(".root");
  if (isBackstretch.hasClass('bstrtch')) {
    var picturediv = $(".picture");
    var slogandiv = $(".slogan");
    var slidePictures = document.getElementsByClassName("picture-slides");
    var slides = slidePictures.length;
    var slidesArray = [];

    if (slides == 0) {
      slogandiv.css("width", "100%");
      picturediv.css("display", "none");

    } else {

      for (var i = 0; i < slides; i += 1) {
        slidesArray[i] = slidePictures[i].textContent;
      }

      $('.picture').backstretch(slidesArray, {duration: 1800, fade: 750});    
    }
  }
}

backStrech1();

// $('.picture').backstretch([
//    "/images/bgslide1.jpg"
//   , "/images/bgslide2.jpg"
//   , "/images/bgslide3.jpg"
// ], {duration: 3000, fade: 750});  


// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".mobile-nav");
var fadeCover = document.querySelector(".fade-cover");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  //Open/close menu
  menu.classList.toggle("active");
  //fade in cover
  fadeCover.classList.toggle("active");
});

//for redirecting to blog


const blogIndirect = document.querySelectorAll(".blogindirect");
const blogDirect = document.querySelectorAll(".blogdirect");
const mobileNav = $(".mobile-nav");
const fadecover = $(".fade-cover");
const hamburger2 = document.querySelector(".hamburger");
for (const blogdirect of blogDirect) {
  blogdirect.addEventListener('click', function(event) {
    if (mobileNav.hasClass('active')) {
      document.getElementById('blog').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
      mobileNav.removeClass('active');
      fadecover.removeClass('active');
      hamburger2.classList.toggle("is-active");
    } else {
      document.getElementById('blog').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
    }
  })
}

for (const blogindirect of blogIndirect) {
  blogindirect.addEventListener('click', function(event) {
    
      window.location.href="/#scrollblog"; 
  })
}

$(window).bind('load', function() {
  if (window.location.hash === "#scrollblog") {
    document.getElementById('blog').scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'end' });
  }
});


//Custom javascript for gea-tec.com

//initialize and configure swiper instances
    //swiper instance in cover
    var myswiper = new Swiper('.s1', {
        centeredSlides: false,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
    //swiper instance for blog
    var swiper2 = new Swiper('.s2', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        451: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        751: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      },
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
      }},
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //swiper instance for estudio de suelos
    var interleaveOffset = 0.5;

    var swiperOptions = {
      loop: true,
      speed: 1000,
      grabCursor: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
       },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        progress: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            var slideProgress = swiper.slides[i].progress;
            var innerOffset = swiper.width * interleaveOffset;
            var innerTranslate = slideProgress * innerOffset;
            swiper.slides[i].querySelector(".slide-inner").style.transform =
              "translate3d(" + innerTranslate + "px, 0, 0)";
          }      
        },
        touchStart: function() {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = "";
          }
        },
        setTransition: function(speed) {
          var swiper = this;
          for (var i = 0; i < swiper.slides.length; i++) {
            swiper.slides[i].style.transition = speed + "ms";
            swiper.slides[i].querySelector(".slide-inner").style.transition =
              speed + "ms";
          }
        }
      }
    };
    
    var swiper = new Swiper('.s3', swiperOptions);
     var swiper4 = new Swiper('.s4', {
       centeredSlides: false,
       loop: true,
       slidesPerView: 1,
       slidesPerGroup: 1,
       effect: 'flip',
       flipEffect: {
         rotate: 30,
         slideShadows: false,
       },
       autoplay: {
           delay: 3000,
           disableOnInteraction: false,
       }
   });

  

shave('.blog-content h3', 50);
//define text truncation in blog description based of window width
$(window).bind('resize load', function() {
  shave('.blog-content h3', 40);

  if ($("body").width() <= 430) {
    var maxY = 100;
    
    shave('.text p', maxY);
  } else if ($("body").width() <= 527) {
    var maxY = 80;
    
    shave('.text p', maxY);

  } else {
    var maxY = 100;
    
    shave('.text p', maxY);
  }


});
    
//Initialize animation on scroll
AOS.init({
  once: true, // whether animation should happen only once - while scrolling down
});


//anime.js
function animeJs(){
  
  var isHome = $(".root");

  if (isHome.hasClass('home')) {
    //Initialize and configure anime.js text instances
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
    })
    .add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 200,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
    }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
    });
  }
}

animeJs();

//initialize listjs plugin 
function listJs(){
  
  var isHome = $(".root");

  if (isHome.hasClass('client-root')) {
    var options = {
      valueNames: [ 'name', 'link' ]
    };

    var userList = new List('users', options);
  }

}

listJs();

  
// Sticky headers
$(window).bind('scroll resize load', function() {

  if ($("body").width() > 992) {

    var header = $("#navFullsize");
    var headerHeight = $(".main-header").height();
    var logo = $('.logo img');
    var mainHeader = $('.main-header');
    var ulFont = $('.nav-container>nav>ul');
    var scrollTop = $(window).scrollTop();
    var currentmenuItem = $('.current-menu-item > a');
    var dropDown = $('.current-menu-item');
    var navLinks = $('.change-link-color>li>a')
    var social = $('.header-social');
    var subMenu = $('.sub-menu');
    if (scrollTop > headerHeight) {

      if (!header.hasClass('sticky')) {

        navLinks.css({"color":"#fff"});
        dropDown.addClass('after-change');
        ulFont.css({"font-weight":"100"});
        subMenu.toggleClass('activ');
        mainHeader.addClass('clear-max-width');
        currentmenuItem.css({"color":"#00941f", "border":"none"});
        dropDown.css({"color":"#00941f"});
        header.addClass('sticky');
        header.animate({top: 0}, 600);
       
      }
      } else {

      if (header.hasClass('sticky')) {
        subMenu.toggleClass('activ');
        if (header.hasClass('second-nav')) {
          navLinks.css({"color":""});
          currentmenuItem.css({"color":""});
          dropDown.removeClass('after-change');
          social.show();
        } else {
          currentmenuItem.css({"color":"#fff", "border":"1px solid #fff"});
        }
        ulFont.css({"font-weight":"600"});
        mainHeader.removeClass('clear-max-width');
        header.removeClass('sticky');
        header.removeAttr('style');

      }
    }
    //remove all active classes of mobile navigation when window is resized horizontally
    $(".header-container").removeClass('sticky-mobile');
    $('.logo img').removeClass('sticky-mobile-img');
    $('.mobile-nav').removeClass('sticky-menu');
    $('.mobile-nav').removeClass('active');
    $('.fade-cover').removeClass('active');
    $('.hamburger').removeClass('is-active');
    $(".header-container").removeAttr('style');
  


   } else {
      var header = $(".header-container");
      var headerHeight = header.height();
      var logo = $('.logo img');
      var menu = $('.mobile-nav');
      var social = $('.header-social');
      var scrollTop = $(window).scrollTop();
      if (scrollTop > headerHeight) {

        if (!header.hasClass('sticky-mobile')) {

          social.hide();
          header.addClass('sticky-mobile');
          logo.addClass('sticky-mobile-img')
          menu.addClass('sticky-menu');

          header.animate({top: 0}, 600);

        }
      } else {

        if (header.hasClass('sticky-mobile')) {

          social.show();
          header.removeClass('sticky-mobile');
          logo.removeClass('sticky-mobile-img')
          menu.removeClass('sticky-menu');
          header.removeAttr('style');

        }
    }
    }

});

$(window).bind('load', function() {
  var titles = document.getElementsByClassName("section-title");
  for (var i = 0; i < titles.length; i += 1) {
    if (titles[i].innerText == "") {
      titles[i].style.display = "none";
    }
  }

  var blogPosts = $('.s2 .swiper-wrapper');

  if (blogPosts[0].innerText == "") {
    $('#blog').css({"display":"none"});
    $('.blogdirect').css({"display":"none"});
    $('.blogindirect').css({"display":"none"});
  }

  var isindirect = document.getElementsByClassName('blogindirect');

  if (isindirect.length > 0) {
    $('#blog').css({"display":"none"});
  }

});

function WpMessage() {
  
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var topic = document.getElementById("topicList").value;
  var message = document.getElementById("message").value;

  var wpmessage = `Buen día, mi nombre es ${name}, y me contacto con respecto a ${topic}. ${message}. Mis detalles de contacto, telf: ${phone}, email: ${email}. Muchas gracias por su atención. `

  if ( name == "" || phone == "" || email == "") {
    document.getElementById('elementID').click();
  }

  var url = `https://api.whatsapp.com/send?phone=593995850844&text=${wpmessage}&source=&data=`

  var win = window.open(url, '_blank');
  win.focus();

}