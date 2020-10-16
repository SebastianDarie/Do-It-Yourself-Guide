import React, { Component } from 'react'
import Overview from './components/Overview'

import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      task: '',
      tasks: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  onSubmit = (e) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: this.state.task, id: this.state.tasks.length + 1 },
      ],
      task: '',
    })

    e.preventDefault()
  }

  handleDelete = (e) => {
    const id = parseInt(e.target.parentNode.childNodes[0].textContent)

    this.setState({
      tasks: [...this.state.tasks.filter((task) => task.id !== id)],
    })

    e.preventDefault()
  }

  render() {
    const { task, tasks } = this.state

    return (
      <div className='col-6 mx-auto mt-5'>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label htmlFor='taskInput'>Enter task</label>
            <input
              onChange={this.handleChange}
              value={task}
              type='text'
              id='taskInput'
              className='form-control'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Add Task
            </button>
          </div>
        </form>

        <Overview tasks={tasks} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

export default App
