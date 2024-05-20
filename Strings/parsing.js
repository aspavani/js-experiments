"use strict";

let name = "Brenda Kaye";
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


function parseAndDisplayName(name) {
    let index = name.indexOf(" ");
    let firstName = name.substring(0,index);
    let lastName = name.substring(index+1);

    console.log(`Name: ${name} \nFirst name: ${firstName} \nLast name: ${lastName} \n`);
}