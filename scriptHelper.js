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
    let launchForm = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function(event) {
        let pilotName = document.getElementById("pilotName");
        let copilotName = document.getElementById("copilotName");
        if (pilotName.value === "" || copilotName.value === "") {
            alert("All fields are required"); 
        if (pilotName.value === Number || copilotName.value === Number) {
            alert("Must enter valid text");
        }
            event.preventDefault();
        } 
        let fuelLevel = document.getElementById("fuelLevel");
        let cargoMass = document.getElementById("cargoMass");
        let nanValue = NaN;
        if (fuelLevel === nanValue || cargoMass === nanValue) {
            alert("Must enter a valid number"); 

            event.preventDefault();
        }

    }); 
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
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
