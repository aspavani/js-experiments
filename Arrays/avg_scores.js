"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

function getAverage(scores) {

    let sum_scores = 0;
    for(let i=0; i<scores.length; i++){
        sum_scores += scores[i];
    }

    let avg_scores = (sum_scores / (scores.length));
    return avg_scores;
}

console.log("My average is: " + getAverage(myScores).toFixed(2));
console.log("You average is: " + getAverage(yourScores).toFixed(2));
