import { connect } from "react-redux"
import { useNavigate } from "react-router-dom";
export function Favorites({ myFavorites }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    };
    return (
        <div>
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