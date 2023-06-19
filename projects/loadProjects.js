let embed_link= "https://itch.io/embed-upload/7586480?color=333333"
let iframe = null
let clickToStartDiv = null

function clickToStart() {
    clickToStartDiv = document.getElementsByClassName("click-to-start")[0]
    iframe = document.createElement("iframe")

    iframe.setAttribute("frameBorder", "0")
    iframe.setAttribute("src", embed_link)
    iframe.setAttribute("allowFullScreen", "")
    iframe.setAttribute("width", "640")
    iframe.setAttribute("height", "500")

    clickToStartDiv.replaceWith(iframe)
    document.removeChild(clickToStartDiv)
}

function displayGame(link) {
    if(iframe != null && clickToStartDiv != null) {
        iframe.replaceWith(clickToStartDiv)
        iframe = null
        clickToStartDiv = null
    }
    embed_link = link
}
