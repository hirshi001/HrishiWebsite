let embed_link = "<iframe frameborder=\"0\" src=\"https://itch.io/embed-upload/7586480?color=333333\" allowfullscreen=\"\" width=\"640\" height=\"500\"><a href=\"https://hirshi001.itch.io/pixelwars\">Play PixelWars on itch.io</a></iframe>"
let clickToStartDiv = null

function clickToStart() {
    clickToStartDiv = document.getElementsByClassName("click-to-start")[0]
    let currentProject = document.getElementsByClassName("current-project")[0]
    currentProject.removeChild(clickToStartDiv)
    currentProject.innerHTML = embed_link
}

function displayGame(link, name, img) {
    if (clickToStartDiv != null) {
        let currentProject = document.getElementsByClassName("current-project")[0]
        currentProject.innerHTML = ""
        currentProject.appendChild(clickToStartDiv)
        clickToStartDiv = null
    }

    document.getElementById("thumbnail").src = img
    embed_link = link
    parent.location.hash = name
}

function loadProjects() {
    fetch("projects/projects.json").then(r => r.json()).then(data => {

        let defaultProject = data["default-project"]

        let projects = data["projects"]
        let projectList = document.getElementsByClassName("project-links")[0]

        for (let i = 0; i < projects.length; i++) {
            let project = projects[i]
            let projectDiv = document.createElement("div")
            projectDiv.classList.add("project")

            let d1 = document.createElement("div")

            let button = document.createElement("button")

            let name = project["name"].replace(" ", "-").toLowerCase()
            button.onclick = () => displayGame(project["game-embed"], name, project["img"])

            if (parent.location.hash === "#" + name || (parent.location.hash === "" && project["name"] === defaultProject)) {
                displayGame(project["game-embed"], name, project["img"])
            }

            let img = document.createElement("img")
            img.src = project["img"]
            img.alt = project["alt-image"]

            button.appendChild(img)
            d1.appendChild(button)
            projectDiv.appendChild(d1)

            let d2 = document.createElement("div")
            let link = document.createElement("a")
            link.classList.add("project-title")
            link.href = project["url"]
            link.target = "_blank"
            link.rel = "noopener noreferrer"
            link.innerText = project["name"]

            d2.appendChild(link)
            projectDiv.appendChild(d2)
            projectList.appendChild(projectDiv)
        }

    });
}