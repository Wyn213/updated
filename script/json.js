const list = [
    {
        'name': 'Roblox',
        'link': '/pages/rblx.html',
        'ggLink': '/service/hvtrs8%2F-nmw%2Cge%2Fcprs-rmbnoz-aoppmrctkol%2F7369-rmbnoz.jtol'
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

function loadItems() {
    for (var i=0;i<list.length;i++) {
        var button = document.createElement("a");
        // convert to unicode
        var updated_name = convertToUni(list[i].name)
        console.log(updated_name)
    }
}

loadItems()