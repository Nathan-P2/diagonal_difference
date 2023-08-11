'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    var sumRight = 0;
    var sumLeft = 0;
    var i = 0;
    
    // arr = [
    //     [-10, 3, 0, 5, -4],
    //     [2, -1, 0, 2, -8],
    //     [9, -2, -5, 6, 0],
    //     [9, -7, 4, 8, -2],
    //     [3, 7, 8, -5, 0]
    // ]
    
    for(i = 0; i < arr.length; i++) {
        sumRight += arr[i][i];
    }
    
    var aux = 0;
    
    for(i = arr.length - 1; i >= 0; i--) {
        sumLeft += arr[aux][i];
        aux++;
    }
        
    return Math.abs(sumRight - sumLeft);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
