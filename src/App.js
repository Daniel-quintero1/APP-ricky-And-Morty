import { useState } from 'react'
import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'


function App () {
  // const example ={
  //   name: 'Morty Smith',
  //   species: 'Human',
  //   gender: 'Male',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  // };
  const [characters, setCharacters] = useState([]);
  function onSearch(character) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
           .then((response) => response.json())
           .then((data) => {
              if (data.name) {
                 setCharacters((oldChars) => [...oldChars, data]);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           });
     };

     const onClose =(character) => {
      setCharacters(characters.filter((char) => char.character !== character))
     }
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
        {/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> */}
      </div>
      <hr />
      <div>
      </div>
      <hr />
      <div>
        {/* <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        /> */}
      </div>
    </div>
  )
}

export default App
