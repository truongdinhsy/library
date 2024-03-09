export default function logger(reducer) {

    return (state, action, acum) => {
        console.group(action)
        console.log('State :', state)
        console.log('argument:', acum)
        const viewlogger = reducer(state, action, acum);
        console.log('viewlogger:', viewlogger)

        console.groupEnd()
        return viewlogger

    }


}