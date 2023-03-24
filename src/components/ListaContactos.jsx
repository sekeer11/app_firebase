import React, { useState } from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Contacto from './Contacto';

const ListaContactos = () => {
    const[contactos, cambiarContactos] = useState([]);

    const obtenerTodosUsuarios = async () => {
        try {
           const query = await getDocs(collection(db, "usuarios"))
           const allUsers = [];
           query.forEach( doc => {
            allUsers.push({id: doc.id, nombre: doc.data().nombre, correo: doc.data().correo})
           })
           cambiarContactos(allUsers);
        } catch (error) {
            console.error('Ocurrio un error', error)
        }
    }
    
    obtenerTodosUsuarios();

    return (
        contactos.length > 0 &&
        <ContenedorContactos>
            { contactos.map( contacto => (
                <Contacto 
                    key={contacto.id}
                    id={contacto.id}
                    nombre={contacto.nombre}
                    correo={contacto.correo}
                />
            )) }
        </ContenedorContactos>
     );
}
 
const ContenedorContactos = styled.div`
    margin-top: 40px;
`;
 

export default ListaContactos;