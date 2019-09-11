const round1Btn = document.querySelector("#btn-1");
const round2Btn = document.querySelector("#btn-2");
const round3Btn = document.querySelector("#btn-3");

round1Btn.addEventListener("click", function(e) {
  makeRound(e, "#img-1");
});
round2Btn.addEventListener("click", function(e) {
  makeRound(e, "#img-2");
});
round3Btn.addEventListener("click", function(e) {
  makeRound(e, "#img-3");
});

//Event Handler
function makeRound(e, img) {
  const imgRound = document.querySelectorAll(img);
  if (e.target.innerText === "Make Round") {
    imgRound.forEach(im => im.classList.add("rounded-circle"));
    e.target.innerText = "Make Square";
  } else {
    imgRound.forEach(im => im.classList.remove("rounded-circle"));
    e.target.innerText = "Make Round";
  }
}
