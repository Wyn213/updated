const list = [
    {
        name: 'Roblox',
        ggLink: '/service/hvtrs8%2F-nmw%2Cge%2Fcprs-rmbnoz-aoppmrctkol%2F7369-rmbnoz.jtol'
    },
    {
        name: 'App Launcher',
        ggLink: '/service/hvtrs8%2F-nmw%2Cge%2Frlcy-ulcwbg%2F5054-nmw'
    },
    {
        name: 'Minecraft Trial',
        ggLink: '/service/hvtrs8%2F-nmw%2Cge%2Fcprs-mmjcne%2F0514-mkngcpadt%2Ftpicl%2Chvmn'
    },
    {
        name: "Character Ai",
        ggLink: ''
    }
]

function convertToUni(string) {
        let inputValue = string
        const letterMap = {
          a: 'а', b: 'b', c: 'c', d: 'ԁ', e: 'е', f: 'f', g: 'ɡ', h: 'h', i: 'і', j: 'ј',
          k: 'k', l: 'l', m: 'm', n: 'n', o: 'о', p: 'р', q: 'q', r: 'r', s: 'ѕ', t: 't',
          u: 'ս', v: 'v', w: 'w', x: 'х', y: 'у', z: 'z',
          A: 'А', B: 'B', C: 'C', D: 'Ⅾ', E: 'Е', F: 'F', G: 'G', H: 'Η', I: 'Ι', J: 'Ꭻ',
          K: 'K', L: 'L', M: 'M', N: 'N', O: 'O', P: 'Р', Q: 'Q', R: 'Ꮢ', S: 'Ѕ', T: 'Т',
          U: 'Ս', V: 'Ⅴ', W: 'W', X: 'Х', Y: 'Υ', Z: 'Z'
        };
        for (const letter in letterMap) {
          const regex = new RegExp(letter, 'g');
          inputValue = inputValue.replace(regex, letterMap[letter]);
        }
        return inputValue;
}
var currentItemLinkGG
function loadItems() {
    for (var i=0;i<list.length;i++) {
        var button = document.createElement("a");
        // convert to unicode
        var updated_name = convertToUni(list[i].name);
        button.innerHTML = updated_name;
        currentItemLinkGG=list[i].ggLink
        button.onclick = function () {
            document.write(`<iframe class="iframe" id="iframe" onload="newscript();"></iframe>
            <script src="/script/nowgg.js"></script>
            <style>
              .back{
                position: absolute;
                width: 50px;
                height: 50px;
                top:1%;
                left:1%;
              }
              .iframe{
                position: absolute;
                width:100%;
                height: 100%;
                left:0px;
                top:0px;
                border: none;
              }
            </style>
            
            <script>
              window.navigator.serviceWorker.register('/sw.js');
              function get_cookie(cookie_name) { const value = "; " + document.cookie; const parts = value.split("; " + cookie_name + "="); if (parts.length === 2) return parts.pop().split(";").shift(); } 
              
              var title2=get_cookie("title2");
              var favicon=get_cookie("favicon");
              
              if (favicon==null || favicon==undefined || favicon==""){
                    favicon="/img/logo.png";
                    document.cookie="favicon="+favicon+"; expires=Thu, 18 Dec 9013 12:00:00 UTC; path=/";
                    (function() {
                       var link=document.querySelector("link[rel*='icon']") || document.createElement('link');
                       link.type='image/x-icon';
                       link.rel='shortcut icon';
                       link.href=favicon;
                       document.getElementsByTagName('head')[0].appendChild(link);
                   })();
                }
                else{
                    (function() {
                       var link=document.querySelector("link[rel*='icon']") || document.createElement('link');
                       link.type='image/x-icon';
                       link.rel='shortcut icon';
                       link.href=favicon;
                       document.getElementsByTagName('head')[0].appendChild(link);
                   })();
                }
                if (title2==null || title2==undefined || title2==""){
                    title2="GG bypass";
                    document.cookie="title2="+title2+"; expires=Thu, 18 Dec 9013 12:00:00 UTC; path=/";
                    document.title=title2;
                }
                else{
                    document.title=title2;
                }
            </script>
            
            <script>
              function newscript(){
                var script=document.createElement("script");
                script.src="/script/nowgg.js";
                document.body.appendChild(script);
              }
              
              function reroutetogames(){
                window.location.pathname="/games";
              }
            </script>
            <script>
              iframe.src=window.location.origin+"${currentItemLinkGG}";
            </script>
            `)
        }
        document.getElementById("apps").appendChild(button)

    }
}

loadItems();document.getElementById("title").innerHTML = convertToUni("NowGG Proxy Bypass")