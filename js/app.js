function showTask(taskVal)
{
    let html = ``;
    let addedTaskList = document.getElementById("addedtasklist");
    taskVal.forEach((item) => {
        html += `<tr class="ui-sortable-handle">
                    ${item.status=="true" ? `<td><input type="checkbox" id="${item.id}" class="checked" checked/></td><td class="completed">${item.task}</td>`:`<td><input type="checkbox" id="${item.id}" class="checked"/></td><td>${item.task}</td>`}
                    <td><button type="button" class="edit text-primary" id=${item.id}><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="trash text-danger trash" id=${item.id}><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedTaskList.innerHTML = html;  
} 
export {showTask}