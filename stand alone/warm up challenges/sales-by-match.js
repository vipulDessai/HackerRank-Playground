'use strict';

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if(ar[j] === null)
                continue;
            else if(ar[i] === ar[j]) {
                ar[j] = null;
                ++pairs;
                break;
            }
        }
    }

    return pairs;
}

function main() {
    const n = 9;

    const ar = '10 20 20 10 10 30 50 10 20'.split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    console.log(result);
}

main();