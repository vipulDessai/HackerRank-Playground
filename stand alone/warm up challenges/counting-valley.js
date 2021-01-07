function countingValleys(steps, path) {
    // Write your code here
    let valley = 0;
    let level = 0
    for (let index = 0; index < steps; index++) {
        const char = path[index];
        if(char === 'U')
            ++level;
        else if(char === 'D')
            --level;

        if(level === 0 && char === 'U')
            ++valley;
    }

    return valley;
}

function main() {
    const path = "UUDUUU";
    const steps = path.length;

    const result = countingValleys(steps, path);
    console.log(result);
}

main();