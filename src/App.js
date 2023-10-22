// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
  }

  onClickHandler = () => {
    this.setState({
      ...this.state,
      isClicked: !this.state.isClicked
    })
  }

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
  }

  addTodo = () => {
    const todos = this.state.todos.slice();
    todos.push(this.state.text)
    this.setState({
      ...this.state,
      todos,
      text: '',
    })
  }

  deleteTodo = (idx) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((_, i) => i !== idx)
    })
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.onClickHandler}>{this.state.isClicked ? 'Toggled True' : 'Toggled False'}</button> */}
        <form>
        <input onChange={this.onChangeHandler} type="text" value={this.state.text} />
        <button type='button' onClick={this.addTodo }>Add Todo</button>
        </form>
        
        <ul>
          {this.state.todos.map((todo, idx) => (
            <li key={idx}>
              {todo}{' '}
              <button onClick={() => this.deleteTodo(idx)} >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}



export default App;
