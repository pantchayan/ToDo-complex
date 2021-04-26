let colorbtns = document.querySelector(".color-btns");
let container = document.querySelector(".container");
let plusBtn = document.querySelector(".plus");
let multBtn = document.querySelector(".fa-times");

let body = document.body;

colorbtns.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("Color clicked", e.path[0].childNodes[1]);
  //   path[0].childNodes[1]
  let color = e.path[0].classList[1];
  if (!color) {
    color = e.path[0].childNodes[1].classList[1];
  }

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
  plusBtn.classList.add("clicked");
  let modal;
  if (!document.querySelector(".modal")) {
    modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.innerHTML = modalTemplate;
    body.appendChild(modal);
  }
  handleModal(modal);
});

let handleModal = (modal) => {
  // Setting color in modal
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
      e.target.classList.add("btn-border");
    }
  });
  // Get text value from modal
  let textArea = document.querySelector("#task-input");
  let task;

  textArea.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && textArea.value != "") {
      task = textArea.value;
      if (selectedColor) {
        if (modal) {
          modal.remove();
        }

        // call to make a new task
        createTask(selectedColor, task);
      } else {
        alert("Choose a color!");
      }
    }
  });
};

let createTask = (color, task) => {
  let newtaskContainer = document.createElement("div");
  newtaskContainer.setAttribute("class", "task-container");

  newtaskContainer.innerHTML = `<div class="task-color ${color}"></div>    
  <div class="task-id">random id</div>
  <div class="task-value">${task}</div>`;

  // let taskColorBand = document.querySelector(".task-color");
  // console.log();

  // SWITCHING COLOR OF TASK BANDS
  addColorSwitch(newtaskContainer.childNodes[0]);
  plusBtn.classList.remove("clicked");
  container.appendChild(newtaskContainer);
};

// SWITCHING COLOR OF A SINGLE TASK BAND
let addColorSwitch = (taskColorBand) => {
  taskColorBand.addEventListener("click", (e) => {
    let colors = ["pink", "blue", "green", "black"];
    let currentColor = taskColorBand.classList[1];
    let idx = 0;
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] === currentColor) {
        idx = i;
        break;
      }
    }
    console.log(currentColor, idx);
    if (idx + 1 < colors.length) {
      taskColorBand.setAttribute("class", `task-color ${colors[idx + 1]}`);
    } else {
      taskColorBand.setAttribute("class", `task-color ${colors[0]}`);
    }
  });
};
