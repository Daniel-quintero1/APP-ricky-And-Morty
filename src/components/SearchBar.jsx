import { useState } from "react"

export default function SearchBar(props) {
   // const { onSearch } = props
   const [characters, setCharacters] = useState("");
   const handleChange = (e) => {
   const {value} = e.target;
   setCharacters(value)
   }
   return (

      <div>
         <input type='search' name='search' id="" handleChange={handleChange} />
         <button onClick={() => props.onSearch(characters)}>Agregar</button>
      </div>
   );
}
