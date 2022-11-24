import { useState } from "react"

export default function SearchBar(props) {
   // const { onSearch } = props
   const [characters, setCharacters] = useState("");
   const handleChange = (e) => {
   setCharacters(e.target.value)
   }
   return (

      <div>
         <input type='search' value={characters} onChange={handleChange} />
         <button onClick={() => props.onSearch(characters)}>Agregar</button>
      </div>
   );
}
