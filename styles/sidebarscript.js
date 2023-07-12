// NOTICE: This script will insert the sidebar html into the page, so do not use this script if you don't want sidebar

// Selecting the sidebar and buttons
let sidebar = document.querySelector(".sidebar");
let sidebarOpenBtn = document.querySelector("#sidebar-open");
let sidebarCloseBtn = document.querySelector("#sidebar-close");
let sidebarLockBtn = document.querySelector("#lock-icon");
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


// Function to toggle the lock state of the sidebar
const toggleLock = () => {
    let content = document.getElementById("content")
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if (!sidebar.classList.contains("locked")) {
        unlockSidebar()
    } else {
        lockSidebar()
    }
};

const lockSidebar = () => {
    let content = document.getElementById("content")
    sidebar.classList.add("locked");
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
    sidebarLockBtn.title = "Unlock Sidebar";
    document.cookie = "sidebarLock=True"
    content.style.paddingLeft = 275 + "px";
}

const unlockSidebar = () => {
    let content = document.getElementById("content")
    sidebar.classList.remove("locked");
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
    sidebarLockBtn.title = "Lock Sidebar";
    document.cookie = "sidebarLock=False"
    content.style.paddingLeft = 85 + "px";
}

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.add("close");
        if (sidebar.contains(document.activeElement)) {
            document.activeElement.blur()
        }
    }
    hideSearchResults()
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
    if (sidebar.classList.contains("hoverable")) {
        sidebar.classList.remove("close");
    }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
    sidebar.classList.toggle("close");
    if (sidebar.contains(document.activeElement)) {
        document.activeElement.blur()
    }
};

const showSearchResults = () => {
    let searchResults = document.getElementById("search_results")
    if (searchResults) {
        searchResults.classList.remove("hidden")
    }
}

const hideSearchResults = () => {
    let searchResults = document.getElementById("search_results")
    if (searchResults) {
        searchResults.classList.add("hidden")
    }
}


function onLoad() {
    fetch("styles/sidebar.html").then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-div").innerHTML = data


            sidebar = document.querySelector(".sidebar");
            sidebarOpenBtn = document.querySelector("#sidebar-open");
            sidebarCloseBtn = document.querySelector("#sidebar-close");
            sidebarLockBtn = document.querySelector("#lock-icon");

            // If the window width is less than 800px, close the sidebar and remove hoverability and lock
            // if (window.innerWidth < 800) {
            //     sidebar.classList.add("close");
            //     sidebar.classList.remove("locked");
            //     sidebar.classList.remove("hoverable");
            // }

            // Adding event listeners to buttons and sidebar for the corresponding actions
            sidebarLockBtn.addEventListener("click", toggleLock);
            sidebar.addEventListener("mouseleave", hideSidebar);
            sidebar.addEventListener("mouseenter", showSidebar);
            // sidebarOpenBtn.addEventListener("click", toggleSidebar);
            // sidebarCloseBtn.addEventListener("click", toggleSidebar);


            // fade out animation
            let anchors = document.getElementsByTagName("a");
            for (let i = 0; i < anchors.length; i++) {
                if (anchors[i].hostname !== window.location.hostname || anchors[i].pathname === window.location.pathname) {
                    continue;
                }
                anchors[i].addEventListener('click', function (event) {
                    var fader = document.getElementById('fader'),
                        anchor = event.currentTarget;

                    var listener = function () {
                        window.location = anchor.href;
                        fader.removeEventListener('animationend', listener);
                    };
                    fader.addEventListener('animationend', listener);

                    event.preventDefault();
                    fader.classList.add('fade-in');
                });
            }

            window.addEventListener('pageshow', function (event) {
                if (!event.persisted) {
                    return;
                }
                let fader = document.getElementById('fader');
                fader.classList.remove('fade-in');
            });

            // lock toggle check
            const cookieToggle = document.cookie.split("; ")
                .find((row) => row.startsWith("sidebarLock"))?.split("=")[1]

            let content = document.getElementById("content")
            if (cookieToggle === "True") {
                lockSidebar()
            } else if (cookieToggle === "False") {
                unlockSidebar()
            }

            if (cookieToggle === "False") {
                hideSidebar()
            } else {
                showSidebar()
            }


            // add search input listener
            let input = document.getElementById("search_project")
            input.addEventListener("input", function (event) {
                fetch("https://game.hrishislife.com/cgi-bin/searchGame.cgi?search=" + event.target.value).then(response => response.json())
                    .then(data => {
                        let names = data["names"]
                        let div = document.getElementById("search_results")
                        div.innerHTML = ""
                        let ul = div.appendChild(document.createElement("ul"))
                        for (let j = 0; j < names.length; j++) {
                            let li = ul.appendChild(document.createElement("li"))
                            let link = li.appendChild(document.createElement("a"))
                            link.href = "projects.html#" + names[j].toLowerCase().replace(" ", "-");
                            link.innerText = names[j];
                            link.addEventListener("click", function (event) {

                                location.assign(link.href)
                                if (!location.href.includes("projects.html")) {
                                    location.reload()
                                }
                            });
                        }
                    })
            });

            input.addEventListener("focusin", function (event) {
                showSearchResults();
            });

            input.addEventListener("focusout", function (event) {
                // hideSearchResults();
            });
        });
}


// lock toggle check
const cookieToggle = document.cookie.split("; ")
    .find((row) => row.startsWith("sidebarLock"))?.split("=")[1]



let content = document.getElementById("content")
let transition = window.getComputedStyle(content).transition
content.style.transition = "none"

if (cookieToggle === "True") {
    content.style.paddingLeft = 85 + "px";
} else if (cookieToggle === "False") {
    content.style.paddingLeft = 85 + "px";
}


// sleep for 100ms to allow transition to finish
setTimeout(() => {
    content.style.transition = transition
}, 100);