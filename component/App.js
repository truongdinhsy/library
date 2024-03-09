import html from '../core.js';
import header from '../component/header.js'
import main_todoList from '../component/main_todoList.js';
import footer from '../component/footer.js'
import { connect } from '../store.js'


function App({ todos }) {
    return html`
    <section class="todoapp"> 
    ${header()}
    ${todos.length > 0 && main_todoList()}
    ${todos.length > 0 && footer()}
    </section>
    `
}

export default connect()(App)
