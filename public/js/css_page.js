//For the first section of the accordian
let yellowP = document.querySelectorAll(".p-1"); //This returns nodeList(2)[p.p-1,p.p-1]
let orangeH1 = document.querySelectorAll(".h1-1");
let greenUL = document.querySelectorAll(".ul-1");
const blueLI = document.querySelectorAll(".li-1a");
const redLI = document.querySelectorAll(".li-1b");
const yellowLI = document.querySelectorAll(".li-1c");
const pinkDiv = document.querySelectorAll(".div-1b");

let broke = document.querySelector("#broke");
let fixed = document.querySelector("#fixed");
let yellowPBtn = document.querySelectorAll(".btnp-1");
const orangeH1Btn = document.querySelectorAll(".btnh1-1");
const greenULBtn = document.querySelectorAll(".btnul-1");
const blueLIBtn = document.querySelectorAll(".btnli-1a");
const redLIBtn = document.querySelectorAll(".btnli-1b");
const yellowLIBtn = document.querySelectorAll(".btnli-1c");
const pinkDivBtn = document.querySelectorAll(".btndiv-1b");

broke.addEventListener("click", function(e) {
  if (e.target.className === "btnp-1")
    toggleDisplay(e, "yellow", "p", "paragraph", yellowP[0]);
  if (e.target.className === "btnh1-1")
    toggleDisplay(e, "orange", "h1", "header (h1-h6)", orangeH1[0]);
  if (e.target.className === "btnul-1")
    toggleDisplay(e, "green", "ul", "Unordered List", greenUL[0]);
  if (e.target.className === "btnli-1a")
    toggleDisplay(e, "blue", "li", "List Item", blueLI[0]);
  if (e.target.className === "btnli-1b")
    toggleDisplay(e, "red", "li", "List Item", redLI[0]);
  if (e.target.className === "btnli-1c")
    toggleDisplay(e, "yellow", "li", "List Item", yellowLI[0]);
  if (e.target.className === "btndiv-1b")
    toggleDisplay(e, "pink", "div", "div", pinkDiv[0]);
});

fixed.addEventListener("click", function(e) {
  if (e.target.className === "btnp-1")
    toggleDisplayFixed(e, "yellow", "p", "paragraph", yellowP[1]);
  if (e.target.className === "btnh1-1")
    toggleDisplayFixed(e, "orange", "h1", "header (h1-h6)", orangeH1[1]);
  if (e.target.className === "btnul-1")
    toggleDisplayFixed(e, "green", "ul", "Unordered List", greenUL[1]);
  if (e.target.className === "btnli-1a")
    toggleDisplayFixed(e, "blue", "li", "List Item", blueLI[1]);
  if (e.target.className === "btnli-1b")
    toggleDisplayFixed(e, "red", "li", "List Item", redLI[1]);
  if (e.target.className === "btnli-1c")
    toggleDisplayFixed(e, "yellow", "li", "List Item", yellowLI[1]);
  if (e.target.className === "btndiv-1b")
    toggleDisplayFixed(e, "pink", "div", "div", pinkDiv[1]);
});

function toggleDisplay(e, col, abb, elm, elmID) {
  console.log(elmID);
  let tog = 0;
  let disp = "block";
  let ndisp = "inline";
  e.target.innerText === `Make ${col} ${abb} inline` ? (tog = 0) : (tog = 1);
  tog == 0 ? (disp = "block") : (disp = "inline");
  tog == 1 ? (ndisp = "block") : (ndisp = "inline");
  e.target.innerText = `Make ${col} ${abb} ${disp}`;
  elmID.style.display = ndisp;

  elmID.innerText = `${elm} display is now ${ndisp}`;
}
function toggleDisplayFixed(e, col, abb, elm, elmID) {
  let tog = 0;
  let disp = "block";
  let ndisp = "inline";
  e.target.innerText === `Make ${col} ${abb} inline` ? (tog = 0) : (tog = 1);
  tog == 0 ? (disp = "block") : (disp = "inline");
  tog == 1 ? (ndisp = "block") : (ndisp = "inline");
  e.target.innerText = `Make ${col} ${abb} ${disp}`;
  elmID.style.display = ndisp;

  elmID.childNodes[0].textContent = `${elm} display is now ${ndisp}`;
}

