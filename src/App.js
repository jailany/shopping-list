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

  addTodoList = () => {
    
  }

  render() {
    return (
      <div className="App" data-test="app">
        <div className="Card">
          <h3>Shopping list for Today</h3>
          <div className="TextFieldWrapper">
            <input onChange={this.updateCurrentTask} className="TextField" type="text" placeholder="enter the item here.." 
              value={this.state.currentText ? this.state.currentText : ''} data-test="text-box"/>
            <input onClick={this.addTodoList} type="button" value="Add" className="AddButton" data-test="add-button" />
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
