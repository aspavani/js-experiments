"use strict";

let cinfo = {
    name: "Pluralsight India",
    address: "Primeco Spectrum, Bannerghatta road",
    city: "Bangalore",
    state: "Karnataka",
    zip: "560076"
};

printContact(cinfo);

function printContact(info) {
    console.log(cinfo.name);
    console.log(cinfo.address);
    console.log(`${cinfo.city}, ${cinfo.state} ${cinfo.zip}`);
}