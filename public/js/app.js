if (window.location.pathname == "/template/multi_image") {
  const imported = document.createElement("script");
  imported.src = "../js/multi_image_page.js";
  document.head.appendChild(imported);
}
if (window.location.pathname == "/reference/css") {
  const imported = document.createElement("script");
  imported.src = "../js/css_page.js";
  document.head.appendChild(imported);
}
if (window.location.pathname == "/reference/javascript") {
  const imported = document.createElement("script");
  imported.src = "../js/javascript_page.js";
  document.head.appendChild(imported);
}
if (window.location.pathname == "/") {
  const imported = document.createElement("script");
  imported.src = "../js/home_page.js";
  document.head.appendChild(imported);
}
