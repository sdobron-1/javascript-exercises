const palindromes = function (userText) {
let reverseText = "";
let punctuation = /[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g;
userText = userText.toLowerCase();
userText = userText.replace(punctuation,"");

for (let i=userText.length-1; i>=0; i--) {
    reverseText+=userText.charAt(i);
    }

if (reverseText === userText) {
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
