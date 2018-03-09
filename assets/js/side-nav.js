$(".site-title").on("click",function () {
    $(".side-nav").fadeToggle(function () { $("#navbar").attr("width", 0); });
});

$("#all").on("click", function () {
    $(".gallery-item").fadeIn();
});

$("#development").on("click", function () {
    $(".research").fadeOut();
    $(".design").fadeOut();
    $(".development").fadeIn();
});

$("#design").on("click", function () {
    $(".research").fadeOut();
    $(".development").fadeOut();
    $(".design").fadeIn();
    
});

$("#research").on("click", function () {
    $(".development").fadeOut();
    $(".design").fadeOut();
    $(".research").fadeIn();
});
