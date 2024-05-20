"use strict";

let payRate = 17.30;
let hoursWorked = 45;

function GrossPay(payRate, hoursWorked){
    let gpay= ((hoursWorked>40)? ((40 * payRate)+((hoursWorked-40) * 1.5 * payRate)) : (hoursWorked * payRate));
    return gpay;
}

console.log(`Gross pay for ${hoursWorked} hours at pay rate ${payRate} is ${GrossPay(payRate, hoursWorked)}`);