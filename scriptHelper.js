// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (typeof testInput === "number") {
        return "Is a Number";
    }
     
}
// parameters inside formSubmission: document, list, pilot, copilot, fuelLevel, cargoLevel
function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    //let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function(event) {
    //    let pilot = document.getElementById("pilotName");
    //    let copilot = document.querySelector("input[name=copilotName]");
    //    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    //    let cargoLevel = document.querySelector("input[name=cargoMass]");

        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {
            alert("All fields are required");
            event.preventDefault();    
        } 
        if (validateInput(pilot.value) !== "Not a Number" || validateInput(copilot.value) !== "Not a Number") {
            alert("Must enter valid text for Pilot Name and Co-pilot Name");
            event.preventDefault();
        }
        if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {
            alert("Must enter valid number for Fuel Level and Cargo Mass");
            event.preventDefault();
        }
    });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
