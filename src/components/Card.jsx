import stilo from './Card.module.css'
import { Link } from 'react-router-dom'
function Card(props) {
   // console.log(props); nsootros en el parametro que entra en la funcion
   //debemos pasarle el ID de los que nos entra en prps. y ademas la busca en detail.
   return (
      <div>
         <button className={stilo.buttonInicio} onClick={props.onClose} >X</button>
         <Link to={`/detail/${props.id}`}>
            <h2 className={stilo.tittleh2} >{props.name}</h2>
         </Link>
         <h2>{props.especies}</h2>
         <h2 className={stilo.tittleh3}>{props.gender}</h2>
         <img className={stilo.imagenh1} src={props.image} alt={props.name} />
      </div>
   );
}
export default Card;
