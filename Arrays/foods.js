"use strict";

let lunch = [
    { item: "Chicken Fajitas", price: 19.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
];

lunch_cost(lunch);

function lunch_cost(lunch) {

    let sum_items = 0, tip = 0, tax = 0, tc = 0;
    for(let i=0; i<lunch.length; i++){
        sum_items = sum_items + lunch[i].price;
    }

    tip = sum_items * 0.18;
    tax = sum_items * 0.8;
    tc = sum_items + tip + tax;
    
    console.log(`Total price of Lunch: $${sum_items.toFixed(2)}
                 Tax: $${tax.toFixed(2)}
                 Tip: $${tip.toFixed(2)}
                 Total Due: $${tc.toFixed(2)}`);
}