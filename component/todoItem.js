
import html from '../core.js';
import { connect } from '../store.js'

function todoItem({ todo, index, indexEdit }) { // nhận các oject đã lấy 

    return html`
    <li id = "${todo.id}"
     class="${todo.complete && 'completed'}  ${indexEdit === index && 'editing'} ">
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.complete && 'checked'} onchange="dispatch('CHECKBOX', ${index})" >
        <label ondblclick="dispatch('Edit',${index})">${todo.nameList}</label>
        <button class="destroy" onclick="dispatch('destroy',${index})"></button>
    </div>
    <input class="edit" value="${todo.nameList}" onkeyup="event.keyCode === 13 && dispatch('saveEdit',this.value.trim()) || event.keyCode === 27 && dispatch('cancelEdit') " onblur="dispatch('saveEdit',this.value.trim())">
        </li>  
    `
}
export default connect()(todoItem)
