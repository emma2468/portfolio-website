$(window).on("load",sidenVises);

function sidenVises(){
    console.log("sidenVises");
    $(".menu").on("click",menubutton);
}

function menubutton(){
    console.log("menu");
    $("nav").toggleClass("hidden");
    $(".menu").toggleClass("cross");
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button").style.display = "block";
    } else {
        document.getElementById("button").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
