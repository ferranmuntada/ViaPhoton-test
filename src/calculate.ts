export function calculate(distance: number, nutsKg: number, foodHorse: number, carryMax: number): number {
  const numTravels: number = nutsKg / carryMax;
  const consume: number = foodHorse * distance;
  let acc = nutsKg;
  for (let travelnumber: number = 1; travelnumber <= numTravels; travelnumber++) {
    if(numTravels === travelnumber) {
      acc = acc - consume;
    } else {
      acc = acc - (consume*2);
    }    
  }
  return acc;
}
