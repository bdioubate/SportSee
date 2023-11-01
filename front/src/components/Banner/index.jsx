import logo from '../../assets/logo.png'
const Banner = () => {
    return (
        <div id="banner">
            <img src={logo} alt="Logo du site"/>
            <h3>Accueil</h3>
            <h3>Profil</h3>
            <h3>Réglage</h3>
            <h3>Communauté</h3>
        </div>
    )
}

export default Banner