import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Banner = () => {
    return (
        <div id="banner">
            <img src={logo} alt="Logo du site"/>
            <NavLink className="links-banner" to="/">
                <h3>Accueil</h3>
            </NavLink>
            <NavLink className="links-banner" to="/404">
                <h3>Profil</h3>
            </NavLink>
            <NavLink className="links-banner" to="/404">
                <h3>Réglage</h3>
            </NavLink>
            <NavLink className="links-banner" to="/404">
                <h3>Communauté</h3>
            </NavLink>
        </div>
    )
}

export default Banner