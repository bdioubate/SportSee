import { Link } from 'react-router-dom'

const Accueil = () => {
  return (
    <div>
        <Link to={`/user/${12}`}><p>User 12</p></Link>
        <Link to={`/user/${18}`}><p>User 18</p></Link>
    </div>
  )
}

export default Accueil