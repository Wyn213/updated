setInterval(() => {
    var div=document.getElementsByTagName("div");
    for (var i=0; i<div.length;i++){
        if (div[i].className.includes("ad-blocker")){
            div[i].style.display="none";
        }
    }

    var fixHalfScreen=document.getElementById("js-game-video");
    fixHalfScreen.style.top = "50vh";
    fixHalfScreen.style.left = "25vw"

    var removeBuggedNavBar = document.querySelector("header");
    removeBuggedNavBar.style.display = "none";

    var removebottomBar = document.getElementById("ng-control-bar");
    removebottomBar.style.display = "none";

    for (var v=0; 1<div2.length;v++){
        if (div[v].className.includes('gEqdDq')){
            div[v].style.display = 'none'
        }
    }
},0);
