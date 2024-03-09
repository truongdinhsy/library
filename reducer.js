import storage from './util/storage.js';

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.complete,
        complete: todo => todo.complete
    },
    indexEdit: null

}

const actions = {
    ADD({ todos }, [nameList]) {
        var idcomp = []
        for (var i of todos) {
            idcomp.push(i.id);

        }
        if (idcomp.length === 0) {
            idcomp.push(0)
        }
        var id = Math.max.apply(null, idcomp);
        id++
        if (nameList) {
            todos.push({ id, nameList, complete: false });
            storage.set(todos)
        }


    },
    CHECKBOX({ todos }, [index]) {
        const todo = todos[index]
        todo.complete = !todo.complete
        storage.set(todos)
    },
    toggleAll({ todos }, [checked]) {
        for (let todo of todos) {

            if (checked === true) {
                todo.complete = true

            }
            if (!checked === true) {
                todo.complete = false
            }
        }

        storage.set(todos)
    },
    destroy({ todos }, [index]) {

        todos.splice(index, 1);
        storage.set(todos)

    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearComplete(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)

    },
    Edit(state, [index]) {


        state.indexEdit = index

    },
    saveEdit(state, nameList) {
        if (state.indexEdit !== null) {
            if (index) {
                state.todos[state.indexEdit].nameList = nameList
                storage.set(state.todos)
            }
            else {
                this.destroy(state, state.indexEdit)
            }
            state.indexEdit = null

        }
    },
    cancelEdit(state) {
        state.indexEdit = null
    }
}

export function reducer(state = init, action, acum) {// nhận giông reduce bên core // gán mặc định cho state

    actions[action] && actions[action](state, acum)
    return state

} 