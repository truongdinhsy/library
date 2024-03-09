
import html from '../core.js';
import todoitem from '../component/todoItem.js'
import { connect } from '../store.js'
import storage from '../util/storage.js';

function main_todoList({ todos, filter, filters }) { //  nhận thẳng todos

    return html`
    <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" onchange="dispatch('toggleAll', this.checked)" ${todos.every(filters.complete) && 'checked'}>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
     ${todos.filter(filters[filter]).map((todo, index) => todoitem({ todo, index }))}       
    </ul>
</section>
    `
}
export default connect()(main_todoList)
