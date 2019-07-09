import React, {Component} from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo.jsx'
import {toggleTodo} from '../actions'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.props = props
        console.log('@@@@ '+this.props)
    }
    checkTodo =(index)=>{
        console.log("TodoList......INDEX: " + index)
        this.props.dispatch(toggleTodo(index))
    }
    render(){
        console.log("this.props ??? : " + this.props)
        const todoTag = this.props.map(
            (todo, index) =><Todo key={index}{...todo} 
            onClick={
                ()=> this.checkTodo(index)
            } />
        )
        return (
            <ul>
                {todoTag}
            </ul>
        )
    }
    
    
    
}
const mapStateToProps = (state)=>{
    return state.todo
}
export default connect(mapStateToProps)(TodoList)