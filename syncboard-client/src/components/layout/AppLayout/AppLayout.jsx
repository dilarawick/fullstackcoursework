import { Link, Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          <Link to="/">SyncBoard</Link>
        </h1>
        <nav className="app-nav">
          <Link to="/">Board</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default AppLayout
