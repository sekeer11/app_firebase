import React, { useState } from 'react';
import styled from 'styled-components';

const Contacto = ({id, nombre, correo}) => {
    const [editarTarea, cambiarEditarTarea] = useState(false);
    const [nombreEditado, editarNombre] = useState(nombre);
    const [correoEditado, editarCorreo] = useState(correo);

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
        <ContenedorContacto>
            { editarTarea ? 
                <form action='' onSubmit={onSubmit}>
                    <Input 
                        name="nombre"
                        value={nombreEditado}
                        onChange={() => editarNombre()}
                    />
                    <Input 
                        name="correo"
                        value={correoEditado}
                        onChange={() => editarCorreo()}
                    />
                    <Boton type="submit"> Actualizar </Boton>
                    <Boton onClick={() => cambiarEditarTarea(false)}> Cancelar </Boton>
                </form>
            :
            <>
                <Nombre> {nombre} </Nombre>
                <Correo> {correo} </Correo>
                <Boton onClick={() => cambiarEditarTarea(true)}> Actualizar </Boton>
                <Boton> Eliminar </Boton>
            </>
            }
        </ContenedorContacto>
     );
}
 
const ContenedorContacto = styled.div`
    padding: 10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
`;
 
const Nombre = styled.p`
    font-weight: bold;
`;
 
const Correo = styled.p`
    font-style: italic;
    color: #6B6B6B;
    margin: 5px 0;
`;
 
const Boton = styled.button`
    padding: 5px 20px;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    margin: 0px 2px;
    margin-bottom: 10px;
    transition: .3s ease all;
    outline: none;
    background: #C4C4C4;
    color: #fff;
    font-size: 12px;
 
    &:hover {
        background: #3D76E9;
    }
`;
 
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
export default Contacto;