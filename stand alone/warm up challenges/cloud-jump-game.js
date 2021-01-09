'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0;
    let index = 0;
    const lastIndex = c.length - 1
    while (index < lastIndex) {
        if(c[index + 2] !== 1) {
            index += 2;
            ++jumps;
        }
        else {
            ++index;
            ++jumps;
        }
    }

    return jumps;
}

function main() {
    const n = 7;

    const c = '0 1 0 0 0 1 0'.split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    console.log(result);
}

main();