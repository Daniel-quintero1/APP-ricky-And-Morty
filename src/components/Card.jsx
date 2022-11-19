import stilo from'./Card.module.css'
function Card(props) {
   console.log(props);
   return (
      <div>
         <button className={stilo.buttonInicio} onClick={props.onClose} >X</button>
         <h2 className={stilo.tittleh2} >{props.name}</h2>
         <h2>{props.especies}</h2>
         <h2 className={stilo.tittleh3}>{props.gender}</h2>
         <img  className={stilo.imagenh1} src={props.image} alt={props.name} />
      </div>
   );
}
export default Card;
