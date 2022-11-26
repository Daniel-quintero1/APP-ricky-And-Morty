import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
// import Card from './components/Card.jsx'
import Cards from './components/Cards'
import Nav from './components/Nav'
import About from './components/About'
import Detail from  './components/Detail'
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

     const onClose =(id) => {
      setCharacters(characters.filter((char) => char.id !== id))
     }
  return (

    <div className='App' style={{ padding: '25px' }}>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        <Nav onSearch={onSearch}/>
      </div>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:detailId' element={<Detail/>}/>
        </Routes> 
        {/* recuerda que los : son para recibir el id */}
    </div>
  )
}

export default App
