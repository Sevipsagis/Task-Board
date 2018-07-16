function allowDrop(event) {
    event.preventDefault();
};

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
};

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    if(event.target.classList.contains("task-box")){
        event.target.appendChild(document.getElementById(data));
        updateTask();
    }
};
function updateTask(){
    var todoTask = todoBox.childElementCount;
    var progressTask = progressBox.childElementCount;
    var doneTask = doneBox.childElementCount;
    console.log(todoTask, progressTask, doneTask);
    todoNum.innerText = `${todoTask} task`;
    progressNum.innerText = `${progressTask} task`;
    doneNum.innerText = `${doneTask} task`;
}
$(document).ready(function(){
    updateTask();
});
