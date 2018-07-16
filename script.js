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
    progressNum.innerText = `  ${progressTask} task`;
    doneNum.innerText = `${doneTask} task`;
}
$(document).ready(() => {
    updateTask();
    var ID_NUMBER = 1;
    function addTask(taskDesc){
        var taskList = document.createElement("li");
        var taskText = document.createTextNode(taskDesc);
        taskList.appendChild(taskText);
        taskList.setAttribute("id", ID_NUMBER);
        taskList.classList.add("list-group-item", "list-group-item-action", "list-group-item-info");
        taskList.setAttribute("draggable", true);
        taskList.setAttribute("ondragstart", "drag(event)");
        ID_NUMBER++;
        return taskList;
    }
    $("#todoButton").on("click", function(){
        var desc = prompt("Type a name for your task....");
        var item = addTask(desc);
        todoBox.appendChild(item);
        updateTask();
    });
    $("#progressButton").on("click", function(){
        var desc = prompt("Type a name for your task....");
        var item = addTask(desc);
        progressBox.appendChild(item);
        updateTask();
    });
    $("#doneButton").on("click", function(){
        var desc = prompt("Type a name for your task....");
        var item = addTask(desc);
        doneBox.appendChild(item);
        updateTask();
    });
});
