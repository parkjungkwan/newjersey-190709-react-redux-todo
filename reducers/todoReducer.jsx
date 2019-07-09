const todos = (state = {list:[]} , action ) => {

    console.log('todoReducer >> '+action)

    //if action의 타입이 xxx라면.. 
        switch(action.type){
    
            case 'ADD_TODO':
    
                const newList = [...state.list, {text: action.text, completed: false}]
    
                state = Object.assign({}, state, {list: newList})
                console.log('ADD_TODO >> '+action)
                break
            case 'TOGGLE_TODO':
            
                const toggleList = 
                    state.list.map((todo, index) => 
                        index === action.index ? {...todo, completed: !todo.completed}: todo )
    
                state = Object.assign({}, state, {list: toggleList})

                console.log('TOGGLE_TODO >> '+action)
    
                break;
    
            default:
                console.log('DEFAULT >> '+action)
                return state
    
        }
        //잘못되어도 기존 상태 유지 
        return state
    }
    
    export default todos