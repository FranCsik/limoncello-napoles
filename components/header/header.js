import React, {useEffect, useState} from 'react';
import './header.css'

const Header = (props) => {
    useEffect( () => {
        console.log('Se cargó el componente')
    }, [])

    return(
        <div>
            Hola
        </div>
    )
}

export default Header