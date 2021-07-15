"use strict";

// upload preview show
(function () {
  var preview = $('.js-preview'),
      open = $('.js-preview-open'),
      close = $('.js-preview-close');
  open.on('click', function () {
    preview.addClass('visible');
  });
  close.on('click', function () {
    preview.removeClass('visible');
  });
})(); // card favorite


(function () {
  var favorite = $('.card__favorite, .options__button_favorite');
  favorite.on('click', function () {
    $(this).toggleClass('active');
  });
})(); // activity checkbox toggle


(function () {
  $('.js-activity-select').on('click', function () {
    $('.activity__group .checkbox__input').prop('checked', true).attr('checked', 'checked');
  });
  $('.js-activity-unselect').on('click', function () {
    $('.activity__group .checkbox__input').prop('checked', false).removeAttr('checked');
  });
})(); // popular add


(function () {
  var add = $('.popular__add');
  add.on('click', function () {
    $(this).toggleClass('active');
  });
})(); // connect wallet


(function () {
  $('.wallet__link').on('click', function (e) {
    e.preventDefault();
    $('.wallet__link').removeClass('active');
    $(this).addClass('active');
    $('.wallet__bg').hide();
    $('.wallet__item').hide();
    $('.wallet__item:first-child').show();
  });
  $('.wallet__item:first-child .wallet__button, .wallet__item:first-child .wallet__code').on('click', function (e) {
    $('.wallet__item:first-child').hide();
    $('.wallet__item:nth-child(2)').show();
  });
  $('.wallet__item:nth-child(2) .wallet__button:first-child').on('click', function (e) {
    $('.wallet__link').removeClass('active');
    $('.wallet__item').hide();
    $('.wallet__bg').show();
  });
  $('.wallet__item:nth-child(2) .wallet__button:nth-child(2)').on('click', function () {
    var hash = window.location.hash;
    $(hash).addClass('registered');
  });
  $('.header__link:last-child').on('click', function (e) {
    $('.header__connect').css('display', 'flex');
    $('.header__item_notification').hide();
    $('.header__item_user').hide();
  });
})();

$(document).ready(function () {
  if (window.location.hash) {
    var hash = window.location.hash;
    $('[data-id="' + hash + '"]').addClass('registered');
  }
});

(function () {
  $('.discover__link, .activity__link, .catalog__link').on('click', function (e) {
    e.preventDefault();
    $('.discover__link, .activity__link, .catalog__link').removeClass('active');
    $(this).addClass('active');
  });
})(); // upload details


$('.preview__clear').on('click', function (e) {
  e.preventDefault();
  $('.field__input').val('');
  $('.select').find('option').attr("selected", false);
  $('.select').find('option:first-child').attr("selected", true);
  $('.select').niceSelect('update');
}); // upload details

$('.catalog__reset').on('click', function (e) {
  e.preventDefault();
  $('.select').find('option').attr("selected", false);
  $('.select').find('option:first-child').attr("selected", true);
  $('.select').niceSelect('update');
  $('.js-slider')[0].noUiSlider.reset();
});
$('.js-popup-close').on("click", function () {
  $.magnificPopup.close();
});
$('.popup_purchase .popup__item .popup__button:first-child').on('click', function () {
  $(this).parents('.popup__item').hide().next().show();
});
$('.footer__note a').on('click', function (e) {
  e.preventDefault();
  $(this).hide();
}); // steps

$('.steps__button').on('click', function () {
  $(this).parents('.steps__item').next().find('.steps__button').removeClass('disabled');
  $(this).parents('.steps__item').addClass('done');
  $(this).addClass('done');
  $(this).text('Done');
});
$('.popup_price .popup__button:first-child').on('click', function () {
  var text = $(this).parents('.popup_price').find('.field__input').val();
  $('.item__currency .item__price:first-child span').text(text);
}); // $('.card__button').on('click', function(){
//     $('.popup__rate').focus();
// });