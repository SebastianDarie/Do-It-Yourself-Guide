import React from 'react'
import uniqid from 'uniqid'

const Overview = ({ tasks, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={uniqid()}>
            {task.id}. {task.title}{' '}
            <button
              onClick={handleDelete}
              type='button'
              className='btn btn-danger mb-2'
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Overview
