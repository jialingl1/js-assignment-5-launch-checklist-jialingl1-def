// Write your JavaScript code here!

window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
    //launchForm.addEventListener("submit", function(event) {
        let pilot = document.getElementById("pilotName");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");

        formSubmission(launchForm, pilot, copilot, fuelLevel, cargoLevel);
    
    //});

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});