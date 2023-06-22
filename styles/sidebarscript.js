// Selecting the sidebar and buttons
let sidebar = document.querySelector(".sidebar");
let sidebarOpenBtn = document.querySelector("#sidebar-open");
let sidebarCloseBtn = document.querySelector("#sidebar-close");
let sidebarLockBtn = document.querySelector("#lock-icon");
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


// Function to toggle the lock state of the sidebar
const toggleLock = () => {
    sidebar.classList.toggle("locked");
    // If the sidebar is not locked
    if (!sidebar.classList.contains("locked")) {
        sidebar.classList.add("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
        sidebarLockBtn.title = "Lock Sidebar";
        document.cookie = "sidebarLock=False"
    } else {
        sidebar.classList.remove("hoverable");
        sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
        document.getElementById("lock-icon").title = "Unlock Sidebar";
        document.cookie = "sidebarLock=True"
    }
};

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
    document.getElementById("sidebar-div").innerHTML =
        "<nav class='sidebar locked'>" +
        "    <div class='logo_items flex'>" +
        "        <span class='nav_image'>" +
        "          <img src='/images/MinecraftSkinFace.png' alt='logo_img' />" +
        "        </span>" +
        "        <span class='logo_name'>Womp Womp</span>" +
        "        <i class='bx bx-lock-alt' id='lock-icon' title='Unlock Sidebar'></i>" +
        "    </div>" +
        "    <div class='menu_container'>" +
        "        <div class='menu_items'>" +
        "            <ul class='menu_item'>" +
        "                <div class='menu_title flex'>" +
        "                    <span class='title'>Home</span>" +
        "                    <span class='line'></span>" +
        "                </div>" +
        "                <li class='item'>" +
        "                    <a href='index.html' class='link flex'>" +
        "                        <i class='bx bx-home-alt'></i>" +
        "                        <span>Home Page</span>" +
        "                    </a>" +
        "                </li>" +
        "                <li class='item'>" +
        "                    <a href='#' class='link flex'>" +
        "                        <i class='bx bxs-contact'></i>" +
        "                        <span>Contact Me</span>" +
        "                    </a>" +
        "                </li>" +
        "            </ul>" +
        "            <ul class='menu_item'>" +
        "                <div class='menu_title flex'>" +
        "                    <span class='title'>Projects</span>" +
        "                    <span class='line'></span>" +
        "                </div>" +
        "                <li class='item flex'>" +
        "                    <a href='#' class='link flex'>" +
        "                        <i class='bx bx-search-alt' ></i>" +
        "                        <div>" +
        "                           <input id = 'search_project' type='text' placeholder='Search Project'/>" +
        "                        </div>" +
        "                    </a>" +
        "                   <div id = 'search_results'>" +
        "                       <ul>" +
        "                           <li>hi</li>" +
        "                       </ul>" +
        "                   </div>" +
        "                </li>" +
        "                <li class='item'>" +
        "                    <a href='projects.html' class='link flex'>" +
        "                        <i class='bx bx-grid-alt'></i>" +
        "                        <span>All Projects</span>" +
        "                    </a>" +
        "                </li>" +
        "            </ul>" +
        "            <ul class='menu_item'>" +
        "                <div class='menu_title flex'>" +
        "                    <span class='title'>Setting</span>" +
        "                    <span class='line'></span>" +
        "                </div>" +
        "                <li class='item'>" +
        "                    <a href=#' class='link flex'>" +
        "                        <i class='bx bx-flag'></i>" +
        "                        <span>Notice Board</span>" +
        "                    </a>" +
        "                </li>" +
        "                <li class='item'>" +
        "                    <a href='#' class='link flex'>" +
        "                        <i class='bx bx-award'></i>" +
        "                        <span>Award</span>" +
        "                    </a>" +
        "                </li>" +
        "                <li class='item'>" +
        "                    <a href='#' class='link flex'>" +
        "                        <i class='bx bx-cog'></i>" +
        "                        <span>Setting</span>" +
        "                    </a>" +
        "                </li>" +
        "                </li>" +
        "                <li class='item'>" +
        "                    <a href='login.html' class='link flex'>" +
        "                        <i class='bx bx-log-in-circle'></i>" +
        "                        <span>Log In</span>" +
        "                    </a>" +
        "                </li>" +
        "            </ul>" +
        "        </div>" +
        "        <div class='sidebar_profile'>" +
        "          <span class='nav_image'>" +
        "            <img src='/images/profile.jpg' alt='logo_img' />" +
        "          </span>" +
        "            <div class='data_text'>" +
        "                <span class='name'>Hrishikesh Ingle</span>" +
        "                <a href = 'tel: 4085297091'>" +
        "                   <span class='email'>+1 (408) 529-7091</span>" +
        "                </a>" +
        "                <a href = 'mailto: hrishikeshningle@gmail.com'>" +
        "                   <span class='email'>hrishikeshningle@gmail.com</span>" +
        "                </a>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "</nav>"


    sidebar = document.querySelector(".sidebar");
    sidebarOpenBtn = document.querySelector("#sidebar-open");
    sidebarCloseBtn = document.querySelector("#sidebar-close");
    sidebarLockBtn = document.querySelector("#lock-icon");

    // If the window width is less than 800px, close the sidebar and remove hoverability and lock
    if (window.innerWidth < 800) {
        sidebar.classList.add("close");
        sidebar.classList.remove("locked");
        sidebar.classList.remove("hoverable");
    }

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

    if (cookieToggle === "True" && sidebar.classList.contains("Locked")) {
        toggleLock()
    } else if (cookieToggle === "False" && !sidebar.classList.contains("Locked")) {
        toggleLock()
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
                    li.innerText = names[j]
                }
            })
    });

    input.addEventListener("focusin", function (event) {
        showSearchResults();
    });

    input.addEventListener("focusout", function (event) {
        hideSearchResults();
    });


}