//For the second section of the accordian
const yellowA = document.querySelector(".a-2");
const orangeLB = document.querySelector(".label-2");
const greenBUT = document.querySelector(".button-2");
const blueINP = document.querySelector(".input-2");
const redTB = document.querySelector(".textbox-2");
const pinkTA = document.querySelector(".textarea-2");

const yellowABtn = document.querySelector(".btna-2");
const orangeLBBtn = document.querySelector(".btnlabel-2");
const greenBUTBtn = document.querySelector(".btnbutton-2");
const blueINPBtn = document.querySelector(".btninput-2");
const redTBBtn = document.querySelector(".btntextbox-2");
const pinkTABtn = document.querySelector(".btntextarea-2");

yellowABtn.addEventListener("click", function(e) {
  toggle(e, "yellow", "a", yellowA);
});
orangeLBBtn.addEventListener("click", function(e) {
  toggle(e, "orange", "label", orangeLB);
});
greenBUTBtn.addEventListener("click", function(e) {
  toggle(e, "green", "button", greenBUT);
});
blueINPBtn.addEventListener("click", e => {
  let inl;
  blueINP.value.includes("inline") ? (inl = 1) : (inl = 0);
  if (inl == 0) {
    blueINP.value = "Input is a(n) inline element";
    blueINP.style.display = "inline";
    e.target.textContent = `Make blue input a(n) block element`;
  } else {
    blueINP.value = "Input is a(n) block element";
    blueINP.style.display = "block";
    e.target.textContent = `Make blue input a(n) inline element`;
  }
  console.log(blueINP);
});
redTBBtn.addEventListener("click", function(e) {
  toggle(e, "red", "textbox", redTB);
});
pinkTABtn.addEventListener("click", function(e) {
  //console.log(pinkTA);
  toggle(e, "pink", "textarea", pinkTA);
});

function toggle(e, color, item, elm) {
  e.target.childNodes[0].textContent.includes("block") ? (tog = 0) : (tog = 1);
  tog === 0 ? (disp = "inline") : (disp = "block");
  tog === 1 ? (ndisp = "inline") : (ndisp = "block");
  e.target.childNodes[0].textContent = `Make ${color} ${item} a(n) ${disp}`;
  elm.style.display = ndisp;
  elm.textContent = `${item} is a(n) ${ndisp} element`;
}

//For the third section of the accordian
let images = document.querySelectorAll(".img");
const displayBtn = document.querySelector(".btn3-1");
const marginBtn = document.querySelector(".btn3-2");
const widthBtn = document.querySelector(".btn3-3");

displayBtn.addEventListener("click", e => {
  Array.from(images).forEach(img => {
    if (getComputedStyle(img).display == "inline") {
      img.style.display = "block";
      e.target.textContent = "Images are block";
    } else if (getComputedStyle(img).display == "block") {
      img.style.display = "inline-block";
      e.target.textContent = "Images are inline-block";
    } else {
      img.style.display = "inline";
      e.target.textContent = "Images are inline";
    }
  });
});
marginBtn.addEventListener("click", e => {
  Array.from(images).forEach(img => {
    if (getComputedStyle(img).margin == "0px") {
      img.style.margin = "auto";
      e.target.textContent = "Margin is auto";
    } else {
      img.style.margin = "0px";
      e.target.textContent = "Margin is 0px";
    }
  });
});

widthBtn.addEventListener("click", e => {
  Array.from(images).forEach(img => {
    wid = getComputedStyle(img).width;
    console.log(wid);
    if (getComputedStyle(img).width == "500px") {
      img.style.width = "250px";
      e.target.textContent = "Width is 250px";
    } else {
      img.style.width = "500px";
      e.target.textContent = "Width is 500px";
    }
  });
});

