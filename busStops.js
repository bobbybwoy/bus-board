// Import the readline package from NPM 
import readline from 'readline-sync';

// Get the postcode from the user via the terminal
const postCode = readline.prompt({ prompt: "Postcode: " });

// console.log(`Postcode: ${postCode}`)

// let locationData;
try {
    // const response = await fetch(`https://api.postcodes.io/postcodes/${postCode}`);
    const response = await fetch(`https://api.postcodes.io/postcodes/nw5 1tl`);
    if (response.status !== 200) throw "It ain't worked!"
    const locationData = response.body; // I'm sure about this....
    console.log(locationData);
} catch (err) {
    console.log(err)
}