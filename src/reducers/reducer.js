

const initialState = {
  message: '',
  messages: []
}

const TYPED = "TYPED"
const COMPLETE = "COMPLETE"
const DELETE = "DELETE"

function reducer( state = initialState, action){
  switch(action.type) {
    case TYPED:
        let { text } = action
        return { ...state, message: action.payload}

    default: return state;}

}


export function isTyped(text) {
    return {
        type: TYPED,
        payload: text
    }
}

export function complete(a) {
    const todoItem = document.getElementById(a)
    const button = document.getElementById(a + 'complete')
    todoItem.className = "todo-completed"
    button.setAttribute('disabled', 'true')
    button.className='disabled' 
    return {
    type: "COMPLETE",
    payload: a
}
}

export function deleteThis(a) {
    const todoItem = document.getElementById(a).remove()
    return {
    type: "DELETE",
    payload: a
}
}

export default reducer;
