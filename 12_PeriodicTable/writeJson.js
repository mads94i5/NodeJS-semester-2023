const axios = require('axios');
const periodicTable = require('periodic-table');
const fs = require('fs');

async function fetchPeriodicTableFromPubChem() {
    try {
        const response = await axios.get(`https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/json`);
        return response.data?.Table || [];
    } catch (error) {
        console.error(`Error fetching periodic table data from PubChem:`, error.message);
        return [];
    }
}

const outputFileName = 'periodic-table.json';
const provenNumberOfElements = 118;
const groups = [
    {
        groupNameUIPAC: null,
        groupNameOldUIPAC: null,
        groupNameOldCAS: null,
        groupFamily: null,
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "1",
        groupNameOldUIPAC: "IA",
        groupNameOldCAS: "IA",
        groupFamily: "lithium group",
        groupTrivialName: "hydrogen and alkali metals",
        groupOtherName: "lithium group excludes hydrogen"
    },
    {
        groupNameUIPAC: "2",
        groupNameOldUIPAC: "IIA",
        groupNameOldCAS: "IIA",
        groupFamily: "beryllium group",
        groupTrivialName: "alkaline earth metals",
        groupOtherName: null
    },
    {
        groupNameUIPAC: "3",
        groupNameOldUIPAC: "IIIA",
        groupNameOldCAS: "IIIB",
        groupFamily: "scandium group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "4",
        groupNameOldUIPAC: "IVA",
        groupNameOldCAS: "IVB",
        groupFamily: "titanium group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "5",
        groupNameOldUIPAC: "VA",
        groupNameOldCAS: "VB",
        groupFamily: "vanadium group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "6",
        groupNameOldUIPAC: "VIA",
        groupNameOldCAS: "VIB",
        groupFamily: "chromium group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "7",
        groupNameOldUIPAC: "VIIA",
        groupNameOldCAS: "VIIB",
        groupFamily: "manganese group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "8",
        groupNameOldUIPAC: "VIII",
        groupNameOldCAS: "VIIIB",
        groupFamily: "iron group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "9",
        groupNameOldUIPAC: "VIII",
        groupNameOldCAS: "VIIIB",
        groupFamily: "cobalt group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "10",
        groupNameOldUIPAC: "VIII",
        groupNameOldCAS: "VIIIB",
        groupFamily: "nickel group",
        groupTrivialName: null,
        groupOtherName: null
    },
    {
        groupNameUIPAC: "11",
        groupNameOldUIPAC: "IB",
        groupNameOldCAS: "IB",
        groupFamily: "copper group",
        groupTrivialName: null,
        groupOtherName: "coinage metals"
    },
    {
        groupNameUIPAC: "12",
        groupNameOldUIPAC: "IIB",
        groupNameOldCAS: "IIB",
        groupFamily: "zinc group",
        groupTrivialName: null,
        groupOtherName: "volatile metals"
    },
    {
        groupNameUIPAC: "13",
        groupNameOldUIPAC: "IIIB",
        groupNameOldCAS: "IIIA",
        groupFamily: "boron group",
        groupTrivialName: "triels",
        groupOtherName: "icosagens"
    },
    {
        groupNameUIPAC: "14",
        groupNameOldUIPAC: "IVB",
        groupNameOldCAS: "IVA",
        groupFamily: "carbon group",
        groupTrivialName: "tetrels",
        groupOtherName: "crystallogens/adamantogens/merylides"
    },
    {
        groupNameUIPAC: "15",
        groupNameOldUIPAC: "VB",
        groupNameOldCAS: "VA",
        groupFamily: "nitrogen group",
        groupTrivialName: "pnictogens/pentels",
        groupOtherName: null
    },
    {
        groupNameUIPAC: "16",
        groupNameOldUIPAC: "VIB",
        groupNameOldCAS: "VIA",
        groupFamily: "oxygen group",
        groupTrivialName: "chalcogens",
        groupOtherName: null
    },
    {
        groupNameUIPAC: "17",
        groupNameOldUIPAC: "VIIB",
        groupNameOldCAS: "VIIA",
        groupFamily: "fluorine group",
        groupTrivialName: "halogens",
        groupOtherName: null
    },
    {
        groupNameUIPAC: "18",
        groupNameOldUIPAC: "0",
        groupNameOldCAS: "VIIIA",
        groupFamily: "helium/neon group",
        groupTrivialName: "noble gases",
        groupOtherName: "aerogens"
    },
]

