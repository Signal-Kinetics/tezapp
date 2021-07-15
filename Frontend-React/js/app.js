"use strict";

// check if touch device
function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

if (isTouchDevice()) {
  $('body').addClass('touch-device');
} // header


(function () {
  var header = $('.js-header'),
      items = header.find('.js-header-item'),
      burger = header.find('.js-header-burger'),
      wrapper = header.find('.js-header-wrapper');
  items.each(function () {
    var item = $(this),
        head = item.find('.js-header-head'),
        body = item.find('.js-header-body');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
  burger.on('click', function (e) {
    e.stopPropagation();
    burger.toggleClass('active');
    wrapper.toggleClass('visible');
  });
})(); // global variables


var prevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z" fill="#777e91"/></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z" fill="#23262f"/></svg></button>';
$(document).ready(function () {
  // slider main
  $('.js-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    adaptiveHeight: true,
    speed: 500
  }); // slider popular

  $('.js-slider-popular').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 500,
    responsive: [{
      breakpoint: 1340,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    }]
  }); // slider hot

  $('.js-slider-hot').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 500,
    responsive: [{
      breakpoint: 1179,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    }]
  }); // slider collections

  $('.js-slider-collections').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 500,
    infinite: false,
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-slider-discover').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    speed: 500,
    infinite: false,
    responsive: [{
      breakpoint: 100000,
      settings: "unslick"
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(window).on('resize orientationchange', function () {
    $('.js-slider-resize').slick('resize');
  });
}); // slider

(function () {
  var slider = $('.js-slider');

  if (slider.length) {
    slider.each(function () {
      var _this = $(this),
          min = _this.data('min'),
          max = _this.data('max'),
          start = _this.data('start'),
          end = _this.data('end'),
          step = _this.data('step'),
          tooltips = _this.data('tooltips'),
          postfix = _this.data('postfix');

      var optionStart = [start],
          optionConnect = [true, false],
          optionTooltips = false;

      if (end) {
        optionStart = [start, end];
        optionConnect = true;
      }

      if (tooltips) {
        optionTooltips = [true];

        if (end) {
          optionTooltips = [true, true];
        }
      }

      noUiSlider.create(_this[0], {
        start: optionStart,
        connect: optionConnect,
        step: step,
        tooltips: optionTooltips,
        range: {
          'min': min,
          'max': max
        },
        format: wNumb({
          decimals: 0,
          postfix: postfix
        })
      });
    });
  }
})(); // height windows for ios


var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // toggle body theme

(function () {
  var switchTheme = $('.js-theme'),
      body = $('body');
  switchTheme.on('change', function () {
    if (!body.hasClass('dark')) {
      body.addClass('dark');
      localStorage.setItem('darkMode', "on");
    } else {
      body.removeClass('dark');
      localStorage.setItem('darkMode', "off");
    }
  });
})(); // nice select


$(document).ready(function () {
  $('.select, .select-empty').niceSelect();
}); // footer menu

(function () {
  var head = $('.footer__head'),
      body = $('.footer__body');
  head.on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
  });
})(); // tabs


(function () {
  var tabs = $('.js-tabs');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link'),
        item = thisTabs.find('.js-tabs-item');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    });
  });
  $(document).ready(function () {
    var option = $('.js-tabs-select .option');
    option.on('click', function () {
      var thisOption = $(this),
          indexOption = thisOption.index();
      $('.js-tabs-item').hide();
      $('.js-tabs-item').eq(indexOption).fadeIn();
    });
  });
})(); // faq


(function () {
  var item = $('.faq__item'),
      head = item.find('.faq__head'),
      body = item.find('.faq__body');
  head.on('click', function () {
    var thisHead = $(this);
    thisHead.parents('.faq__item').toggleClass('active');
    thisHead.parents('.faq__item').find('.faq__body').slideToggle();
  });
})(); // activity filters show


(function () {
  var toggle = $('.js-activity-toggle'),
      filters = $('.js-activity-filters');
  toggle.on('click', function () {
    filters.toggleClass('visible');
  });
})(); // actions


(function () {
  var items = $('.js-actions');
  items.each(function () {
    var item = $(this),
        button = item.find('.js-actions-button'),
        body = item.find('.js-actions-body');
    button.on('click', function (e) {
      e.stopPropagation();
      $('.js-options-share').removeClass('active');
      $('.js-options-box').removeClass('active');

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
})(); // magnificPopup


(function () {
  var link = $('.js-popup-open');
  link.magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    removalDelay: 200,
    callbacks: {
      beforeOpen: function beforeOpen() {
        this.st.mainClass = this.st.el.attr('data-effect');
        setTimeout(function () {
          $('.popup__rate').focus();
          $('.popup_price .field__input').focus();
          var tmpStr = $('.popup_price .field__input').val();
          $('.popup_price .field__input').val('');
          $('.popup_price .field__input').val(tmpStr);
        }, 100);
      }
    }
  });
})(); // discover filters


(function () {
  var open = $('.discover__filter'),
      filters = $('.discover__filters');
  open.on('click', function () {
    open.toggleClass('active');
    filters.slideToggle();
  });
})(); // profile file load


(function () {
  var head = $('.js-profile-head'),
      load = $('.js-profile-load'),
      save = $('.js-profile-save');
  load.on('click', function () {
    head.addClass('active');
  });
  save.on('click', function () {
    head.removeClass('active');
  });
})(); // share


(function () {
  var follow = $('.js-user-follow'),
      share = $('.js-user-share, .js-options-share'),
      box = $('.js-user-box, .js-options-box');
  follow.on('click', function () {
    $(this).toggleClass('active');
  });
  share.on('click', function (e) {
    e.stopPropagation();
    share.toggleClass('active');
    box.toggleClass('active');
    $('.js-actions').removeClass('active');
  });
  $('body').on('click', function () {
    share.removeClass('active');
    box.removeClass('active');
  });
  box.on('click', function (e) {
    e.stopPropagation();
  });
})();

$('.main__timer').countdown('2050/04/28 00:00:00').on('update.countdown', function (event) {
  var $this = $(this).html(event.strftime('' + '<span class="main__box"><span class="main__number">%H</span><span class="main__time">Hrs</span></span>' + '<span class="main__box"><span class="main__number">%M</span><span class="main__time">mins</span></span>' + '<span class="main__box"><span class="main__number">%S</span><span class="main__time">secs</span></span>'));
});