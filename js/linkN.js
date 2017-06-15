
 
 function linkSkype()
 {
	window.open("skype:hotelkaribi?call") 
 }
 
 
 function linkicq()
 {
	 
	window.open("http://www.icq.com/people/cmd.php?uin=365356991&action=message") 
 }
 

 
 function linkMail()
 {
	window.open("mailto:hotelkaribi@gmail.com")
 }


 function IsMobile() 
 {
     if ( Modernizr.touch )
     { 
         return true;
     }
     return false;
 }

 function CheckHTML5()
 {

     if (Modernizr.canvas)
     {

     }
     else
     {
         document.write('<div class="container" id="divBackgroundId" align="center" > ' +
                           ' <span style="vertical-align:-99px"> ' +
                           '  <a> Your browser not support HTML5 </a>' +                                                    
                           '  </span>   ' +
                           '</div>');
     }
 }


 function CheckHTML5Home()
 {

     if (!Modernizr.canvas)  
     {
         document.write('<div class="container" id="divBackgroundId" align="center" > ' +
                           ' <span style="vertical-align:-99px"> ' +
                           '  <a> Your browser not support HTML5 </a>' +
                           ' <br>' +
                           ' <a  href="../bg/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY:Courier, monospace; " > ' +
                           '     <img src="images/bgB.gif" href="../eng/index.html" alt="ENG" width="38" height="27"/>' +
                           ' </a>  ' +
                           ' &nbsp&nbsp&nbsp&nbsp&nbsp' +
                           ' <a  href="../eng/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY: Courier, monospace; " > ' +
                           '     <img src="images/engB.gif" href="../eng/index.html" alt="ENG" width="38" height="27"/>' +
                           ' </a> ' +
                           ' &nbsp&nbsp&nbsp&nbsp&nbsp' +
                           ' <a  href="../ru/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY: Courier, monospace; " > ' +
                           '     <img src="images/ruB.gif" href="../eng/index.html" alt="ENG" width="38" height="27"/>' +
                           ' </a>' +
                           ' <br>' +
                           ' <a  href="../bg/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY: Courier, monospace; " alt="Начало" >Почивка на море</a>  &nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp ' +
                           ' <a  href="../eng/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY: Courier, monospace; " alt="Home" >Sea Holiday</a> &nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp ' +
                           '<a  href="../ru/index.html" style="font-weight: bold; FONT-SIZE:32px; FONT-FAMILY: Courier, monospace; " alt="Главная" >Отдых на море</a>  ' +
                           '     </span>   ' +
                           '</div>');
     }
 }

 function CheckHTML5OpenUrlOnFalse(pageUrl)
 {    
     //var isMobile = IsMobile();
     //if (isMobile)
     //{
     //    pageUrl = "m_"+pageUrl;
     //}


     if (!Modernizr.canvas)
     {
         window.open(pageUrl, '_self', false);                 
     }
 }
 
 function CheckHTML5OpenUrlOnTrue(pageUrl)
 {
     if (Modernizr.canvas)
     {
         window.open(pageUrl, '_self', false);
     }
 }
 
 function CheckIsSupportHTML5()
 {
     if(Modernizr.canvas)
     {
        return true;
     }
     else
     {
        return false;
     }
     return false;
     
 }
 
 
 function DOMInit()
 {    
    (function($){
           $(function(){
              // Run on DOM ready
              
             
              
           });

          // Run right away
    })(jQuery);
 }
 
 function DOMInit2()
 { 
    $( document ).ready( function() {
  
 
    });  
 }
 
 
 