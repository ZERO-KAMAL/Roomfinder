$(".card").css('background', function () {
    var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
    return bg;
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.navbar').addClass("fixed")
        $('.arrow').show();
    } else {
        $('.navbar').removeClass("fixed")
        $('.arrow').hide();
    }
})
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow")
  })

// login

$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


const toggleForm = () => {
    const container = document.querySelector('.container');
    container.classList.toggle('active');
  };
  
