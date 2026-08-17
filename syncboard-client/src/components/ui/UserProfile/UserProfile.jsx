import { useUser } from '../../../context/UserContext'
import './UserProfile.css'

function UserProfile() {
  const { user } = useUser()

  if (!user) return null

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="user-profile">
      <div className="user-profile__avatar">{initials}</div>
      <div className="user-profile__info">
        <p className="user-profile__name">{user.name}</p>
        <p className="user-profile__email">{user.email}</p>
      </div>
    </div>
  )
}

export default UserProfile