async function main() {
    const PubChemTable = await fetchPeriodicTableFromPubChem();
    const PubChemRows = PubChemTable.Row;

    fs.writeFileSync('table.json', JSON.stringify(periodicTable, null, 2));
    fs.writeFileSync('table-pub.json', JSON.stringify(PubChemTable, null, 2));

    const elementsData = [];


    Object.keys(periodicTable.elements).forEach((elementKey) => {
        const element = periodicTable.elements[elementKey];

        elementDataFromPubChem = PubChemRows[element.atomicNumber - 1]

        const atomicMassParts = Array.isArray(element.atomicMass)
            ? [0, "(" + element.atomicMass[0] + ")"]
            : element.atomicMass.match(/^(\d+\.\d+)(?:\((\d+)\))?$/);

        const atomicMass = atomicMassParts[1];
        const atomicMassUncertainty = atomicMassParts[2] ? atomicMassParts[2] : null;

        const elementData = {
            atomicNumber: element.atomicNumber,
            name: element.name,
            symbol: element.symbol,
            atomicRadius: element.atomicRadius || null,
            atomicMass: atomicMass,
            atomicMassUncertainty: atomicMassUncertainty,
            density: element.density || null,
            period: determinePeriod(element) || null,
            groupNameIUPAC: determineGroup(element).groupNameUIPAC || null,
            groupNameOldIUPAC: determineGroup(element).groupNameOldUIPAC || null,
            groupNameOldCAS: determineGroup(element).groupNameOldCAS || null,
            groupFamily: determineGroup(element).groupFamily || null,
            groupTrivialName: determineGroup(element).groupTrivialName || null,
            groupOtherName: determineGroup(element).groupOtherName || null,
            groupBlock: element.groupBlock || null,
            block: determineBlock(element) + "-block" || null,
            atomicOrbitals: determineOrbital(element) || null,
            metallicClassification: determineMetalClassification(element),
            standardState: element.standardState || null,
            oxidationStates: element.oxidationStates || null,
            meltingPoint: element.meltingPoint || null,
            boilingPoint: element.boilingPoint || null,
            bondingType: element.bondingType || null,
            electronConfiguration: element.electronicConfiguration || null,
            electronAffinity: element.electronAffinity || null,
            electronegativity: element.electronegativity || null,
            ionizationEnergy: element.ionizationEnergy || null,
            ionRadius: element.ionRadius || null,
            vanDelWaalsRadius: element.vanDelWaalsRadius || null,
            cpkHexColor: element.cpkHexColor || "FFC0CB",
            hypothetical: determineHypothetical(element) || null,
            yearDiscovered: element.yearDiscovered.toString() || null,
        };

        elementsData.push(elementData);
    });

    const periodicTableData = { elements: elementsData };

    fs.writeFileSync(outputFileName, JSON.stringify(periodicTableData, null, 2));


}

function determinePeriod(element) {
    if (element.atomicNumber >= 1 && element.atomicNumber <= 2) return '1';
    else if (element.atomicNumber >= 3 && element.atomicNumber <= 10) return '2';
    else if (element.atomicNumber >= 11 && element.atomicNumber <= 18) return '3';
    else if (element.atomicNumber >= 19 && element.atomicNumber <= 36) return '4';
    else if (element.atomicNumber >= 37 && element.atomicNumber <= 54) return '5';
    else if (element.atomicNumber >= 55 && element.atomicNumber <= 86) return '6';
    else if (element.atomicNumber >= 87 && element.atomicNumber <= 118) return '7';
    else if (element.atomicNumber >= 119 && element.atomicNumber <= 168) return '8';
}

