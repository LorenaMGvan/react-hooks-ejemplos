import React from 'react';
import { useState } from 'react';
import { useLayoutEffect, useRef } from "react";


export const Quote = ({ quote ,author }) => { 
    
    const parrafoRef = useRef();
    const [boxSize, setboxSize] = useState({ width: 0, height: 0 }); 

    useLayoutEffect(()=> {
        // obtenemos el tamaño de la caja de los comentarios
    const { width, height } =  parrafoRef.current.getBoundingClientRect();
    setboxSize({ width, height });
    },[quote]);
    
    
    return(
        <>
        <blockquote 
            style={{ display: 'flex' }}
            className="blockquote text-right">
                            <p className="mb-1"
                                ref={ parrafoRef }
                                >{quote}</p>
                            <footer className="bloquote-foote">{author}</footer>
        </blockquote>
        <code>
            { JSON.stringify(boxSize) }
        </code>
        </>
    );
}