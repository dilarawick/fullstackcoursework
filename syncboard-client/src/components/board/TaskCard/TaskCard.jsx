import { Link } from 'react-router-dom'
import { COLUMNS } from '../../../constants/columns'
import { useTasks } from '../../../context/TaskContext'
import Button from '../../ui/Button/Button'

function TaskCard({ task }) {
  const { deleteTask, moveTask } = useTasks()

  const columnIndex = COLUMNS.indexOf(task.status)
  const canMoveLeft = columnIndex > 0
  const canMoveRight = columnIndex < COLUMNS.length - 1

  return (
    <article className="task-card">
      <h3 className="task-card__title">
        <Link to={`/tasks/${task.id}`}>{task.title}</Link>
      </h3>
      <p className="task-card__assignee">Assignee: {task.assignee}</p>
      <p className="task-card__due">Due: {task.dueDate}</p>
      <div className="task-card__actions">
        <Button
          variant="secondary"
          onClick={() => moveTask(task.id, -1)}
          disabled={!canMoveLeft}
        >
          Move left
        </Button>
        <Button
          variant="secondary"
          onClick={() => moveTask(task.id, 1)}
          disabled={!canMoveRight}
        >
          Move right
        </Button>
        <Button variant="danger" onClick={() => deleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </article>
  )
}

export default TaskCard
