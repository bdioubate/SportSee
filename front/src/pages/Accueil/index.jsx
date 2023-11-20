import { Link } from 'react-router-dom'

const Accueil = () => {
  return (
    <div id='linksUser'>
        <Link to={`/user/${12}`}><button className="buttonLinkUser">User <span>12</span></button></Link>
        <Link to={`/user/${18}`}><button className="buttonLinkUser">User <span>18</span></button></Link>
    </div>
  )
}

export default Accueil 