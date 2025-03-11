// Code your solution here
// index.js

// Function 1: findMatching
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function 2: fuzzyMatch
function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function 3: matchName
function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
}

// Example data
const drivers = ["Sam", "Sally", "Sarah", "Susan"];
const driverObjects = [
    { name: "Sam", hometown: "New York" },
    { name: "Sally", hometown: "Boston" },
    { name: "Sarah", hometown: "Chicago" },
    { name: "Susan", hometown: "San Francisco" }
];

// Example usage
console.log(findMatching(drivers, "sAm")); // Output: ["Sam"]
console.log(fuzzyMatch(drivers, "Sa"));    // Output: ["Sam", "Sally", "Sarah"]
console.log(matchName(driverObjects, "Sarah")); // Output: [{ name: "Sarah", hometown: "Chicago" }]

module.exports = { findMatching, fuzzyMatch, matchName };
