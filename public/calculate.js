"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
function calculate(distance, nutsKg, foodHorse, carryMax) {
    const numTravels = nutsKg / carryMax;
    const consume = foodHorse * distance;
    let acc = nutsKg;
    for (let travelnumber = 1; travelnumber <= numTravels; travelnumber++) {
        if (numTravels === travelnumber) {
            acc = acc - consume;
        }
        else {
            acc = acc - (consume * 2);
        }
    }
    return acc;
}
exports.calculate = calculate;
