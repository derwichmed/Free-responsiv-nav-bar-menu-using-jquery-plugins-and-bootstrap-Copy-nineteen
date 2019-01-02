$(function (){
   $('.side_item > div').click(function (){
       //$(this).parent().find('.menu').show();
      $('.menu').hide();
      menuHeight = $(this).parent().find('.menu').height();
      $(this).parent().find('.menu').css('height','0px');
      $(this).parent().find('.menu').show();
        $(this).parent().find('.menu').animate({
            height: menuHeight
        }, 500);
   });
   
   isSideBarHidden = false;
   $('.menu_icon').click(function (){
       if(!isSideBarHidden){
           $('.side_bar').animate({
                width: '0px'
            }, 500,function (){
                $('.side_bar').hide();
            });
            isSideBarHidden = true;
            $('.menu:visible').hide();
       }
        else{
            $('.side_bar').show();
             $('.side_bar').animate({
                width: '220px'
             }, 500);
             isSideBarHidden = false;
        }
   });
});