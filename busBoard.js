fetch("https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals")
    .then(response => response.json())
    .then(body => {
        let sortBody = body.sort((obj1, obj2) => obj1.timeToStation - obj2.timeToStation)
        for (let i = 0; i < 5; i++) {
            console.log(sortBody[i].destinationName)
            console.log(Math.round(sortBody[i].timeToStation / 60))
        }
    });

