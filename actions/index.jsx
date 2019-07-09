
export const addTodo = (text) =>({
    type: 'ADD_TODO',
    id: text
})

export const toggleTodo = (index) =>{
    return {
        type: 'TOGGLE_TODO',
        index: index
    }
}
   