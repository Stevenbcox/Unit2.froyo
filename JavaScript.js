const input = prompt("Enter a list of froyo flavors, separated by commas:");

if (input) {
    // Using the .map feature to group the flavors correctly so when the user 
    // inputs flavors with or without
    const flavors = input.split(',').map(flavor => flavor.trim());

    // Count the occurrences of each flavor
    const flavorCounts = {};
    flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });

    // Log each flavor and its count
    for (const flavor in flavorCounts) {
        console.log(`You have entered ${flavorCounts[flavor]} ${flavor}.`);
    }
  } else {
  console.log("No flavors entered.");
}
