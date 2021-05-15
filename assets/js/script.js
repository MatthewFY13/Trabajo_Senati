// Comando de menu/navbar
$('.nav_bar__menu').click(function(){
    $('.nav_bar .nav_bar__ul').toggleClass("active");
    $('.nav_bar__menu i').toggleClass("active");
});

var typed = new Typed(".one", {
    strings: ["Programador.", "Diseñador."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});