//For the motivation picture

let h1 = [];
h1.push(document.querySelector("#head-1"));
h1.push(document.querySelector("#head-2"));
h1.push(document.querySelector("#head-3"));
section = document.querySelector("#solution-head-section");

h1.forEach(item => {
  item.addEventListener("click", changePicture);
});

function changePicture(e) {
  console.log(e.target);
  if (h1[1].textContent === "you'll be drinking....") {
    section.style.backgroundImage = "url('img/video_games2.jpg')";
    h1[1].textContent = "you'll be playing....";
    h1[2].textContent = "video games all day";
  } else if (h1[1].textContent === "you'll be playing....") {
    section.style.backgroundImage = "url('img/sipping_coffee.jpg')";
    h1[1].textContent = "you'll be relaxing....";
    h1[2].textContent = "at an outdoor french cafe";
    //section.style.color = "#000";
  } else {
    section.style.backgroundImage = "url('img/cocktails_on_beach.jpg')";
    //section.style.color = "#fff";
    h1[1].textContent = "you'll be drinking....";
    h1[2].textContent = "cocktails on the beach";
  }
}
