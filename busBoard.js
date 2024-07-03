fetch("https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals")
    .then(response => response.json())
    .then(body => {
        let sortBody = body.sort((obj1, obj2) => obj1.timeToStation - obj2.timeToStation)
        for (let i = 0; i < 5; i++) {
            console.log(`Destination: ${sortBody[i].destinationName}`)
            console.log(`Route      : ${sortBody[i].lineId}`)
            console.log(`Time arrive: ${Math.round(sortBody[i].timeToStation / 60)} mins\n`)
        }
    });

