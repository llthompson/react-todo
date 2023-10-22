// import logo from './logo.svg';
import './App.css';
import { Component, createRef } from 'react';

class App extends Component {
  inputRef = createRef();
  constructor() {
    super();
    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    };
    this.inputRef = createRef();
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
    });
    this.inputRef.current.focus();
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
        <form>
          <input ref={this.inputRef} onChange={this.onChangeHandler} type="text" value={this.state.text} />
          <button onClick={() => { this.onClickHandler(); this.addTodo(); }} type='button'>Add Todo</button>
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
