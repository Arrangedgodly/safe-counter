function clickUp(val) {
  val += 1;
  return val;
}

function clickDown(val) {
  val -= 1;
  return val;
}

function updatePenny(one, two, three) {
  one = convertMoney(.01, two, three);
  document.getElementById("#pennyT").text(one);
  return one;

}

var pennySingleUp = document.getElementById("buttonPlusPennyS");
var pennySingleDown = document.getElementById("buttonMinusPennyS");
var pennyBoxUp = document.getElementById("buttonPlusPennyB");
var pennyBoxDown = document.getElementById("buttonMinusPennyB");

let pennyS = document.getElementById("#pennyS");
let pennyB = document.getElementById("pennyB");
let pennyT = 0;

pennySingleUp.onclick = clickUp(pennyS);
pennySingleUp.onclick = updatePenny(pennyT, pennyS, pennyB);
pennySingleDown.onclick = clickDown(pennyS);
pennySingleDown.onclick = updatePenny(pennyT, pennyS, pennyB);
pennyBoxUp.onclick = clickUp(pennyB);
pennyBoxUp.onclick = updatePenny(pennyT, pennyS, pennyB);
pennyBoxDown.onclick = clickDown(pennyB);
pennyBoxDown.onclick = updatePenny(pennyT, pennyS, pennyB);