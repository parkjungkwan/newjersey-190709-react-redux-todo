import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


class AddTodo extends Component{
    constructor(){
        super()
        this.state = {input:''}
        this.createTodo = this.createTodo.
        this.inputNode = this.inputNode.bind(this)
    }

    render(){
        return (
            <div>
              <form onSubmit={this.createTodo}>
                <input ref={this.inputNode} />
                <button type="submit">
                  Add Todo
                </button>
              </form>
            </div>
          )
    }
    createTodo(e){
        e.preventDefault()
        if (!this.state.input.value.trim()) {
            return
        }
        dispatch(addTodo(this.state.input.value))
        this.state.input.value = ''
    }
    inputNode(node){
        this.state.input = node
    }

}

AddTodo = connect()(AddTodo)

export default AddTodo