function determineGroup(element) {
    if (element.atomicNumber === 1 || element.atomicNumber === 3 ||
        element.atomicNumber === 11 || element.atomicNumber === 19 ||
        element.atomicNumber === 37 || element.atomicNumber === 55 ||
        element.atomicNumber === 87 || element.atomicNumber === 119) {
            return groups[1];
    } else if (element.atomicNumber === 4 || 
        element.atomicNumber === 12 || element.atomicNumber === 20 || 
        element.atomicNumber === 38 || element.atomicNumber === 56 || 
        element.atomicNumber === 88 || element.atomicNumber === 120) {
            return groups[2];
    } else if (element.atomicNumber === 21 || 
        element.atomicNumber === 39 || element.atomicNumber === 71 || 
        element.atomicNumber === 103 || element.atomicNumber === 153) {
            return groups[3];
    } else if (element.atomicNumber === 22 || 
        element.atomicNumber === 40 || element.atomicNumber === 72 || 
        element.atomicNumber === 104 || element.atomicNumber === 154) {
            return groups[4];
    } else if (element.atomicNumber === 23 || 
        element.atomicNumber === 41 || element.atomicNumber === 73 || 
        element.atomicNumber === 105 || element.atomicNumber === 155) {
            return groups[5];
    } else if (element.atomicNumber === 24 || 
        element.atomicNumber === 42 || element.atomicNumber === 74 || 
        element.atomicNumber === 106 || element.atomicNumber === 156) {
            return groups[6];
    } else if (element.atomicNumber === 25 || 
        element.atomicNumber === 43 || element.atomicNumber === 75 || 
        element.atomicNumber === 107 || element.atomicNumber === 157) {
            return groups[7];
    } else if (element.atomicNumber === 26 || 
        element.atomicNumber === 44 || element.atomicNumber === 76 || 
        element.atomicNumber === 108 || element.atomicNumber === 158) {
            return groups[8];
    } else if (element.atomicNumber === 27 || 
        element.atomicNumber === 45 || element.atomicNumber === 77 || 
        element.atomicNumber === 109 || element.atomicNumber === 159) {
            return groups[9];
    } else if (element.atomicNumber === 28 || 
        element.atomicNumber === 46 || element.atomicNumber === 78 || 
        element.atomicNumber === 110 || element.atomicNumber === 160) {
            return groups[10];
    } else if (element.atomicNumber === 29 || 
        element.atomicNumber === 47 || element.atomicNumber === 79 || 
        element.atomicNumber === 111 || element.atomicNumber === 161) {
            return groups[11];
    } else if (element.atomicNumber === 30 || 
        element.atomicNumber === 48 || element.atomicNumber === 80 || 
        element.atomicNumber === 112 || element.atomicNumber === 162) {
            return groups[12];
    } else if (element.atomicNumber === 5 || 
        element.atomicNumber === 13 || element.atomicNumber === 31 || 
        element.atomicNumber === 49 || element.atomicNumber === 81 || 
        element.atomicNumber === 113 || element.atomicNumber === 163) {
            return groups[13];
    } else if (element.atomicNumber === 6 || 
        element.atomicNumber === 14 || element.atomicNumber === 32 || 
        element.atomicNumber === 50 || element.atomicNumber === 82 || 
        element.atomicNumber === 114 || element.atomicNumber === 164) {
            return groups[14];
    } else if (element.atomicNumber === 7 || 
        element.atomicNumber === 15 || element.atomicNumber === 33 || 
        element.atomicNumber === 51 || element.atomicNumber === 83 || 
        element.atomicNumber === 115 || element.atomicNumber === 165) {
            return groups[15];
    } else if (element.atomicNumber === 8 || 
        element.atomicNumber === 16 || element.atomicNumber === 34 || 
        element.atomicNumber === 52 || element.atomicNumber === 84 || 
        element.atomicNumber === 116 || element.atomicNumber === 166) {
            return groups[16];
    } else if (element.atomicNumber === 9 || 
        element.atomicNumber === 17 || element.atomicNumber === 35 || 
        element.atomicNumber === 53 || element.atomicNumber === 85 || 
        element.atomicNumber === 117 || element.atomicNumber === 167) {
            return groups[17];
    } else if (element.atomicNumber === 2 || element.atomicNumber === 10 || 
        element.atomicNumber === 18 || element.atomicNumber === 36 || 
        element.atomicNumber === 54 || element.atomicNumber === 86 || 
        element.atomicNumber === 118 || element.atomicNumber === 168) {
            return groups[18];
    } else {
        return groups[0]
    }
}

