import {insert, getAll, deleteTask, editTask, completeTask} from './studentService.js';
$("#addbtn").button().click(function(){
    insert();
    $("input[id=task]").val('');
 });
 $(document).on("click","#addedtasklist tbody tr td button.edit",function()
 {
    let id=$(this).attr('id');
    editTask(id);
 });
 $(document).on("click","#addedtasklist tbody tr td button.trash",function()
 {
     let id=$(this).attr('id');
     deleteTask(id);
 });
 $(document).on("click","#addedtasklist tbody tr td button.check",function()
 {
    let id=$(this).attr('id');
    completeTask(id);
 });
 getAll();