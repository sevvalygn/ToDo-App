import { useState, useCallback } from 'react'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

const initialTodos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Learn React', completed: true },
  { id: 3, text: 'Have a life!', completed: false },
]

function App() {
  const [todos, setTodos] = useState(initialTodos)
  const [filter, setFilter] = useState('all')

  const addTodo = useCallback((text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ])
  }, [])

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const toggleAll = useCallback(() => {
    const allCompleted = todos.every((t) => t.completed)
    setTodos((prev) =>
      prev.map((t) => ({ ...t, completed: !allCompleted }))
    )
  }, [todos])

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const editTodo = useCallback((id, newText) => {
    const trimmed = newText.trim()
    if (!trimmed) {
      setTodos((prev) => prev.filter((t) => t.id !== id))
      return
    }
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: trimmed } : t))
    )
  }, [])

  const clearCompleted = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.completed))
  }, [])

  const filteredTodos =
    filter === 'active'
      ? todos.filter((t) => !t.completed)
      : filter === 'completed'
        ? todos.filter((t) => t.completed)
        : todos

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <section className="todoapp">
      <Header onAdd={addTodo} />
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={activeCount === 0 && todos.length > 0}
          onChange={toggleAll}
          aria-label="Mark all as complete"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </section>
      {todos.length > 0 && (
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          filter={filter}
          onFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      )}
      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/tastejs">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </section>
  )
}

export default App
