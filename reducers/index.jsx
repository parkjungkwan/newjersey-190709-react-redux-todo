import { combineReducers } from 'redux'
import todoReducer from './todoReducer.jsx'
import setVisible from './visibleReducer.jsx'

const todoApp = combineReducers(
    {
        todoReducer:todoReducer, 
        visible:setVisible 
    }
)

export default todoApp;

