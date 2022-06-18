var pennySingleUp = document.getElementById("buttonPlusPennyS");
var pennySingleDown = document.getElementById("buttonMinusPennyS");
var pennyBoxUp = document.getElementById("buttonPlusPennyB");
var pennyBoxDown = document.getElementById("buttonMinusPennyB");

let pennyS = document.getElementById("pennyS");
var pennySCount = 0;
pennyS.innerHTML = pennySCount;
let pennyB = document.getElementById("pennyB");
var pennyBCount = 0;
pennyB.innerHTML = pennyBCount;
let pennyT = 0;

const clickPennySUp = () => {
  pennySCount += 1;
  pennyS.innerHTML = pennySCount;
}

const clickPennySDown = () => {
  pennySCount -= 1;
  pennyS.innerHTML = pennySCount;
}

function clickPennyBUp(val) {
  val += 1;
  pennyB.innerHTML = val;
  return val;
  
}

function clickPennyBDown(val) {
  val -= 1;
  pennyB.innerHTML = val;
  return val;
}

function updatePenny(one, two, three) {
  one = convertMoney(.01, two, three);
  document.getElementById("pennyT").text(one);
  return one;

}

pennySingleUp.addEventListener("click", clickPennySUp());
pennySingleUp.addEventListener("click", updatePenny(pennyT, pennySCount, pennyBCount));
pennySingleDown.addEventListener("click", clickPennySDown());
pennySingleDown.addEventListener("click", updatePenny(pennyT, pennySCount, pennyB));
pennyBoxUp.addEventListener("click", clickUp(pennyB));
pennyBoxUp.addEventListener("click", updatePenny(pennyT, pennySCount, pennyB));
pennyBoxDown.addEventListener("click", clickDown(pennyB));
pennyBoxDown.addEventListener("click", updatePenny(pennyT, pennySCount, pennyB));