import React, { createContext, useEffect, useReducer } from 'react'
import { todoReducer } from './TodoReducer';

export const Todos = createContext();

const TodoContext = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  useEffect(() => {
    if (todos.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => dispatch({ type: "FETCH_TODO", payload: data.slice(0, 10) }))
    }
  })

  return (
    <Todos.Provider value={{ todos, dispatch }}>
      {children}
    </Todos.Provider>
  )
}

export default TodoContext