import { Route, Routes } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout/AppLayout'
import BoardPage from '../pages/BoardPage/BoardPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import TaskDetailPage from '../pages/TaskDetailPage/TaskDetailPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<BoardPage />} />
        <Route path="tasks/:id" element={<TaskDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
