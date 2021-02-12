function showTask(taskVal)
{
    let html = '';
    let addedTaskList = document.getElementById("addedtasklist");
    taskVal.forEach((item, index) => {
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${item.status=="true" ? `<td class="completed">${item.task}</td>`:`<td>${item.task}</td>`}
                    <td><button type="button" class="edit text-primary" id=${item.id}><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="check text-success" id=${item.id}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" class="trash text-danger trash" id=${item.id}><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedTaskList.innerHTML = html;  
} 
export {showTask}