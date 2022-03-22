
//menu
const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Counter 
const counters = document.querySelectorAll('.skills__ratings-counter'),
  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// scroll

$(window).scroll(function() {
  if($(this).scrollTop() > 1100) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#up'], a[href^='#about'], a[href^='#portfolio'], a[href^='#skills'], a[href^='#contacts'], a[href^='#price'], a[href^='#resume']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});














