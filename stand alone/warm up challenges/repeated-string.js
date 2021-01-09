'use strict';

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const sLength = s.length;
    const onlyCharALength = s.replace(/[b-z]/g, '').length;
    
    const noOfFullRepeats = Math.floor(n / sLength);
    const charLengthRemaining = n - sLength * noOfFullRepeats;
    const charALengthInRemainingString = s.slice(0, charLengthRemaining).replace(/[b-z]/g, '').length;

    return noOfFullRepeats * onlyCharALength + charALengthInRemainingString;
}

function main() {
    const s = "ab";

    const n = 1e12;

    let result = repeatedString(s, n);
    
    console.log(result);
}

main();