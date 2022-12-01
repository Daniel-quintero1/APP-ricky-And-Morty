import React from "react";
import { validation } from "./Validation";

export default function Form() {
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    });
    const handleInputChange = (e) => {
        setUserData({ 
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(
            validation({
                ...userData,
                [e.target.name]: e.target.value,
            })
        )
    }
    const [errors, setErrors] = React.useState({
        username: '',
        password: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length) alert('Debe llenar todos los campos');//la propiedad me permite convertir un objeto  en arreglo con propiedad
        else{
          alert('Datos completos')
          setUserData({
            username: '',
            password: '',
          })
          setErrors({
            username: '',
            password: '',
          })
        }
      }
    return (
        
        <form onSubmit={handleSubmit}>
            
                <label htmlFor="username">Username:</label>
                <input
                    // id='username'
                    name="username"
                    value={userData.username}
                    placeholder="Ingrese el usuario..."
                    onChange={handleInputChange} />
                    <p>{errors.username}</p>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    // id='password1'
                    value={userData.password}
                    name="password"
                    placeholder="Ingrese el Password..."
                    onChange={handleInputChange}/>
                    <p>{errors.password}</p>
                <button type="submit">Enviar</button>
            
        </form>
    
    )
}