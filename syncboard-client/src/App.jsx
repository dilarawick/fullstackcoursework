import { BrowserRouter } from 'react-router-dom'
import { FilterProvider } from './context/FilterContext'
import { TaskProvider } from './context/TaskContext'
import AppRoutes from './routes/AppRoutes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <FilterProvider>
          <AppRoutes />
        </FilterProvider>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
