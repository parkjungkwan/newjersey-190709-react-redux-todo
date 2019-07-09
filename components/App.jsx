import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer.jsx'
import TodoInput from '../containers/TodoInput.jsx'
import TodoList from '../containers/TodoList.jsx'
import ControllerButton from '../components/ControllerButton.jsx'
import VisibleTodoList from '../containers/VisibleTodoList.jsx'


const App=()=> (
    <div className="App">
      <TodoInput/>
      <TodoList/>
      <VisibleTodoList></VisibleTodoList>
      <ControllerButton></ControllerButton>
      <Footer/>
    </div>
  );

export default App;
