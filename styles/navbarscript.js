var prevScrollpos = window.pageYOffset;
var scrollClick = false;

addEventListener("scroll", function() {
    if (scrollClick) {
        scrollClick = false;
        return;
    }
    let currentScrollPos = window.pageYOffset;
    let navbar = document.getElementById("navbar");
    if (prevScrollpos > currentScrollPos || currentScrollPos < navbar.offsetHeight) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-"+navbar.offsetHeight + "px"
    }
    prevScrollpos = currentScrollPos;
})

addEventListener("mousemove", function(e) {
    let currentScrollPos = window.pageYOffset;
    let y = e.clientY;

    let navbar = document.getElementById("navbar");
    if (y < navbar.offsetHeight) {
        document.getElementById("navbar").style.top = "0";
    }
    prevScrollpos = currentScrollPos;

})

function onNavBarButtonClick(){
    scrollClick = true;

}