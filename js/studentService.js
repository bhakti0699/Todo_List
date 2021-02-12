import {showTask} from './app.js';
import {Student} from './student.js';
function insert()
{
    var stud=new Student();
    if($("#task").val().length!==0)
    {
        stud.id=Date.now();
        stud.task=$("#task").val();
        stud.status;

        var taskVal;
        var task=localStorage.getItem("localTask");
        if(task==null)
        {
            taskVal=[];
        }
        else
        {
            taskVal=JSON.parse(task);
        }
        taskVal.push(stud);
        localStorage.setItem("localTask",JSON.stringify(taskVal));
        getAll();
    }
    else{
        alert("please Enter value")
    }
}
function getAll()
{
    var taskVal;
    let task = localStorage.getItem("localTask");
    if(task == null)
    {
        taskVal = [];
    }
    else
    {
        taskVal = JSON.parse(task);
    }
    showTask(taskVal);
}
function deleteTask(id)
{
    let task = localStorage.getItem("localTask");
    let taskVal= JSON.parse(task);
    let index = taskVal.findIndex(item => item.id == id);
    taskVal.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskVal));
    getAll();
}
function editTask(id)
{
    let task = localStorage.getItem("localTask");
    let taskVal= JSON.parse(task);
    let index = taskVal.findIndex(item => item.id == id);  
    $("#task").val(taskVal[index]['task']);
    $("#addbtn").css("display","none");
    $("#savetaskbtn").css("display","block");
    saveTask(taskVal,index);
}
function saveTask(taskVal,index)
{
    $("#savetaskbtn").button().click(function()
    {  
        for(let keys in taskVal[index])
        {
            if(keys=='task')
            {
                taskVal[index].task=$("#task").val();
            }
        }
        $("#savetaskbtn").css("display","none");
        $("#addbtn").css("display","block");
        localStorage.setItem("localTask", JSON.stringify(taskVal));
        getAll();
    });
}
function completeTask(id)
{
    let task = localStorage.getItem("localTask");
    let taskVal= JSON.parse(task);
    let index = taskVal.findIndex(item => item.id == id);
    taskVal[index].status="true";
    localStorage.setItem("localTask", JSON.stringify(taskVal));
    getAll();
}
export {insert,getAll,deleteTask,editTask,completeTask}