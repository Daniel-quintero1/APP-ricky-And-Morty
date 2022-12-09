import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
export function Favorites({ myFavorites }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    };
    return (
        <div>
            <div>
                <select name="ordenes">
                    <option value="Ascendiente"></option>
                    <option value="Descendiente"></option>
                </select>
                <select name="filter">
                    <option value="Male"></option>
                    <option value="Famele"></option>
                    <option value="Genderless"></option>
                    <option value="unknown"></option>
                </select>
            </div>
            <button onClick={handleClick}>Go Home</button>
            <h1>Favorites</h1>
            {myFavorites.map((personaje) =>
                <div>
                    <h3>{personaje.name}</h3>
                    <img src={personaje.image} alt="" />
                </div>)}
        </div>
    )
}
function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites,

    }
}

export default connect(mapStateToProps, null)(Favorites)