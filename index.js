var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        let navbar = document.getElementById("navbar");
        console.log(navbar.offsetHeight);
        navbar.style.top = "-"+navbar.offsetHeight + "px"
    }
    prevScrollpos = currentScrollPos;
}