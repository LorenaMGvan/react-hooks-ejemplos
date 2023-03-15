import { useState, useEffect } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y:0});



    useEffect(()=> {
        const onMouseMove = ({ x, y }) => {
            setCoords( x, y);
        }
        window.addEventListener('mousemove', onMouseMove);

        //console.log('Message mounted');

        return() =>{
            window.removeEventListener('mousemove', onMouseMove);
            //console.log('Mensaje despontado');
        }
    }, []);


    return(
        <>
        <h1>EL usuario ya existe</h1>
        </>
    )
}