let boxes = document.querySelectorAll(".box");
const display2Btn = document.querySelector(".btn3-4");
display2Btn.addEventListener("click", e => {
  Array.from(boxes).forEach(box => {
    if (getComputedStyle(box).display == "inline") {
      box.style.display = "block";
      e.target.textContent = "Boxes are block";
    } else if (getComputedStyle(box).display == "block") {
      box.style.display = "inline-block";
      e.target.textContent = "Boxes are inline-block";
    } else {
      box.style.display = "inline";
      e.target.textContent = "Boxes are inline";
    }
  });
});
//For the fourth section of the accordian -Float and Clear
const div1 = document.querySelector("#div-1");
const btnDiv1 = document.querySelector("#btnDiv-1");
const div2 = document.querySelector("#div-2");
const btnDiv2 = document.querySelector("#btnDiv-2");
const div3 = document.querySelector("#div-3");
const btnDiv3 = document.querySelector("#btnDiv-3");
const div4 = document.querySelector("#div-4");
const btnDiv4 = document.querySelector("#btnDiv-4");

const slider1 = document.querySelector("#width-1");
slider1.addEventListener("change", e => {
  document.querySelector("#lbl-1").innerText = `Div-1 Row=${e.target.value}%`;
  div1.style.width = `${e.target.value}%`;
});
const slider2 = document.querySelector("#width-2");
slider2.addEventListener("change", e => {
  document.querySelector("#lbl-2").innerText = `Div-2 Row=${e.target.value}%`;
  div2.style.width = `${e.target.value}%`;
});
const slider3 = document.querySelector("#width-3");
slider3.addEventListener("change", e => {
  document.querySelector("#lbl-3").innerText = `Div-3 Row=${e.target.value}%`;
  div3.style.width = `${e.target.value}%`;
});
const slider4 = document.querySelector("#width-4");
slider4.addEventListener("change", e => {
  document.querySelector("#lbl-4").innerText = `Div-4 Row=${e.target.value}%`;
  div4.style.width = `${e.target.value}%`;
  console.log(e.target.value);
});
btnDiv1.addEventListener("click", e => {
  if (div1.style.float === "") {
    div1.style.float = "right";
    btnDiv1.innerText = "Float: right";
  } else if (div1.style.float === "right") {
    div1.style.float = "left";
    btnDiv1.innerText = "Float: left";
  } else {
    div1.style.float = "";
    btnDiv1.innerText = "Float: none";
  }
});
btnDiv2.addEventListener("click", e => {
  if (div2.style.float === "") {
    div2.style.float = "right";
    btnDiv2.innerText = "Float: right";
  } else if (div2.style.float === "right") {
    div2.style.float = "left";
    btnDiv2.innerText = "Float: left";
  } else {
    div2.style.float = "";
    btnDiv2.innerText = "Float: none";
  }
});
btnDiv3.addEventListener("click", e => {
  if (div3.style.float === "") {
    div3.style.float = "right";
    btnDiv3.innerText = "Float: right";
  } else if (div3.style.float === "right") {
    div3.style.float = "left";
    btnDiv3.innerText = "Float: left";
  } else {
    div3.style.float = "";
    btnDiv3.innerText = "Float: none";
  }
});
btnDiv4.addEventListener("click", e => {
  if (div4.style.float === "") {
    div4.style.float = "right";
    btnDiv4.innerText = "Float: right";
  } else if (div4.style.float === "right") {
    div4.style.float = "left";
    btnDiv4.innerText = "Float: left";
  } else {
    div4.style.float = "";
    btnDiv4.innerText = "Float: none";
  }
});
const clearBtn1 = document.querySelector("#clearBtn-1");
clearBtn1.addEventListener("click", e => {
  const clearI = document.querySelector("#clear-1");
  if (clearI.style.clear === "both") {
    clearI.style.clear = "";
  } else {
    clearI.style.clear = "both";
  }
  console.log(clearI.style.clear);
  //clearI.style.clear = "both";
});
//For the fifth section of the accordian -position
let colorVal = "yellow";
let positionVal = "static";
let topBottom = "top";
let topBottomPixels = "0px";
let rightLeft = "right";
let rightLeftPixels = "0px";
divNum = document.querySelector("#divNum");
posType = document.querySelector("#posType");
divNum.addEventListener("change", e => {
  colorVal = e.target.value;
});
posType.addEventListener("change", e => {
  positionVal = e.target.value;
});
const topBot = document.querySelector("#topbot");
topBot.addEventListener("change", e => {
  document.querySelector("#topbot-1").innerText = `${e.target.value}px`;
  topBottomPixels = `${e.target.value}px`;
});
const rightleft = document.querySelector("#rightleft");
rightleft.addEventListener("change", e => {
  document.querySelector("#rightleft-1").innerText = `${e.target.value}px`;
  rightLeftPixels = `${e.target.value}px`;
});
const apply1 = document.querySelector("#apply-1");
apply1.addEventListener("click", e => {
  if (document.getElementById("leftRadio").checked === true) rightLeft = "left";
  else rightLeft = "right";
  if (document.getElementById("topRadio").checked === true) topBottom = "top";
  else topBottom = "bottom";
  let selElement;
  switch (colorVal) {
    case "yellow":
      selElement = document.getElementById("pos-1");
      break;
    case "red":
      selElement = document.getElementById("pos-2");
      break;
    case "blue":
      selElement = document.getElementById("pos-3");
      break;
    case "orange":
      selElement = document.getElementById("pos-4");
      break;
    case "pink":
      selElement = document.getElementById("pos-5");
      break;
  }
  selElement.style.position = positionVal;
  if (rightLeft === "left") {
    selElement.style.left = rightLeftPixels;
    selElement.style.right = "";
  } else {
    selElement.style.right = rightLeftPixels;
    selElement.style.left = "";
  }
  if (topBottom === "top") {
    selElement.style.top = topBottomPixels;
    selElement.style.bottom = "";
  } else {
    selElement.style.bottom = topBottomPixels;
    selElement.style.top = "";
  }
  console.log(selElement);
});
const reset1 = document.getElementById("reset-1");
reset1.addEventListener("click", e => {
  document.getElementById("pos-1").style.position = "static";
  document.getElementById("pos-2").style.position = "static";
  document.getElementById("pos-3").style.position = "static";
  document.getElementById("pos-4").style.position = "static";
  document.getElementById("pos-5").style.position = "static";
  document.getElementById("topbot").value = "0";
  document.getElementById("topbot-1").innerText = "0px";
  document.getElementById("rightleft").value = "0";
  document.getElementById("rightleft-1").innerText = "0px";
  document.getElementById("topRadio").checked = true;
  document.getElementById("rightRadio").checked = true;
  document.getElementById("divNum").value = "yellow";
  document.getElementById("posType").value = "static";
  rightLeftPixels = "0px";
  topBottomPixels = "0px";
  colorVal = "yellow";
  positionVal = "static";
});

