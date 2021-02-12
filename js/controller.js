import {insert, getAll, deleteTask, editTask, completeTask} from './studentService.js';
$('tbody').sortable();
$("#task").on("input", function(){
   var regexp = /[^a-zA-Z0-9]/g;
   if($(this).val().match(regexp)){
      $("#error_display").css("display","block");
      $("#error_display").text("only allow the AlphaNumeric");
      $(this).val( $(this).val().replace(regexp,'') );
   }
 });
$("#task").on("keypress",function(event)
{
   if(event.keyCode=='13')
   {
      event.preventDefault();
      insert();
      $("input[id=task]").val('');
   }
});
/*$("#addbtn").on("click",function(){
    insert();
    $("input[id=task]").val('');
 });*/
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