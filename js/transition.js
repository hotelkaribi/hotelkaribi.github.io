// Copyright (c) Sors

var imgArray =  ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
var ranNum = ranNumm();
var imagePath = "images/";
          
function ranNumm()
{
    return Math.floor(Math.random()*imgArray.length); 
}
                
function SetBodyImage()
{                       
     $('body').css('background-image', 'url('+imagePath + imgArray[ranNum] + ')').delay(4000).fadeTo(10, 1.0);                         
}

function SetDivImage()
{         
      var $mybody = $('body').css("background-image", "url("+imagePath+ imgArray[ranNum] +")");
      var $active = $('#divBackgroundId').css("background-image", "url("+imagePath+ imgArray[ranNum] +")");                  
                                        
      $active.fadeOut(0,0.15);
      $active.fadeTo(3000, 1.0);
      //$active.delay(4000).fadeIn(1500);
       //SetBodyImage();
       
      
      //$mybody.fadeOut(0,0.15);
      //$mybody.fadeTo(10, 1.0);
      //$mybody.delay(4000).fadeIn(1500);
      
      
     
                      
      ranNum = ranNumm();
      ranNum2 = ranNumm();                  
      var $next = $('#divBackgroundId').css("background-image", "url("+imagePath+ imgArray[ranNum] +")");
      var $future = $('#divBackgroundId').css("background-image", "url("+ imagePath+imgArray[ranNum2] +")");
      
      
   
}
         
setInterval(SetDivImage, 10000); 