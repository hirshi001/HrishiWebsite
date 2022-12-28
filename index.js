/// Regular CODE

const activeColor = "#04AA6D"
const unselectedSize = 1.5;
const selectedSize = 2.25;
const dSize = selectedSize - unselectedSize;
let bodyKeys = null;

function onLoad() {
    // load
    if(window.addEventListener) {
        window.addEventListener("wheel", event => {
            mouseEvent(event);
        });
        window.addEventListener("touchmove", event=>{
            mouseEvent(event);
        }, false);
    }
    onResize();
    setActiveElement();
}

function setActiveElement() {

    const id = window.location.hash.substring(1);
    active = document.getElementById(id + "-nav");
    if (active == null) {
        active = document.getElementById("home-nav");
    }

    const buttonElements = document.getElementsByClassName("navbutton");
    const bodyElements = {};
    for (let i = 0; i < buttonElements.length; i++) {
        const button = buttonElements[i];
        const id = button.id;
        bodyElements[id] = document.getElementById(id.substring(0, id.length - 4));
        if (button !== active) {
            button.style.backgroundColor = "transparent";
            button.style.fontSize = unselectedSize.toString() + "em";
        }
    }

    // sort the body elements by their position
    bodyKeys = Object.values(bodyElements);
    bodyKeys.sort((a, b) => {
        return a.offsetTop - b.offsetTop;
    });

    active.style.fontSize = selectedSize.toString() + "em";
    active.style.backgroundColor = activeColor;

    document.body.scrollTop = document.getElementById(active.id.substring(0, active.id.length - 4)).offsetTop;


    const anim = document.getElementById("animate");
    anim.style.left = active.style.left;
    anim.style.top = active.style.top;
    anim.style.width = active.style.width;
    anim.style.height = active.style.height;
}

function onResize() {
    const topNav = document.getElementById("topnav");
    const height = topNav.offsetHeight
    const elements = document.getElementsByClassName("mpad-top");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.paddingTop = height.toString() + "px";
    }

}

function goHome() {
    setActive(document.getElementById("home-nav"), document.getElementById("home"));
}

function goAboutMe() {
    setActive(document.getElementById("about-me-nav"), document.getElementById("about-me"));
}

function goPortfolio() {
    setActive(document.getElementById("portfolio-nav"), document.getElementById("portfolio"));
}

function goServices() {
    setActive(document.getElementById("services-nav"), document.getElementById("services"));
}

let intervalID = null;
let deactivating = null;
let activating = null;
let active = null;
let deactivatingStartSize = null;
let bodyToActivate = null;
let userScroll = false;

