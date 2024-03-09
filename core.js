export default function html([first, ...string], ...values) {// lấy tất cả string  và tất cả biến nội suy
    return values.reduce( // reduce values 
        (acc, cur) => acc.concat(cur, string.shift()),// (acc, cur) là biến tích trữ , acc nối currentvalue với string mà string sẽ lấy phần tử đầu tiên rồi xoá luôn
        [first]// chưa hiểu 
    )
        .filter(x => x && x !== true || x === 0).join('');//lọc các biến kiểu boolean rồi nối nó bằng join()


}
export function createStore(reducer) { // tạo store
    var state = reducer();// call back lại reduce
    const roots = new Map();// gán = map

    function render() {
        for (const [root, component] of roots) {// lặp bằng for of qua map()
            const output = component();// gán output bằng component function
            root.innerHTML = output; // innerHTML ra autput
        }
    }
    return {


        attach(component, root) {// chứa component và root
            roots.set(root, component); //set roots vào
            render();// gọi render
        },
        // conect là thằng kết nối store với view v
        connect(selector = state => state) { // selector bằng state và sẽ return state
            // component sẽ khai báo props và tất cả acument rồi trả về component chứa mộtObject.assign chứa một Object rỗng, propes ,selector(state) và tất cả aument 
            return component => (props, ...acum) => component(Object.assign({}, props, selector(state), ...acum))
        },
        // thực hiện hành dộng ở view
        dispatch(action, ...acum) { // dispatch phải nhận một action
            //reduce nhận action và acum
            state = reducer(state, action, acum)// reduce cần phải nhận lại giá trị mà nó return trứơc đó rồi return lại lần nữa 
            render()// gọi render

        }
    }
}