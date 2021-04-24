let colorbtns = document.querySelector(".color-btns");

colorbtns.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Color clicked", e.path[0].childNodes[1]);
  //   path[0].childNodes[1]
  let color = e.path[0].classList[1];
  if (!color) {
       color = e.path[0].childNodes[1].classList[1];
  }

  let container = document.querySelector(".container");
  container.setAttribute("class", `container ${color}`);
});
