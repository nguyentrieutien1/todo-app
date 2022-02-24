const inputElement = document.querySelector("#actions");
const selectElement = document.querySelector("#select");
const addActionsElement = document.querySelector("#add");
const content = document.querySelector("#content");
let valueInput = "",
  valueSelect = "on";
inputElement.onchange = function (event) {
  console.log(event);
  console.log(event.target.value);
  if (event.target.value === "") {
    alert("input is empty, plz enter againnnn");
    return;
  }
  valueInput = event.target.value;
};
inputElement.onfocus = function () {
  inputElement.classList.remove("warning");
  inputElement.style.border = "1px solid black";
};

selectElement.onchange = function (event) {
  valueSelect = event.target.value;
};

let arrTodo = JSON.parse(localStorage.getItem("arrTodo")) || [];
addActionsElement.onclick = function (e) {
  e.preventDefault();
  if (valueInput === "") {
    inputElement.classList.add("warning");
    inputElement.style.border = "1px solid red";
    return;
  }
  const obj = {
    value: valueInput,
    status: valueSelect,
  };
  arrTodo.push(obj);
  localStorage.setItem("arrTodo", JSON.stringify(arrTodo));
  renderTodo(arrTodo);
  window.location.reload(true);
};
const arr = JSON.parse(localStorage.getItem("arrTodo")) || [];
function renderTodo(arr) {
  const mapTodo = [];
  arr.forEach(function (value, index, arr) {
    const objArrTodo = `<tr>
              <td class="edit" contenteditable="false">${value.value}</td>
              <td>
                <span class="label label-${
                  value.status === "off" ? "success" : "danger"
                }">${value.status}</span>
              </td>
              <td>
                <button type="button" class="btn btn-info">Sửa</button>
                <button type="button" class="btn btn-danger delete">Xóa</button>
              </td>
            </tr>`;
    mapTodo.push(objArrTodo);
    content.innerHTML = mapTodo.join(" ");
  });
}
renderTodo(arr);

//UPDATE
const statusElement = document.querySelectorAll(".label");
const deleteBtn = document.querySelectorAll(".delete");
statusElement.forEach(function (value, index) {
  value.onclick = function () {
    console.log(arr[index].status);
    if (arr[index].status === "on") {
      arr[index].status = "off";
    } else {
      arr[index].status = "on";
    }
    localStorage.setItem("arrTodo", JSON.stringify(arr));
    window.location.reload(true);
  };
});

deleteBtn.forEach(function (btn, index) {
  btn.onclick = function () {
    arr.splice(index, 1);
    localStorage.setItem("arrTodo", JSON.stringify(arr));
    window.location.reload(true);
  };
});
// UPDATE
const editBtn = document.querySelectorAll(".btn-info");
const editElement = document.querySelectorAll(".edit");
editBtn.forEach((btn, index) => {
  btn.onclick = function () {
    if (this.innerHTML === "Sửa") {
      this.innerHTML = "Lưu";
      editElement[index].setAttribute("contenteditable", "true");
      editElement[index].focus();
    } else {
      this.innerHTML = "Sửa";
      editElement[index].setAttribute("contenteditable", "false");
      const content = editElement[index].textContent;
      arr[index].value = content;
      localStorage.setItem("arrTodo", JSON.stringify(arr));
    }
  };
});
