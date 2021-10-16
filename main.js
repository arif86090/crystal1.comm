


// mixit up

 $(document).ready(function(){
var mixer=mixitup(".mx-it");});


// owl-1
       $('.aboutt').owlCarousel({
                  loop:true,
                  margin:10,
                  nav:true,
                  responsive:{
           0:{
            items:1
                },
           600:{
            items:3
                  },
           1000:{
            items:3
                 }
             }
              })

// // home
 $('.home').owlCarousel({
                  loop:true,
                  margin:10,
                  nav:true,
                  responsive:{
           0:{
            items:1
                },
           600:{
            items:1
                  },
           1000:{
            items:1
                 }
             }
              })



 // ########## nevbar#########
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop()>400) {
    $('.main-navbar').addClass('active');
        }else {
            $('.main-navbar').removeClass('active');
        }
    })
    })



var slider=document.querySelector('.navbar-contant');
    var xx=document.querySelector('.navbar-togglor');
    document.querySelector('.manu').addEventListener('click',function(){
        slider.classList.toggle('active');
        xx.classList.toggle('active');
    })


  

  
// tab  

var contact1= document.querySelector('#contact-1');
var contact2= document.querySelector('#contact2');
var contact3= document.querySelector('#contact3');

var btn1= document.querySelector('#btn1');
var btn2= document.querySelector('#btn2');
var btn3= document.querySelector('#btn3');

function first(){
  contact1.style.transform="translateX(0)";
  contact2.style.transform="translateX(100%)";
  contact3.style.transform="translateX(100%)";
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');

  
}
function second(){
  contact1.style.transform="translateX(100%)";
  contact2.style.transform="translateX(0)";
  contact3.style.transform="translateX(100%)";
  btn2.classList.add('active');
  btn1.classList.remove('active');  
  btn3.classList.remove('active');
    
  
}
function third(){
  contact1.style.transform="translateX(100%)";
  contact2.style.transform="translateX(100%)";
  contact3.style.transform="translateX(0)";
  btn3.classList.add('active'); 
  btn1.classList.remove('active');
  btn2.classList.remove('active');    
  
}

// aos animation
 AOS.init({
      duration:1000
  });
