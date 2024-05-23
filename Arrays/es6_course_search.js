"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/24",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/24",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/24",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/24",
        Fee: "50.00",
    }
];

function find_prog200(arrayelement) {
    if (arrayelement.CourseId == "PROG200")
        return true;
    else
        return false;

}

function find_proj500(arrayelement) {
    if (arrayelement.CourseId == "PROJ500")
        return true;
    else
        return false;
}

function find_cost50(arrayelement) {
    if (Number(arrayelement.Fee) <= 50)
        return true;
    else
        return false;
}

function find_c_cr1(arrayelement) {
    if (arrayelement.Location == "Classroom 1")
        return true;
    else
        return false;
}

let cprog200 = courses.find(find_prog200);
console.log("\nStart date of PROG200 is: " + cprog200.StartDate);

let cprog500 = courses.find(find_proj500);
console.log("\nTitle of PROJ500 is: " + cprog500.Title);

let clessthan50 = courses.filter(find_cost50);
console.log("\nCourses that cost less than $50: ");
if (clessthan50.length > 0)
    for (let i = 0; i < clessthan50.length; i++)
        console.log(clessthan50[i].Title);

let c_cr1 = courses.filter(find_c_cr1);
console.log("\nCourses meeting in Classroom 1: ");
if (c_cr1.length > 0)
    for (let i = 0; i < c_cr1.length; i++)
        console.log(c_cr1[i].Title);
