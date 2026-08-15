import { useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button/Button'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <h2>404 — Page not found</h2>
      <p>The page you requested does not exist.</p>
      <Button onClick={() => navigate('/')}>Go to board</Button>
    </section>
  )
}

export default NotFoundPage
