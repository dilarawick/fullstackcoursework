import { FILTER_ALL } from '../../../constants/columns'
import { useFilter } from '../../../context/FilterContext'
import { useTasks } from '../../../context/TaskContext'

function BoardCounter() {
  const { tasks } = useTasks()
  const { statusFilter } = useFilter()

  const visibleTasks =
    statusFilter === FILTER_ALL
      ? tasks
      : tasks.filter((task) => task.status === statusFilter)

  const doneCount = visibleTasks.filter((task) => task.status === 'Done').length
  const totalCount = visibleTasks.length

  return (
    <p className="board-counter">
      {doneCount} of {totalCount} done
    </p>
  )
}

export default BoardCounter
