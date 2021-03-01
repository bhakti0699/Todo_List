import {showTask} from './app.js';
import {Student} from './student.js';
document.write('<script src="js/paging.js" type="text/javascript"></script>');
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
        $("#error_display").css("display","block");
        $("#error_display").text("please enter value");
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
    $(document).ready(function() {
        $('#addedtasklist').paging({limit:5});
    });
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
    $("#savetaskbtn, #canceltaskbtn").css("display","block");
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
        $("#savetaskbtn, #canceltaskbtn").hide();
        localStorage.setItem("localTask", JSON.stringify(taskVal));
        getAll();
    });
}
export {insert, getAll, deleteTask, editTask}