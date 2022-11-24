import Card from "./Card";
export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   characters.map((p) =><Card 
   key={p.name}
   name={p.name}
   species={p.species}
   gender={p.gender}
   image={p.image}
   onClose = { () => {onClose(p.id)}}
   />
)
)};
