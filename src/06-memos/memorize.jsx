import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./small";


export const Memorize = () => {
    const { counter, incrementar } = useCounter(10);

    const[show, setShow] = useState(true);

    return (
        <>
        <h1>Counter <Small xValor={ counter }/></h1>
        <hr />
        <button 
            onClick={ () => incrementar() }
            className="btn btn-primary">+1</button>
        <button 
            onClick={() => setShow( !show ) }
            className="btn btn-primary">Show / Hide  { JSON.stringify(show) }</button>
        </>
    )
}