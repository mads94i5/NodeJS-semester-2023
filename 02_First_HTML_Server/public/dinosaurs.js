import { getDinosaurs, addDinosaur } from "./dinosaurFactory.js";

function getDinoInfo(exstinctDinosaurs) {
    console.log(`There are ${exstinctDinosaurs.length} exstinct dinosaurs`);
    console.table(exstinctDinosaurs);
}

getDinoInfo(getDinosaurs());