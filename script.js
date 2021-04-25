let colorbtns = document.querySelector(".color-btns");
let plusBtn = document.querySelector(".plus");
let body = document.body;

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

let modalTemplate = `<div class="modal-input">
    <!-- <textarea id="task-input" -->
    <textarea id="task-input" placeholder="Enter your task here!"></textarea>
    
  </div>
  <div class="modal-colors">
    <div class="modal-color pink"></div>
    
    <div class="modal-color blue"></div>
    
    <div class="modal-color green"></div>
    
    <div class="modal-color black"></div>
  </div>`;

plusBtn.addEventListener("click", (e) => {
  // e.preventDefault();
  console.log("plus is clicked");
  if (!document.querySelector(".modal")) {
    let modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.innerHTML = modalTemplate;
    body.appendChild(modal);
  }
  handleModal();
});

let handleModal = () => {

  // Setting color
  let selectedColor;
  let modalColorBtns = document.querySelector(".modal-colors");

  modalColorBtns.addEventListener("click", (e) => {
    for (let i = 0; i < modalColorBtns.childNodes.length; i++) {
      if (modalColorBtns.childNodes[i].classList) {
        modalColorBtns.childNodes[i].classList.remove("btn-border");
      }
    }
    if (e.target.classList[1]) {
      selectedColor = e.target.classList[1];
      console.log(selectedColor);
      e.target.classList.add("btn-border");
    }
  });

  // Get text value


  

}