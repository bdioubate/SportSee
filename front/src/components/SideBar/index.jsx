import meditation from '../../assets/icons/meditation.png'
import swimming from '../../assets/icons/swimming.png'
import cycling from '../../assets/icons/cycling.png'
import bodybuilding from '../../assets/icons/bodybuilding.png'
const Sidebar = () => {
    return (
        <div id="sidebar">
            <div id="sidebar__button">
                <button className="btnSidebar">
                    <img src={meditation} alt="bouton de la barre latérale" />
                </button>
                <button className="btnSidebar">
                    <img src={swimming} alt="bouton de la barre latérale" />
                </button>
                <button className="btnSidebar">
                    <img src={cycling} alt="bouton de la barre latérale" />
                </button>
                <button className="btnSidebar">
                    <img src={bodybuilding} alt="bouton de la barre latérale" />
                </button>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidebar