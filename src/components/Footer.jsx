export default function Footer({
  activeCount,
  completedCount,
  filter,
  onFilter,
  onClearCompleted,
}) {
  const itemWord = activeCount === 1 ? 'item' : 'items'

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> {itemWord} left
      </span>
      <ul className="filters">
        <li>
          <a
            className={filter === 'all' ? 'selected' : ''}
            onClick={() => onFilter('all')}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filter === 'active' ? 'selected' : ''}
            onClick={() => onFilter('active')}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filter === 'completed' ? 'selected' : ''}
            onClick={() => onFilter('completed')}
          >
            Completed
          </a>
        </li>
      </ul>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </footer>
  )
}