function determineOrbital(element) {
    const block = determineBlock(element);
    if (block === 's') {
        return determinePeriod(element) + block;
    } else if (block === 'g') {
        return determinePeriod(element) + block;
    } else if (block === 'f') {
        return (parseInt(determinePeriod(element)) - 2) + block;
    } else if (block === 'd') {
        return (parseInt(determinePeriod(element)) - 1) + block;
    } else if (block === 'p') {
        return determinePeriod(element) + block;
    }
}

function determineBlock(element) {
    if (element.atomicNumber >= 1 && element.atomicNumber <= 4 ||
        element.atomicNumber >= 11 && element.atomicNumber <= 12 ||
        element.atomicNumber >= 19 && element.atomicNumber <= 20 ||
        element.atomicNumber >= 37 && element.atomicNumber <= 38 ||
        element.atomicNumber >= 55 && element.atomicNumber <= 56 ||
        element.atomicNumber >= 87 && element.atomicNumber <= 88 ||
        element.atomicNumber >= 119 && element.atomicNumber <= 120) {
        return 's';
    } else if (element.atomicNumber >= 121 && element.atomicNumber <= 138) {
        return 'g';
    } else if (element.atomicNumber >= 57 && element.atomicNumber <= 70 ||
        element.atomicNumber >= 89 && element.atomicNumber <= 102 ||
        element.atomicNumber >= 139 && element.atomicNumber <= 152) {
        return 'f';
    } else if (element.atomicNumber >= 21 && element.atomicNumber <= 30 ||
        element.atomicNumber >= 39 && element.atomicNumber <= 48 ||
        element.atomicNumber >= 71 && element.atomicNumber <= 80 ||
        element.atomicNumber >= 103 && element.atomicNumber <= 112 ||
        element.atomicNumber >= 153 && element.atomicNumber <= 162) {
        return 'd';
    } else if (element.atomicNumber >= 5 && element.atomicNumber <= 10 ||
        element.atomicNumber >= 13 && element.atomicNumber <= 18 ||
        element.atomicNumber >= 31 && element.atomicNumber <= 36 ||
        element.atomicNumber >= 49 && element.atomicNumber <= 54 ||
        element.atomicNumber >= 81 && element.atomicNumber <= 86 ||
        element.atomicNumber >= 113 && element.atomicNumber <= 118 ||
        element.atomicNumber >= 163 && element.atomicNumber <= 168) {
        return 'p';
    }
}

function determineMetalClassification(element) {
    if (element.groupBlock === "metal" ||
        element.groupBlock === "alkali metal" ||
        element.groupBlock === "alkaline earth metal" ||
        element.groupBlock === "transition metal" ||
        element.groupBlock === "post-transition metal" ||
        element.groupBlock === "lanthanoid" ||
        element.groupBlock === "actinoid") {
        return 'metal';
    } else if (element.groupBlock === "metalloid") {
        return 'metalloid';
    } else {
        return 'non-metal';
    }
}

function determineHypothetical(element) {
    if (element.atomicNumber >= 1 && element.atomicNumber <= provenNumberOfElements) {
        return "observed element";
    } else {
        return "theoretical element";
    }
}


main();

console.log(`Finished writing periodic table to ${outputFileName}`);
