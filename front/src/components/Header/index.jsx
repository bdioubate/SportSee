const Header = ({ prenom }) => {
    return (
        <div id="hello">
            <h1>Bonjour <span>{prenom}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

export default Header