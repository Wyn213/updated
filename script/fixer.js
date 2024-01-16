setInterval(() => {
    var div=document.getElementsByTagName("div");
    for (var i=0; i<div.length;i++){
        if (div[i].className.includes("ad-blocker") | div[i].className.includes("sc-bXdNzS gEqdDq")){
            div[i].style.display="none";
        }
    }

    var fixHalfScreen=document.getElementById("js-game-video");
    fixHalfScreen.style.top = "45vh";
    fixHalfScreen.style.left = "50vw";

    var removeBuggedNavBar = document.querySelector("header");
    removeBuggedNavBar.style.display = "none";

    var removebottomBar = document.getElementById("ng-control-bar");
    removebottomBar.style.display = "none";
},0);
