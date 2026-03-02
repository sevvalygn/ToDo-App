import { useState } from 'react'

export default function Header({ onAdd }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAdd(value)
    setValue('')
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </header>
  )
}
