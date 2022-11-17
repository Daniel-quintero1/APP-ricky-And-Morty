import stilo from'./Card.module.css'
function Card(props) {
   console.log(props);
   return (
      <div>
         <button className={stilo.buttonInicio} onClick={props.onClose} >X</button>
         <h2 className={stilo.tittleTowlabel} >{props.name}</h2>
         <h2>{props.especies}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} />
      </div>
   );
}
export default Card;
