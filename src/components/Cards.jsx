import Card from "./Card";
import stilo from './Card.module.css'

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={stilo.container}>
         {
         characters.map((p) =><Card
         key={p.id}
         id={p.id}
         name={p.name}
         species={p.species}
         gender={p.gender}
         image={p.image}
         onClose = { () => {onClose(p.id)}}
         />
         )}
      </div> 

)};
