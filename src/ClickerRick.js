let clickers = 15;
let startTime = Date.now();

// position element in the DOM
function sync(dom, pos) {
  dom.style.left = `${pos.x}px`;
  dom.style.top = `${pos.y}px`;
}
//creates ricks
function addClicker() {
  const pos = {
    x: Math.random() * 500,
    y: Math.random() * 300
  };
  const img = new Image();
  img.src = "res/images/rick.png";
  img.style.position = "absolute";
  img.addEventListener("click", removeClicker, false);

  document.querySelector("#board").appendChild(img);
  sync(img, pos);
}
//removes ricks
function removeClicker(e) {
  e.target.parentNode.removeChild(e.target);
  clickers--;
  checkGameOver();
  test.parentNode.removeChild(test);
  //updates number of ricks left
  test = document.createTextNode("You have "+clickers +" Ricks left");
  CLeft.appendChild(test);
  document.getElementById("board").appendChild(CLeft);
  
}
//sees if game is over
function checkGameOver() {
   
  if (clickers === 0) {
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert(`De-rick-ed in ${taken} seconds!`);
  }
}

// Add all the Ricks!
for (let i = 0; i < clickers; i++) {
  addClicker();}
// creates text of how many ricks left
var CLeft = document.createElement("P");
var test= document.createTextNode("You have "+clickers +" Ricks left")
CLeft.appendChild(test);
document.getElementById("board").appendChild(CLeft);
