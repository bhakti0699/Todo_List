function showTask(taskVal)
{
    let html = ``;
    let addedTaskList = document.getElementById("addedtasklist");
    taskVal.forEach((item) => {
        html += `<tr class="ui-sortable-handle">
                    ${item.status=="true" ? 
                    `<td><input type="checkbox" id="${item.id}" class="checked" checked/></td>
                    <td class="completed">${item.task}</td>`
                    :
                    `<td><input type="checkbox" id="${item.id}" class="checked"/></td>
                    <td>${item.task}</td>`}
                    <td>
                        <button type="button" class="edit btn btn-success" id=${item.id}>
                            <em class="fa fa-pencil"></em>
                        </button>
                        <button type="button" class="trash btn btn-danger" id=${item.id}>
                            <em class="fa fa-trash"></em>
                        </button>
                        </td>
                </tr>`;
    });
    addedTaskList.innerHTML = html; 

} 
export {showTask}