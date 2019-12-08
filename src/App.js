import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      currentText: ''
    }
  }

  updateCurrentTask = (e) => {
    this.setState({
      currentText: e.target.value
    })
  }

  // TODO 1 - Write the logic for adding the item to the list
  AddTodoList = () => {
    
  }

  render() {
    return (
      <div className="App" data-test="app">
        <div className="Card">
          <h3>Shopping list for Today</h3>
          <div className="TextFieldWrapper">
            <input onChange={this.updateCurrentTask} className="TextField" type="text" placeholder="enter the task here.." 
              value={this.state.currentText ? this.state.currentText : ''} data-test="text-box"/>
            <input type="button" value="Add" className="AddButton" data-test="add-button" />
          </div>
          <div className="TodoList">
            <ul>
              {
                this.state.list.map((item, index) => {
                  return <li data-test="todo-item" key={index} data-index={index}>{item}</li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
