let penny = .01;
let nickel = .05;
let dime = .1;
let quarter = .25;

function convertChange(val, roll, box) {
  let total = 0;
  switch(val) {
    case .01:
    case .10:
      while (roll > 0) {
        total += (val * 50);
        roll -= 1;
      }
      while (box > 0) {
        total += (val * 2500);
        box -= 1;
      }
      break;
    case .05:
    case .25:
      while (roll > 0) {
        total += (val * 40);
        roll -= 1;
      }
      while (box > 0) {
        total += (val * 2000);
        box -= 1;
      }
      break;
  }
  return total;
}

console.log(convertChange(.01, 4, 1));
console.log(convertChange(.25, 14, 3));