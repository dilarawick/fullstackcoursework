import { Link, useNavigate, useParams } from 'react-router-dom'
import { COLUMNS } from '../../constants/columns'
import { useTasks } from '../../context/TaskContext'
import Button from '../../components/ui/Button/Button'

function TaskDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { tasks, deleteTask, moveTask } = useTasks()

  const task = tasks.find((item) => item.id === id)

  if (!task) {
    return (
      <section className="task-detail task-detail--missing">
        <h2>Task not found</h2>
        <p>No task exists with id &quot;{id}&quot;.</p>
        <Button onClick={() => navigate('/')}>Back to board</Button>
      </section>
    )
  }

  const columnIndex = COLUMNS.indexOf(task.status)
  const canMoveLeft = columnIndex > 0
  const canMoveRight = columnIndex < COLUMNS.length - 1

  function handleDelete() {
    deleteTask(task.id)
    navigate('/')
  }

  return (
    <section className="task-detail">
      <p className="task-detail__breadcrumb">
        <Link to="/">Board</Link> / {task.title}
      </p>
      <h2>{task.title}</h2>
      <dl className="task-detail__meta">
        <div>
          <dt>Assignee</dt>
          <dd>{task.assignee}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{task.status}</dd>
        </div>
        <div>
          <dt>Due date</dt>
          <dd>{task.dueDate}</dd>
        </div>
        <div>
          <dt>Task ID</dt>
          <dd>{task.id}</dd>
        </div>
      </dl>
      <div className="task-detail__actions">
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
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
        <Button variant="secondary" onClick={() => navigate('/')}>
          Back to board
        </Button>
      </div>
    </section>
  )
}

export default TaskDetailPage
