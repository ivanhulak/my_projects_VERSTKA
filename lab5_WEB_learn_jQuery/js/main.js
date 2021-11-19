// $(document).ready(function (){
    // --------------- form ---------------
    // $(':checkbox').fadeOut(500);
    // $(':radio').fadeOut(500);
    // $(':submit').fadeOut(500);
    // $(':reset').fadeOut(500);
    // $(':file').fadeOut(500);
    // $(':button').fadeOut(500);
    // $(':text').fadeOut(500);
    // $(':password').fadeOut(500);
    // $(':input').fadeOut(500);
    // $('.form1 :input').fadeOut(500);

    // $('.form1 :submit').click(function(e){
    //     if ($('.text1').val() == ""){
    //         e.preventDefault();
    //         alert('Вы не заполнили форму!')
    //     }
    // });

    // $(':text').focus(function(){
    //     $(this).addClass('border');
    // })
    // $(':text').blur(function(){
    //     $(this).removeClass('border');
    // })

    // $('#select1').change(function(){
    //     var v = $('#select1 :selected').val();
        // if (v == 1){
        //     $('#select2').html('<option value="1" selected>disabled 1</option>');
        // }
        // else if (v == 2){
        //     $('#select2').html('<option value="1" selected>disabled 1</option><option value="2" selected>disabled 1</option>');
        // }
        // switch(v) {
        //     case '1':
        //         $('#select2').html('<option value="1" selected>disabled 1</option>');
        //         break
        //     case '2':
        //         $('#select2').html('<option value="1" selected>disabled 1</option><option value="2" selected>disabled 1</option>');
        //         break
        // }
    // })

    // $(':submit').click(function(e){
    //     $('.text1').attr('disabled', 'disabled');
    //     e.preventDefault();
    // })
    // $(':reset').click(function(e){
    //     $('.text1').removeAttr('disabled');
    //     e.preventDefault();
    // })
// });

$(function (){
   $('.accordion').accordion();  // use accordion

   var avilableNames = [
      "Иван",
      "Артём",
      "Никита",
      "Ярослав",
      "Анастасия",
      "Людмила",
      "Светлана",
      "Ирина",
      "Владимир",
      "Владислав",
    ];
    var avilableFathernames = [
      "Иванович",
      "Владимирович",
      "Николаевич",
      "Олександрович",
      "Иллич",
      "Станиславович",
      "Игоревич",
      "Андреевич",
      "Андреевна",
      "Владимировна",
    ];
   $('input[name = "text1"]').autocomplete({
      source: avilableNames
   });
   $('input[name = "text3"]').autocomplete({
      source: avilableFathernames
   });
   $('#datepicker').datepicker();


   // Галерея
   $('.small a').click(function(e){
      if ($('.big img').attr('src') !== $(this).attr('href')){
          $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(1000);
      }
      e.preventDefault();
  })
  $('.button').click(function(){
      $('.gallery').slideToggle(500);
      if ($('.button').text() === '-'){
          $('.button').text('+');
      } else{
          $('.button').text('-');
      }
  })
  $('.small a img').click(function(){
      $('.small a img').fadeTo(500, 1).css({
          'border': 'none',
      })
      $(this).fadeTo(500, 0.6).css({
          'border': '1px dotted red',
      })
  })

   // Видео-слайдер
   var pos = 0,
        slides = $('.slide'),
        numOfSlides = slides.length;

    function nextSlide() {
        // [] returns a vanilla DOM object from a jQuery object/collection
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '-100%' }, 500);
        pos = (pos >= numOfSlides - 1 ? 0 : ++pos);
        slides.eq(pos).css({ left: '100%' }).animate({ left: 0 }, 500);
    }

    function previousSlide() {
        slides[pos].video.stopVideo()
        slides.eq(pos).animate({ left: '100%' }, 500);
        pos = (pos == 0 ? numOfSlides - 1 : --pos);
        slides.eq(pos).css({ left: '-100%' }).animate({ left: 0 }, 500);
    }

    $('.left').click(previousSlide);
    $('.right').click(nextSlide);

    $('.show-btn').click(function(){
      $('.sm-menu').fadeToggle("fast");
    });
});

function onYouTubeIframeAPIReady() {
   $('.slide').each(function (index, slide) {
       // Get the `.video` element inside each `.slide`
       var iframe = $(slide).find('.video')[0]
       // Create a new YT.Player from the iFrame, and store it on the `.slide` DOM object
       slide.video = new YT.Player(iframe)
   })
}