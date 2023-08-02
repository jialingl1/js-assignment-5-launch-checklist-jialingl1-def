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

    document.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter} </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance} </li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    document.addEventListener("submit", function(event) {
    
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
        
        //let list = document.getElementById("list").querySelectorAll("#pilotStat, #copilotStat, #fuelStat, #cargoStat");

        pilotStatus.innerHTML = `Pilot ${pilot.value} ready`;
        copilotStatus.innerHTML = `Copilot ${copilot.value} ready`;

        if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();

        } else if (fuelLevel.value < 10000) {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Not enough fuel for the journey";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            event.preventDefault();

        } else if (cargoLevel.value > 10000) {
            list.style.visibility = "visible";
            cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "#C7254E";
            event.preventDefault();

        } else { 
            //fuelLevel.value >= 10000 && cargoLevel.value <= 10000 
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.innerHTML = "Shuttle ready for launch";
            launchStatus.style.color = "#419F6A";
            event.preventDefault();
        }

        
    });
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
    //console.log(planetsReturned);
}

function pickPlanet(planets) {
    let num = Math.floor(Math.random()*6);
    return planets[num]; 
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
