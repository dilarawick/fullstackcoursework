import { useState } from 'react'
import { useTasks } from '../../../context/TaskContext'
import Button from '../../ui/Button/Button'

const initialForm = { title: '', assignee: '', dueDate: '' }

function AddTaskForm() {
  const { addTask } = useTasks()
  const [form, setForm] = useState(initialForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.title.trim() || !form.assignee.trim() || !form.dueDate) {
      return
    }

    addTask({
      id: crypto.randomUUID(),
      title: form.title.trim(),
      assignee: form.assignee.trim(),
      status: 'To Do',
      dueDate: form.dueDate,
    })

    setForm(initialForm)
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <h2 className="add-task-form__title">Add Task</h2>
      <label className="add-task-form__field">
        Title
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>
      <label className="add-task-form__field">
        Assignee
        <input
          type="text"
          name="assignee"
          value={form.assignee}
          onChange={handleChange}
          required
        />
      </label>
      <label className="add-task-form__field">
        Due date
        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
        />
      </label>
      <Button type="submit">Add to To Do</Button>
    </form>
  )
}

export default AddTaskForm
