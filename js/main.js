$( document ).ready(function() {
  (($) => {

    let $creditRange = $('.js-credit-range');
    let $creditInput = $('.js-credit-input');

    function init() {
      $creditRange.on('input', addValue);
      $('.minus').on('click', reduceValue);
      $('.plus').on('click', add);
      $creditRange.on('input', changeRangeBackground);
    }

    init();

    let monparent;

    $creditInput.val($creditRange.attr('value'));

    $creditRange.on('input', function(){
      monparent=this.parentNode;

      value=$(monparent).find($creditInput);
      $($creditInput).val(this.value);
    });

    $creditInput.on('input', function(){
      monparent=this.parentNode;
      $creditRange=$(monparent).find('.input-range');
      $($creditRange).val(this.value);
    });

    function addValue() {
      let value = $creditRange.val();
      $creditInput.attr('value', value).addClass('is-changed');
    }

    function changeRangeBackground (e) {
      let min = e.target.min,
        max = e.target.max,
        val = e.target.value;

      $(e.target).css({
        'background': 'rgba(255, 255, 255, 0.28) linear-gradient(#ababb2, rgba(171, 171, 178, 0.51)) no-repeat',
        'backgroundSize': (val - min) * 100 / (max - min) + '% 100%',

    });
    }

    function reduceValue() {
      let count = parseFloat($creditRange.val()) - 1;
      count = count < 1 ? 1 : count;
      $creditRange.val(count);
      $creditInput.attr('value', count).addClass('is-changed');
      $creditInput.val(count);
      return false;
    }

    function add() {
      let count = parseFloat($creditRange.val()) + 1;
      count = count < 1 ? 1 : count;
      $creditRange.val(count);
      $creditInput.attr('value', count).addClass('is-changed');
      $creditInput.val(count);
      return false;
    }
  })(jQuery);

  $('.burger').on('click', showBurger);
  $('.close').on('click', hideBurger);

  function showBurger(e) {
    e.preventDefault();
    $('.burger-menu').slideDown(400);
  }

  function hideBurger(e) {
    e.preventDefault();
    $('.burger-menu').slideUp(400);
  }

  $('#surname').on('click', showField);

  function showField() {
    $('#js-hidden').slideToggle(300);
  }

  $('.language__option').on('click', langToggler);

  function langToggler() {
    $('.language__option').removeClass('is-active');
    $(this).addClass('is-active');
  }



  if ($(window).width() < 767) {
    $('.js-pill').on('click', hideMenu);
    $('.profile .signed').on('click', showMenu);
    $('.signed-back').on('click', hideMenu);

    function hideMenu() {
      $('.menu-part').slideUp();
    }

    function showMenu() {
      $('.menu-part').slideDown();
    }
  }

  $('#male').on('click', hideCheckbox);
  $('#female').on('click', showCheckbox);

  function hideCheckbox() {
    $('.register-form').find($('.surname')).slideUp();
    $('#js-hidden').slideUp();
  }

  function showCheckbox() {
    $('.register-form').find($('.surname')).slideDown();
  }

  $('.toggler').click(function () {
    if ($(this).is(':checked')) {

      $('.register-button').removeAttr('disabled'); //enable input

    } else {
      $('.register-button').attr('disabled', true); //disable input
    }
  });

  $('li[rel="js-options"]').on('click', showHidden);
  $('li[rel="js-revenue"]').on('click', showRevenue);

  function showHidden() {
    $('.js-hidden-block').show();
  }
  function showRevenue() {
    $('.js-revenue-block').slideDown();
  }

  $('#id-check').on('change', idCheck);
  $('#pass-check').on('change', passCheck);

  function idCheck() {

    if ($(this).is(':checked')) {
      $('.id').slideDown();
      $('.passport').hide();
    }
  }

  function passCheck() {

    if ($(this).is(':checked')) {
      $('.passport').slideDown();
      $('.id').hide();
    }
  }

  $('.js-check').on('click', showBlock);

  function showBlock() {
    $('.js-checked-block').stop().fadeToggle();
  }

  $(function() {
    'use strict';

    var body = $('js-phone-val');

    function goToNextInput(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('input');

      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }

      if (key === 9) {
        return true;
      }

      if (!sib || !sib.length) {
        sib = body.find('input').eq(0);
      }
      sib.select().focus();
    }

    function onKeyDown(e) {
      var key = e.which;

      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }

      e.preventDefault();
      return false;
    }

    function onFocus(e) {
      $(e.target).select();
    }

    body.on('keyup', 'input', goToNextInput);
    body.on('keydown', 'input', onKeyDown);
    body.on('click', 'input', onFocus);
  });
});

$('.verified--error').on('click', function (e) {
  e.preventDefault();
  $('.verified-error__repeat').fadeIn();
});

$('#verify-phone').on('click', showVerificationPhone);

function showVerificationPhone (e) {
  e.preventDefault();
  $('.phone-val').slideToggle();
}

$('.js-credit-range-sum').on('input', countSum);

function countSum() {
  let value = $('.js-credit-range-sum').val();
  $('.js-sum').text(value);
}


$('.js-credit-range-date').on('input', countDate);

function countDate() {
  let value = $('.js-credit-range-date').val();
  $('.js-date').text(value);
}