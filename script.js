const inputBox = document.querySelector("input");
const button = document.querySelector("button");
// getElementById("input_text");
const listContainer = document.querySelector("ul");
// getElementById("list-container");

const addTask = () => {
    if (inputBox.value === "") {
        alert("Enter task first");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "X";
        deleteBtn.classList.add("delete");
        li.appendChild(deleteBtn);
        savedata();
    }
    inputBox.value = "";
    savedata();
};

button.addEventListener("click", addTask);

listContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        savedata()
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    }
});
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();