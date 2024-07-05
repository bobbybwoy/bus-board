// Import the readline package from NPM 
import readline from 'readline-sync';
// Import the winston logging package from NPM
// import winston from 'winston/lib/winston/config';
import winston from 'winston'

// Creating a logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

let locationData = 1;
let busStops;
let busInfo;
let nearestStops = []
while (typeof (locationData) != "string") {
    try {
        // Get the postcode from the user via the terminal
        const postCode = readline.prompt({ prompt: "Start postcode: " });
        const destPostCode = readline.prompt({ prompt: "Destination postcode: " });
//         // const postresponse = await fetch(`https://api.postcodes.io/postcodes/${postCode}`);
//         // if (postresponse.status !== 200) {
//         //     logger.error(`Postcode API error - status ${postresponse.status}, Postcode: ${postCode}`);
//         //     throw `Postcode API error - status ${postresponse.status}`
//         // }
//         // locationData = await postresponse.json();
//         // let lat = locationData.result.latitude
//         // let long = locationData.result.longitude
//         const startLocation = getPostcodeLocation(postCode)
//         const destLocation = getPostcodeLocation(destPostCode)
//         const tflresponse =
//             await fetch(`https://api.tfl.gov.uk/StopPoint/?lat=${lat}&lon=${long}&stopTypes=NaptanPublicBusCoachTram`)
//         if (tflresponse.status !== 200){
//             logger.error(`TfL API error - status ${tflresponse.status}`);
//             throw `TfL API error - status ${tflresponse.status}`
//         }
//         busStops = await tflresponse.json()
//         for (let i = 0; i < 2; i++) {
//             const busInfoResp =
//                 await fetch(`https://api.tfl.gov.uk/StopPoint/${busStops.stopPoints[i].naptanId}/Arrivals`);
//             if (busInfoResp.status !== 200) {
//                 logger.error(`Bus Info Response error: ${busInfoResp.status}`);
//                 throw `Bus Info Response error: ${busInfoResp.status}`;
//             }
//             const busInfo = await busInfoResp.json();
//             if (busInfo.length == 0) {
//                 logger.error(`No stop information for ${postCode}`);
//                 throw `No stop information for ${postCode}`
//             }
//             const sortedBusInfo = busInfo.sort((bus1, bus2) => bus1.timeToStation - bus2.timeToStation);
//             // nearestStops.push(busStops.stopPoints[i].naptanId)
//             nearestStops.push({"naptanId": busStops.stopPoints[i].naptanId, "commonName":busStops.stopPoints[i].commonName})
//             console.log(`Next bus at stop ${busStops.stopPoints[i].commonName} is ${sortedBusInfo[0].lineId} arriving in ${Math.round(sortedBusInfo[0].timeToStation / 60)} mins\n`);
//         }
// ;
//         // Ask question...
//         const directions = (readline.prompt({prompt: "Do you want directions? Y/N "})).toLowerCase();
//         if (directions != "y" && directions != "n")
//             throw `Do not understand this response ${directions}. Enter Y or N`;
//         else if (directions == "y"){
//             for (let j = 0; j < nearestStops.length; j++) {
                const directionsResp = await fetch(`https://api.tfl.gov.uk/Journey/JourneyResults/${postCode}/to/${destPostCode}`)
            if (directionsResp.status != 200) {
                logger.error(`Unable to direct from ${postCode} to ${destPostCode}`)
                throw `Unable to direct from ${postCode} to ${destPostCode}`
            }
            const route = await directionsResp.json();
            // console.log(route);
            const sortedJourneys = route.journeys.sort((j1, j2) => j1.duration - j2.duration)
            console.log(sortedJourneys[0].legs[0].instruction.steps)
            console.log(sortedJourneys[0].legs[1].instruction.steps)
            // console.log(route.journeys[0].duration);
            // console.log(route.journeys[0].legs[0].instruction.steps[0].description);
            // loop through steps, display direction and summary to user
            let instructions = ""
            // for (let k = 0; k < route.journeys[0].legs[0].instruction.steps.length; k++) {
            //     instructions += `${route.journeys[0].legs[0].instruction.steps[k].descriptionHeading.trim()} `
            //     instructions += `on ${route.journeys[0].legs[0].instruction.steps[k].description}. `
            // }
            // console.log(`Directions from ${postCode.toUpperCase()} to ${destPostCode} are:\n\t${instructions}\n`)
            // }
        // }
        break
    } catch (err) {
        console.log(err)
    }     
}

// async function getPostcodeLocation(postCode) {
//     const postresponse = await fetch(`https://api.postcodes.io/postcodes/${postCode}`);
//     if (postresponse.status !== 200) {
//         logger.error(`Postcode API error - status ${postresponse.status}, Postcode: ${postCode}`);
//         throw `Postcode API error - status ${postresponse.status}`
//     }
//     locationData = await postresponse.json();
//     let lat = locationData.result.latitude
//     let long = locationData.result.longitude

//     return {"lat": lat, "long": long}
// }