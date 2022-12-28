let data={
    "playVideoGames": "I have played many games, but I mainly enjoy League of Legends and Supercell games",
    "running": "I have been running for many years, primarily being a distance athlete. I currently compete in the 1500, 3000, and 8k.",
    "chess": "I like to play chess. Check out my profile on chess.com <a target=\"_blank\" rel=\"noopener noreferrer\" href='https://www.chess.com/member/hirshi001' >here</a>.",
    "programming": "I am proficient in Java and have made many projects with it. I am currently learning Javascript to make this website.",
}

function enjoySelectorOnLoad() {
    const info = document.getElementById("enjoy-content-information");
    info.style.backgroundColor="blue"
    setContentDisplay();
}

function setEnjoyContent(id){
    var enjoyContent = document.getElementById("enjoy-content").getElementsByTagName("td");
    for (var i = 0; i < enjoyContent.length; i++) {
        const enjoyContentItem = enjoyContent[i];
        if (enjoyContentItem.id === id) {
            enjoyContentItem.classList.add("selected");
        } else {
            enjoyContentItem.classList.remove("selected");
        }
    }
    setContentDisplay(enjoyContent);
}

function setContentDisplay(enjoyContent=null) {
    // get elements in the enjoy-content id which are li
    if(enjoyContent==null) enjoyContent = document.getElementById("enjoy-content").getElementsByTagName("td");
    for (var i = 0; i < enjoyContent.length; i++) {
        const enjoyContentItem = enjoyContent[i];
        if(enjoyContentItem.id=== "enjoy-content-information") {
            continue;
        }
        if (enjoyContentItem.classList.contains("selected")) {
            enjoyContentItem.style.backgroundColor = "blue";
            enjoyContentItem.style.borderRightWidth = "0";
            const info = document.getElementById("enjoy-content-information");
            info.innerHTML = data[enjoyContentItem.id];
        } else {
            enjoyContentItem.style.backgroundColor = "purple";
            enjoyContentItem.style.borderRightWidth = "2pt";
        }
    }


}