///////////////////////////////////
//
// Flex Section
//
///////////////////////////////////
let flexItemsArray = [];
let flexAlignArray = [];

const flexContainer1 = document.querySelector("#flex-container1");
const flexContainer2 = document.querySelector("#flex-container2");
const flexContainer3 = document.querySelector("#flex-container3");
const flexContainer4 = document.querySelector("#flex-container4");
const flexContainer5 = document.querySelector("#flex-container5");
const flexContainer = document.querySelector("#flex-container");
const flexAlign = document.querySelector("#align-self-buttons");
const flexItems = document.querySelectorAll(".flex-item");
const flexItem1 = document.querySelector(".flex-item-1");
const flexItem2 = document.querySelector(".flex-item-2");
const flexItem3 = document.querySelector(".flex-item-3");
const flexItem4 = document.querySelector(".flex-item-4");
const flexItem5 = document.querySelector(".flex-item-5");
const flexItem6 = document.querySelector(".flex-item-6");
const flexAddBtn = document.querySelector(".flex-addBtn");
const flexRemoveBtn = document.querySelector(".flex-removeBtn");
const flexContainerBtn = document.querySelector(".flex-contBtn");
const flexContainerBtn2 = document.querySelector(".flex-contBtn2");
const flexContainerBtn3 = document.querySelector(".flex-contBtn3");
const flexContainerBtn4 = document.querySelector(".flex-contBtn4");
const flexItemBtn = document.querySelector(".flex-itemBtn");
const flexItem1Btn = document.querySelector(".flex-item-1Btn");
const flexItem2Btn = document.querySelector(".flex-item-2Btn");
const flexItem3Btn = document.querySelector(".flex-item-3Btn");
const flexItem4Btn = document.querySelector(".flex-item-4Btn");
const flexItem5Btn = document.querySelector(".flex-item-5Btn");
const flexItem6Btn = document.querySelector(".flex-item-6Btn");

