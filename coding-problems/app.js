
/**
* @param {string} s
* @return {string}
*/

var freqAlphabets = function(s) {
    const dict = {
    "#": "",
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10#": "j",
    "11#": "k",
    "12#": "l",
    "13#": "m",
    "14#": "n",
    "15#": "o",
    "16#": "p",
    
    }
    console.log(dict)

    let result = "";

    for (let index = 0; index < s.length; index++) {
        const current = s[index];
        console.log("current ", current)
        let previous = s[index - 1]
        let second = s[index - 2]
        let next = s[index + 1]
        let afterNext = s[index + 2]
        if (next !== "#" && afterNext !== "#") {
            console.log("value!! " + dict[current])
            result = result + dict[current]
        }
        if (current === "#") {
            console.log("hash" + current, previous, second)
            previous = parseInt(previous, 10);
            second = parseInt(second, 10)
            if (Number.isInteger(previous) && Number.isInteger(second)) {
                console.log("key ", second, previous);
                const target = `${second}${previous}#`;
                console.log("target " + target);
                console.log("value!! " + dict[target])
                result = result + dict[target]
            } 
        }
    }
    console.log("result " + result)
    return result;
    
};
s = "89113#11#1212"
freqAlphabets(s);