function setActive(element, body) {
    // check if scroll behavior is smooth
    if (active === element) {
        window.scrollTo(window.scrollX, body.offsetTop);
        return;
    }
    if (window.getComputedStyle(document.documentElement).scrollBehavior !== "smooth") {
        // perform a different animation
        if (intervalID !== null) return;
        activating = element;
        bodyToActivate = body;
        intervalID = setInterval(fadeOut, 5);
        return;
    }

    userScroll = false;
    window.scrollTo(window.scrollX, body.offsetTop);
    window.location.hash = body.id;

    if (intervalID != null) {
        clearInterval(intervalID);
        intervalID = null;
    }
    if (deactivating != null) {
        deactivating.style.backgroundColor = "transparent";
        deactivating.style.fontSize = unselectedSize.toString() + "em";
        deactivating.style.backgroundAttachment = "";
        deactivating.classList.remove("active");
    }
    if (element == null) {
        if (activating != null) {
            activating.style.backgroundColor = "transparent";
            activating.style.fontSize = unselectedSize.toString() + "em";
            activating.style.backgroundAttachment = "";
            activating.classList.remove("active");
            activating = null;
        }
        return;
    }

    const anim = document.getElementById("animate");
    let start = null;


    if (activating != null) {
        start = anim.getBoundingClientRect();
        deactivating = activating;
    } else {
        deactivating = active;
    }
    activating = element;
    active = null;

    if (start == null) {
        start = deactivating.getBoundingClientRect();
    } else {
        start = anim.getBoundingClientRect();
    }
    let end = element.getBoundingClientRect();


    if (deactivating != null) {
        deactivating.style.backgroundColor = "transparent";
        deactivating.style.backgroundAttachment = "";
        deactivating.classList.remove("active");
    }


    anim.style.left = start.left.toString() + "px";
    anim.style.top = start.top.toString() + "px";
    anim.style.width = start.width.toString() + "px";
    anim.style.height = start.height.toString() + "px";

    if (deactivating != null) {
        deactivatingStartSize = deactivating.style.fontSize;
        if (deactivatingStartSize.endsWith("em")) {
            deactivatingStartSize = parseFloat(deactivatingStartSize.substring(0, deactivatingStartSize.length - 2));
        } else {
            deactivatingStartSize = selectedSize;
        }
    } else {
        deactivatingStartSize = null;
    }
    intervalID = setInterval(frame, 5);

    const startPageY = window.scrollY;
    let endPageY = body.offsetTop;

    anim.style.visibility = "visible";

    function frame() {

        // set percent to distance scroll has traveled to
        // total distance to travel
        const scrollTop = window.scrollY;
        end = activating.getBoundingClientRect();
        endPageY = body.offsetTop;
        var percent = (scrollTop - startPageY) / (endPageY - startPageY);
        if (endPageY === startPageY || percent >= 1) {
            clearInterval(intervalID);
            intervalID = null;

            activating.classList.add("active");
            activating.style.backgroundColor = activeColor;
            activating.style.backgroundAttachment = "initial";
            anim.style.visibility = "hidden";
            activating.style.fontSize = selectedSize.toString() + "em";
            active = activating;
            activating = null;
            if (deactivating != null) {
                deactivating.style.fontSize = unselectedSize + "em";
                deactivating.style.backgroundColor = "transparent";
                deactivating = null;
            }
        } else {
            // set anim to be at the correct position, width, and height
            const x = start.left + (end.left - start.left) * percent;
            const y = start.top + (end.top - start.top) * percent;
            const width = start.width + (end.width - start.width) * percent;
            const height = start.height + (end.height - start.height) * percent;

            anim.style.left = x.toString() + "px";
            anim.style.top = y.toString() + "px";
            anim.style.width = width.toString() + "px";
            anim.style.height = height.toString() + "px";

            element.style.fontSize = (unselectedSize + dSize * percent).toString() + "em";
            if (deactivating != null) {
                if (deactivatingStartSize == null) {
                    deactivating.style.fontSize = (selectedSize - dSize * percent).toString() + "em";
                } else {
                    deactivating.style.fontSize = (deactivatingStartSize - (deactivatingStartSize - unselectedSize) * percent).toString() + "em";
                }
            }
        }
    }

    function fadeOut() {
        const body = document.body;
        opacity = Number(window.getComputedStyle(body)
            .getPropertyValue("opacity"));
        if (opacity > 0) {
            opacity = opacity - 0.05;
            body.style.opacity = opacity
        } else {
            if (active != null) {
                active.style.backgroundColor = "transparent";
                active.style.fontSize = unselectedSize.toString() + "em";
                active.style.backgroundAttachment = "";
                active.classList.remove("active");
            }
            active = activating;
            active.classList.add("active");
            active.style.backgroundColor = activeColor;
            active.style.backgroundAttachment = "initial";
            active.style.fontSize = selectedSize.toString() + "em";
            clearInterval(intervalID);
            window.scrollTo(window.scrollX, bodyToActivate.offsetTop);
            intervalID = setInterval(fadeIn, 5);
        }
    }

    function fadeIn() {
        const dBody = document.body;
        opacity = Number(window.getComputedStyle(dBody)
            .getPropertyValue("opacity"));
        if (opacity < 1) {
            opacity = opacity + 0.05;
            dBody.style.opacity = opacity
        } else {
            clearInterval(intervalID);
            intervalID = null;
            window.location.hash = body.id;
        }
    }
}

function simpleSetActive(element) {
    const navButtons = document.getElementsByClassName("navbutton");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove("active");
        navButtons[i].style.backgroundColor = "transparent";
        navButtons[i].style.fontSize = unselectedSize.toString() + "em";
    }

    element.classList.add("active");
    element.style.backgroundColor = activeColor;
    element.style.fontSize = selectedSize.toString() + "em";
    active = element;
    deactivating = null;
    activating = null;
    bodyToActivate = null;

    const anim = document.getElementById("animate");
    anim.style.visibility = "hidden";
}

function onScroll() {
    if(!userScroll) return;
    if(intervalID != null) {
        clearInterval(intervalID);
        intervalID = null;
    }
    const scrollTop = window.scrollY;
    // determine which body is scrolled to using bodyKeys
    let bodyToActivate = bodyKeys[0];
    for (let i = 0; i < bodyKeys.length; i++) {
        const body = bodyKeys[i];
        if (body.offsetTop > scrollTop) {
            break;
        }
        bodyToActivate = body;
    }
    if (bodyToActivate != null) {
        simpleSetActive(document.getElementById(bodyToActivate.id + "-nav"), bodyToActivate);
    }
}

function mouseEvent(e) {
    userScroll = true;
}

