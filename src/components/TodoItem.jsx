import { useState, useRef, useEffect } from 'react'

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [editing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(todo.text)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editing) {
      setEditValue(todo.text)
      if (inputRef.current) {
        inputRef.current.focus()
        inputRef.current.select()
      }
    }
  }, [editing, todo.text])

  const handleDoubleClick = () => setEditing(true)

  const handleSubmit = () => {
    onEdit(todo.id, editValue)
    setEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
    if (e.key === 'Escape') {
      setEditValue(todo.text)
      setEditing(false)
    }
  }

  return (
    <li className={[todo.completed && 'completed', editing && 'editing'].filter(Boolean).join(' ')}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete"
        />
      </div>
      <input
        ref={inputRef}
        className="edit"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}
