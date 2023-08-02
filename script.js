// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");


window.addEventListener("load", function() {
    let launchForm = document.getElementById("launchForm");
    
        let pilotName = document.getElementById("pilotName");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById("faultyItems");
        let fuelStatus = document.getElementById("fuelStatus");
        let launchStatus = document.getElementById("launchStatus");
        let cargoStatus = document.getElementById("cargoStatus");

                 

        formSubmission(launchForm, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
  
    

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let missionTarget = document.getElementById("missionTarget");
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(listedPlanets);
       
       let planetName = pickPlanet(listedPlanets).name;
       let diameter = pickPlanet(listedPlanets).diameter;
       let star = pickPlanet(listedPlanets).star;
       let distance = pickPlanet(listedPlanets).distance;
       let moons = pickPlanet(listedPlanets).moons;
       let image = pickPlanet(listedPlanets).image;

       
       addDestinationInfo(missionTarget, planetName, diameter, star, distance, moons, image);   
   })
    
       
    
   
});