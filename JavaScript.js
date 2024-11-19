// this function is asking the user what froyo they would like
function getInput() {
    return prompt("Enter a list of froyo flavors, separated by commas:");
}

// This function is splitting each input between the comma and creating an array
function processFlavors(input) {
    return input.split(',').map(flavor => flavor.trim());
}

// This function is counting the flavors 
function countFlavors(flavors) {
    const flavorCounts = {};
    flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });
    return flavorCounts;
}

// This displays the results
function displayResults(flavorCounts) {
    for (const flavor in flavorCounts) {
        console.log(`You have entered ${flavorCounts[flavor]} ${flavor}.`);
    }
}

// This calls everything 
const input = getInput();
const flavors = processFlavors(input);
const flavorCounts = countFlavors(flavors);
displayResults(flavorCounts);