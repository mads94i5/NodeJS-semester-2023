// loop methods: that are all methods that help loop over a list
// forEach, map, filter, find, sort, reduce

// Currying - side effect - code smell

const trolls = [
    { name: "anonymous", trollLevel: 8 },
    { name: "Hugo", trollLevel: 9001 },
    { name: "Mig", trollLevel: 69 }
];

// task add 5 troll levels to all the trolls
console.log(trolls);
trolls.forEach(troll => {
    troll.trollLevel += 5;
});
console.log("trolls:", trolls);

// trolls.map((element, index, array) => console.log(array));

const upgradedTrolls = trolls.map((troll) => {
    troll.trollLevel += 5;
    return troll;
});
console.log("upgradedTrolls trolls:", upgradedTrolls);


// return object - extra parenthesis
const doubleUpgradedTrolls = upgradedTrolls.map((troll) => ({
    name: troll.name,
    trollLevel: troll.trollLevel + 5
}));
console.log("doubleUpgradedTrolls:", doubleUpgradedTrolls);

const oddTrolls = doubleUpgradedTrolls.filter(checkIfTrollLevelIsOdd);

function checkIfTrollLevelIsOdd(troll) {
    return troll.trollLevel % 2 === 1;
};
console.log("Odd trolls:", oddTrolls);