flexAlign.addEventListener("click", e => {
  let num = e.target.id.substr(15);
  let nameClass = `flex-item-${num}`;
  let elm = document.querySelector(`.flex-item-${num}`);
  let txt = document.querySelector(`#as-${num}`);
  if (txt.textContent === "align-self:auto") {
    elm.classList.remove("alignSelfAuto");
    elm.classList.add("alignSelfFlexStart");
    txt.textContent = "align-self:flex-start";
  } else if (txt.textContent === "align-self:flex-start") {
    elm.classList.remove("alignSelfFlexStart");
    elm.classList.add("alignSelfFlexEnd");
    txt.textContent = "align-self:flex-end";
  } else if (txt.textContent === "align-self:flex-end") {
    elm.classList.remove("alignSelfFlexEnd");
    elm.classList.add("alignSelfCenter");
    txt.textContent = "align-self:center";
  } else if (txt.textContent === "align-self:center") {
    elm.classList.remove("alignSelfCenter");
    elm.classList.add("alignSelfStretch");
    txt.textContent = "align-self:stretch";
  } else if (txt.textContent === "align-self:stretch") {
    elm.classList.remove("alignSelfStretch");
    elm.classList.add("alignSelfBaseline");
    txt.textContent = "align-self:baseline";
  } else if (txt.textContent === "align-self:baseline") {
    elm.classList.remove("alignSelfBaseline");
    elm.classList.add("alignSelfAuto");
    txt.textContent = "align-self:auto";
  }
});

flexAddBtn.addEventListener("click", e => {
  let num = flexItemsArray.length + 1;
  let node = document.createElement("div");
  let nodeChild = document.createElement("p");
  let nodeChild2 = document.createElement("p");
  nodeChild2.id = `as-${num}`;
  let btnNode1 = document.createElement("button");

  //node.classList = `flex-item alignSelfAuto`;
  let flexClass = `flex-item-${num}`;
  node.classList = `alignSelfAuto flex-item ${flexClass}`;
  //node.classList = `flex-item flex-item-${num}`;

  btnNode1.id = `btn-align-self-${num}`;
  nodeChild.appendChild(document.createTextNode(`Flex Item ${num}`));
  nodeChild2.appendChild(document.createTextNode("align-self:auto"));
  node.appendChild(nodeChild);
  node.appendChild(nodeChild2);

  btnNode1.appendChild(document.createTextNode(`align-self-item ${num}`));
  btnNode1.style.background = "lightgray";
  flexContainer.appendChild(node);
  flexAlign.appendChild(btnNode1);
  flexItemsArray.push(node);
  flexAlignArray.push(btnNode1);
});
flexRemoveBtn.addEventListener("click", e => {
  let node = flexItemsArray.pop();
  let node1 = flexAlignArray.pop();
  flexContainer.removeChild(node);
  flexAlign.removeChild(node1);
});

flexContainerBtn.addEventListener("click", e => {
  if (flexContainer.style.display === "flex") {
    flexContainer.style.display = "block";
    flexContainerBtn.textContent = "Make Container display:flex";
    flexContainer1.textContent = "The container style is now display:block";
  } else {
    flexContainer.style.display = "flex";
    flexContainerBtn.textContent = "Make Container display:block";
    flexContainer1.textContent = "The container style is now display:flex";
  }
});

flexContainerBtn4.addEventListener("click", e => {
  if (
    flexContainer.style.justifyContent === "" ||
    flexContainer.style.justifyContent === "flex-start"
  ) {
    flexContainer.style.justifyContent = "flex-end";
    flexContainer5.textContent =
      "The container now has a style justify-content: flex-end";
    flexContainerBtn4.textContent = "Make justify-content:center";
  } else if (flexContainer.style.justifyContent === "flex-end") {
    flexContainer.style.justifyContent = "center";
    flexContainer5.textContent =
      "The container now has a style justify-content: center";
    flexContainerBtn4.textContent = "Make justify-content:space-between";
  } else if (flexContainer.style.justifyContent === "center") {
    flexContainer.style.justifyContent = "space-between";
    flexContainer5.textContent =
      "The container now has a style justify-content: space-between";
    flexContainerBtn4.textContent = "Make justify-content:space-around";
  } else if (flexContainer.style.justifyContent === "space-between") {
    flexContainer.style.justifyContent = "space-around";
    flexContainer5.textContent =
      "The container now has a style justify-content: space-around";
    flexContainerBtn4.textContent = "Make justify-content:space-evenly";
  } else if (flexContainer.style.justifyContent === "space-around") {
    flexContainer.style.justifyContent = "space-evenly";
    flexContainer5.textContent =
      "The container now has a style justify-content: space-evenly";
    flexContainerBtn4.textContent = "Make justify-content:flex-start";
  } else if (flexContainer.style.justifyContent === "space-evenly") {
    flexContainer.style.justifyContent = "flex-start";
    flexContainer5.textContent =
      "The container now has a style justify-content: flex-start";
    flexContainerBtn4.textContent = "Make justify-content:flex-end";
  }
});

