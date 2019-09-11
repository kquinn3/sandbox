//For the first section of the accordian Traversing the DOM
var elmVal = "div_1",
  comVal = "qs";
const elmType = document.querySelector("#elementType");
const comType = document.querySelector("#commandType");
const applyBtn = document.querySelector("#apply");
const parentBtn = document.querySelector("#parent");
const childBtn = document.querySelector("#child");
const resetBtn = document.querySelector("#reset");
const outP = document.querySelector("#results");
elmType.addEventListener("change", e => {
  elmVal = e.target.value;
});
comType.addEventListener("change", e => {
  comVal = e.target.value;
});
resetBtn.addEventListener("click", e => {
  outP.innerText = "";
});
applyBtn.addEventListener("click", e => {
  let sel;
  elmVal === "ul_1" || elmVal === "ul_2"
    ? (sel = "#" + elmVal)
    : (sel = "." + elmVal);
  sel = sel.replace("_", "-");
  if (comVal === "qs") {
    let out1 = document.querySelector(sel);
    makeElement(out1);
  } else {
    let out2 = document.querySelectorAll(sel);
    out2.forEach(item => {
      makeElement(item);
    });
  }
});

parentBtn.addEventListener("click", e => {
  let sel;
  elmVal === "ul_1" || elmVal === "ul_2"
    ? (sel = "#" + elmVal)
    : (sel = "." + elmVal);
  sel = sel.replace("_", "-");
  if (comVal === "qs") {
    let out1 = document.querySelector(sel);
    //console.log(out1.parentElement);
    makeElement(out1.parentElement);
  } else {
    let out2 = document.querySelectorAll(sel);
    out2.forEach(item => {
      makeElement(item.parentElement);
    });
  }
});
childBtn.addEventListener("click", e => {
  let sel;
  elmVal === "ul_1" || elmVal === "ul_2"
    ? (sel = "#" + elmVal)
    : (sel = "." + elmVal);
  sel = sel.replace("_", "-");
  if (comVal === "qs") {
    let out1 = document.querySelector(sel);
    out1.childNodes.forEach(item => {
      if (item.nodeType === 1) makeElement(item);
    });
  } else {
    let out2 = document.querySelectorAll(sel);
    out2.forEach(item => {
      item.childNodes.forEach(child => {
        if (child.nodeType === 1) makeElement(child);
      });
    });
  }
});

function makeElement(outV) {
  //console.log(outV);
  let node = document.createElement(outV.tagName);
  node.style.background = outV.style.background;
  node.appendChild(document.createTextNode(outV.childNodes[0].textContent));
  outP.appendChild(node);
}
