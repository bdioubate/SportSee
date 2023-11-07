const NutritionReport = ({icon, count, name }) => {
    return (
        <div className="nutritionReport">
            <div className="nutritionReport__img">
                <img src={icon} alt="Logo du site"/>
            </div>
            
            <div className="nutritionReport__text">
                {
                    name === "calorieCount" ?
                        <p>{count}kCal</p>
                    :
                        <p>{count}g</p>
                }
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default NutritionReport