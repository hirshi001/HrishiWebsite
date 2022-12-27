

/// Regular CODE

const activeColor = "#04AA6D"

function onLoad() {
    // load
    setActiveElement();
    onResize();
}

function setActiveElement() {

}

function onResize() {
    const topNav = document.getElementById("topnav");
    const height = topNav.offsetHeight
    const elements = document.getElementsByClassName("mpad-top");

    for(let i = 0; i < elements.length; i++) {
        elements[i].style.paddingTop = height.toString() + "px";
    }

    const activeElements = document.getElementsByClassName("active");
    for(let i = 0; i < activeElements.length; i++) {
        const active = activeElements[i];
        active.style.backgroundColor = activeColor;
        active.style.backgroundAttachment = "initial";
    }
}

function goHome(){
    setActive(document.getElementById("home-nav"), document.getElementById("title"));
}

function goAboutMe(){
    setActive(document.getElementById("about-me-nav"), document.getElementById("about-me"));
}

function goPortfolio(){
    setActive(document.getElementById("portfolio-nav"), document.getElementById("portfolio"));
}

function goServices(){
    setActive(document.getElementById("services-nav"), document.getElementById("services"));
}

let intervalID = null;

function setActive(element, body){
    const activeElements = document.getElementsByClassName("active");
    let lastActive = null;
    for(let i = 0; i < activeElements.length; i++) {
        lastActive = activeElements[i];
        lastActive.classList.remove( "active");
        lastActive.style.backgroundColor = "transparent";
        lastActive.style.backgroundAttachment = "";
    }

    if(lastActive == null && intervalID==null) {
        element.classList.add("active");
        element.style.backgroundColor = activeColor;
        element.style.backgroundAttachment = "initial";
    }
    else{
        const anim = document.getElementById("animate");
        let start = lastActive.getBoundingClientRect();
        const end = element.getBoundingClientRect();
        if(intervalID != null) {
            clearInterval(intervalID);
            const rect = anim.getBoundingClientRect();
            start = new DOMRect(rect.x, rect.y, rect.width, rect.height);
        }else{
            anim.style.left = start.left.toString() + "px";
            anim.style.top = start.top.toString() + "px";
            anim.style.width = start.width.toString() + "px";
            anim.style.height = start.height.toString() + "px";
        }
        intervalID = setInterval(frame, 5);

        const startPageY = document.body.scrollTop;
        const endPageY = body.offsetTop;



        anim.style.visibility = "visible";

        function frame() {

            // set percent to distance scroll has traveled to
            // total distance to travel
            const scrollTop = document.body.scrollTop;
            var percent = (scrollTop - startPageY) / (endPageY - startPageY);
            if (percent >= 0.99) {
                clearInterval(intervalID);
                intervalID = null;
                element.classList.add("active");
                element.style.backgroundColor = activeColor;
                element.style.backgroundAttachment = "initial";
                anim.style.visibility = "hidden";
            }
            else {
                console.log("percent: " + percent);
                // set anim to be at the correct position, width, and height
                const x = start.left + (end.left - start.left) * percent;
                const y = start.top + (end.top - start.top) * percent;
                const width = start.width + (end.width - start.width) * percent;
                const height = start.height + (end.height - start.height) * percent;

                anim.style.left = x.toString() + "px";
                anim.style.top = y.toString() + "px";
                anim.style.width = width.toString() + "px";
                anim.style.height = height.toString() + "px";

            }
        }
    }
}

function onScroll() {
    console.log("scroll");
}
