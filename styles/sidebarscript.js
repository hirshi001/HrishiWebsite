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
    }
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
};


function onLoad() {
    document.getElementById("sidebar-div").innerHTML =
        "<nav class='sidebar locked'>\n" +
        "    <div class='logo_items flex'>\n" +
        "        <span class='nav_image'>\n" +
        "          <img src='/images/MinecraftSkinFace.png' alt='logo_img' />\n" +
        "        </span>\n" +
        "        <span class='logo_name'>Womp Womp</span>\n" +
        "        <i class='bx bx-lock-alt' id='lock-icon' title='Unlock Sidebar'></i>\n" +
        "    </div>\n" +
        "    <div class='menu_container'>\n" +
        "        <div class='menu_items'>\n" +
        "            <ul class='menu_item'>\n" +
        "                <div class='menu_title flex'>\n" +
        "                    <span class='title'>Home</span>\n" +
        "                    <span class='line'></span>\n" +
        "                </div>\n" +
        "                <li class='item'>\n" +
        "                    <a href='index.html' class='link flex'>\n" +
        "                        <i class='bx bx-home-alt'></i>\n" +
        "                        <span>Home Page</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li class='item'>\n" +
        "                    <a href='#' class='link flex'>\n" +
        "                        <i class='bx bxs-contact'></i>\n" +
        "                        <span>Contact Me</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "            <ul class='menu_item'>\n" +
        "                <div class='menu_title flex'>\n" +
        "                    <span class='title'>Projects</span>\n" +
        "                    <span class='line'></span>\n" +
        "                </div>\n" +
        "                <li class='item'>\n" +
        "                    <a href='#' class='link flex'>\n" +
        "                        <i class='bx bx-search-alt' ></i>\n" +
        "                        <div>\n" +
        "                           <input type='text' placeholder='Search Project'/>\n" +
        "                        </div>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li class='item'>\n" +
        "                    <a href='projects.html' class='link flex'>\n" +
        "                        <i class='bx bx-grid-alt'></i>\n" +
        "                        <span>All Projects</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "            <ul class='menu_item'>\n" +
        "                <div class='menu_title flex'>\n" +
        "                    <span class='title'>Setting</span>\n" +
        "                    <span class='line'></span>\n" +
        "                </div>\n" +
        "                <li class='item'>\n" +
        "                    <a href=#' class='link flex'>\n" +
        "                        <i class='bx bx-flag'></i>\n" +
        "                        <span>Notice Board</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li class='item'>\n" +
        "                    <a href='#' class='link flex'>\n" +
        "                        <i class='bx bx-award'></i>\n" +
        "                        <span>Award</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li class='item'>\n" +
        "                    <a href='#' class='link flex'>\n" +
        "                        <i class='bx bx-cog'></i>\n" +
        "                        <span>Setting</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                </li>\n" +
        "                <li class='item'>\n" +
        "                    <a href='login.html' class='link flex'>\n" +
        "                        <i class='bx bx-log-in-circle'></i>\n" +
        "                        <span>Log In</span>\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class='sidebar_profile'>\n" +
        "          <span class='nav_image'>\n" +
        "            <img src='/images/profile.jpg' alt='logo_img' />\n" +
        "          </span>\n" +
        "            <div class='data_text'>\n" +
        "                <span class='name'>Hrishikesh Ingle</span>\n" +
        "                <a href = 'tel: 4085297091'>" +
        "                   <span class='email'>+1 (408) 529-7091</span>\n" +
        "                </a>\n" +
        "                <a href = 'mailto: hrishikeshningle@gmail.com'>" +
        "                   <span class='email'>hrishikeshningle@gmail.com</span>\n" +
        "                </a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
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

    console.log(document.cookie)

}