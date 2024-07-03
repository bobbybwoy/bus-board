fetch("https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals")
    .then(response => response.json())
    .then(body => {
        for (let i = 0; i < 5; i++) {
            console.log(body[i].destinationName)
        }
    });

