(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

/*======================================
=            js-for-setting            =
======================================*/

$(".temp-setting").click(function()
{
  $(".temp-change-setting-wrap").toggleClass('active');
  $(".temp-font-submenu-list li").click(function() {
   var a = $(this).attr('data-font');
   $("body").css("font-family" ,a);
 });
});

/*=====  End of js-for-setting  ======*/

 // for background image
 $(document).on('click','.temp-image-radio-btn',function(){
  var image1 = $(this).attr('data-image1'); 
  $(".mwb_form_wrapper").css('background', image1);
  $(".mwb_form_wrapper").css('background-size', 'cover');
});

  /*=======================================
 =            for-font-family            =
 =======================================*/
 

      // for font-family dropdown
      $(document).ready(function(){
        $(".temp-main-font-family-list").click(function(){
          $(".temp-font-submenu-list").slideToggle("slow");
        });

        // for swaping value in dropdown
        $('.temp-list').click(function() {
          $('.temp-list').removeClass('hide_class');
          var litext=$(this).children('a').html();
          $(document).find('#temp-menu').text(litext);
          $(this).addClass('hide_class');
        });
      });


      /*=====  End of for-font-family  ======*/



      /*=====================================
  =            color-setting            =
  =====================================*/
  $(document).on('click','.temp-color-radio-btn',function(){
    var color1 = $(this).attr('data-color1'); 
    $(".mwb_form_navigation").css('background', color1, "important");
    $("h1").css('background-color', color1, "important");
    $("input, textarea, select").css('border-color', color1, "important");
    $(".mwb_form_btn_wrap .mwb_form_btn").css('background', color1, "important");
    $(".temp-checkbox-wrap").css('color', color1, "important");
    $(".temp-checkbox-wrap .checkmark").css('background', color1, "important");
    $(".temp-font-family .temp-main-font-family-list .temp-font-menu .temp-font-submenu-list").css('background', color1, "important");
    $(".temp-font-family .temp-main-font-family-list .temp-font-menu").css('border-color', color1,);
    $(".temp-custom-radio-button input:checked ~ .temp-radio-checkmark").css('background', color1);
    $(".temp-custom-radio-button .temp-radio-checkmark").css('background', color1, "important");
    $(".mwb_close_btn").css('background', color1, "important");


    // hover
    $(".mwb_form_navigation .mwb_nav_links .nav-link").hover(function(){
      $(this).css("color", color1,"important");
    },
    function(){
      $(this).css("color", "");
    });

    $(".temp-font-submenu-list li a").hover(function(){
      $(this).css("color", color1,"important");
    },
    function(){
      $(this).css("color", "");
    });



  });

  
  
  /*=====  End of color-setting  ======*/