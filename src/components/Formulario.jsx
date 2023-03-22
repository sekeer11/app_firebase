import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import { collection, addDoc } from "firebase/firestore";




const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "usuarios"), {
            nombre: nombre,
            correo: correo
        })
        .then(() => {console.log('se agrego correctamente');})
        .catch((error) => {console.log('ocurrio un error', error);})
        setNombre('');
        setCorreo('');
    }
    return ( 
        <form action="" onSubmit={onSubmit}>
            <Input 
                type="text"
                name="nombre"
                value={nombre}
                onChange={ e => setNombre(e.target.value)}
            />
            <Input 
                type="email"
                name="correo"
                value={correo}
                onChange={ e => setCorreo(e.target.value)}
            />
            <Boton type='submit'> Agregar </Boton>
        </form>
     );
}
 
const Input = styled.input`
    padding: 10px;
    border: 2px solid rgba(0,0,0,.2);
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    transition: .2s ease all;
    outline: none;
    text-align: center;
    
    &:focus {
        border: 2px solid #3D76E9;
    }
`;
 
const Boton = styled.button`
    padding: 10px 30px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
export default Formulario;