flexContainerBtn3.addEventListener("click", e => {
  if (
    flexContainer.style.alignContent === "" ||
    flexContainer.style.alignContent === "stretch"
  ) {
    flexContainer.style.alignContent = "flex-start";
    flexContainer4.textContent =
      "The container now has a style align-content: flex-start";
    flexContainerBtn3.textContent = "Make align-content:flex-end";
  } else if (flexContainer.style.alignContent === "flex-start") {
    flexContainer.style.alignContent = "flex-end";
    flexContainer4.textContent =
      "The container now has a style align-content: flex-end";
    flexContainerBtn3.textContent = "Make align-content:center";
  } else if (flexContainer.style.alignContent === "flex-end") {
    flexContainer.style.alignContent = "center";
    flexContainer4.textContent =
      "The container now has a style align-content: center";
    flexContainerBtn3.textContent = "Make align-content:baseline";
  } else if (flexContainer.style.alignContent === "center") {
    flexContainer.style.alignContent = "baseline";
    flexContainer4.textContent =
      "The container now has a style align-content: baseline";
    flexContainerBtn3.textContent = "Make align-content:stretch";
  } else if (flexContainer.style.alignContent === "baseline") {
    flexContainer.style.alignContent = "stretch";
    flexContainer4.textContent =
      "The container now has a style align-content: stretch";
    flexContainerBtn3.textContent = "Make align-content:flex-start";
  }
});

flexContainerBtn2.addEventListener("click", e => {
  if (
    flexContainer.style.alignItems === "" ||
    flexContainer.style.alignItems === "stretch"
  ) {
    flexContainer.style.alignItems = "flex-start";
    flexContainer3.textContent =
      "The container now has a style align-items: flex-start";
    flexContainerBtn2.textContent = "Make align-items flex-end";
  } else if (flexContainer.style.alignItems === "flex-start") {
    flexContainer.style.alignItems = "flex-end";
    flexContainer3.textContent =
      "The container now has a style align-items: flex-end";
    flexContainerBtn2.textContent = "Make align-items center";
  } else if (flexContainer.style.alignItems === "flex-end") {
    flexContainer.style.alignItems = "center";
    flexContainer3.textContent =
      "The container now has a style align-items: center";
    flexContainerBtn2.textContent = "Make align-items baseline";
  } else if (flexContainer.style.alignItems === "center") {
    flexContainer3.textContent =
      "The container now has a style align-items: baseline";
    flexContainer.style.alignItems = "baseline";
    flexContainerBtn2.textContent = "Make align-items stretch";
  } else if (flexContainer.style.alignItems === "baseline") {
    flexContainer.style.alignItems = "stretch";
    flexContainer3.textContent =
      "The container now has a style align-items: stretch";
    flexContainerBtn2.textContent = "Make align-items flex-start";
  }
});

flexItemBtn.addEventListener("click", e => {
  flexItemsArray.forEach(item => {
    if (item.style.flex === "0 1 auto") {
      item.style.flex = "1 1 auto";
      flexItemBtn.textContent = "Remove flex 1";
      flexContainer2.textContent =
        "The container now has a style flex: 1 1 auto";
    } else {
      flexContainer2.textContent =
        "The container now has a style flex: 0 1 auto";
      item.style.flex = "0 1 auto";
      flexItemBtn.textContent = "Make flex: 1";
    }
  });
});
