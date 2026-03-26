import React, { useEffect, useState } from 'react'

const Todo = () => {
  const [task, setTask] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const showMessage = (text) => {
    setMessage(text)
    setTimeout(() => {
      setMessage('')
    }, 2000)
  }

  const displayinfo = () => {
    const trimmedTask = task.trim()


    if (trimmedTask === '' && date === '') {
      showMessage('!!!  Please Enter a task to save and its deadline  !!!')
      return
    }

    if (trimmedTask === '') {
      showMessage('!!!  Please Enter a Task to save  !!!')
      return
    }

    if (date === '') {
      showMessage('!!!  Please Enter a deadline  !!!')
      return
    }

    const newTodo = {
      id: Date.now(),
      text: trimmedTask,
      date,
      time,
      completed: false,
      
    }

    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTask('')
    setDate('')
    setTime('')
    showMessage('Task added successfully!')
  }

  const checkbox = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteinfo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  const handleinfo = (event) => {
    if (event.key === 'Enter') {
      displayinfo()
    }
  }

  return (
    <div className="todo stored in local storage and fetched on page load">
      <h1>My Todo-List</h1>
      <h3>Welcome to this todo-list</h3>
      <div className="input">
        <div className="box" onKeyDown={handleinfo}>
          <input
            type="text"
            id="todoinput"
            placeholder="Enter a task and click add or press enter to save."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button id="add-btn" onClick={displayinfo}>
            Add
          </button>
        </div>
        <ul id="display">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkbox(todo.id)}
              />
              <span className={todo.completed ? 'complete' : ''}>
                {todo.text} -----Deadline Date: {todo.date}
                {todo.time ? ` ---Time: ${todo.time}` : ''}
              </span>
              <button id="delete-btn" onClick={() => deleteinfo(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <p id="valid">{message}</p>
    </div>
  )
}

export default Todo
