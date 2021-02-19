import {insert, getAll, deleteTask, editTask} from './studentService.js';

function tog(v){return v?'addClass':'removeClass';} 
  
  $(document).on('input', '.clearable', function(){
    $(this)[tog(this.value)]('x');
  }).on('mousemove', '.x', function( e ){
    $(this)[tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');   
  }).on('click', '.onX', function(){
    $(this).removeClass('x onX').val('');
  });
  
});
//$('.to-do-output table tbody tr').sortable();
$(function() {
   $("#addedtasklist tbody" ).sortable();
});

$(document).on("change",".checked",function()
{
   if ($(this).prop('checked')) {
      let id=$(this).attr('id');
      let task = localStorage.getItem("localTask");
      let taskVal= JSON.parse(task);
      let index = taskVal.findIndex(item => item.id == id);
      taskVal[index].status="true";
      localStorage.setItem("localTask", JSON.stringify(taskVal));
      getAll();
  } else {
   let id=$(this).attr('id');
   let task = localStorage.getItem("localTask");
   let taskVal= JSON.parse(task);
   let index = taskVal.findIndex(item => item.id == id);
   taskVal[index].status="false";
   localStorage.setItem("localTask", JSON.stringify(taskVal));
   getAll();
  }
})
$('input[id=task]').focus();
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
 getAll();