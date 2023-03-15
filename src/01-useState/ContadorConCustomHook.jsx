import { useCounter } from "../hooks/UseCounter";

export const ContadorConCustomHook = () => {
    const { counter, incrementar, reset, decrementar } = useCounter();
    return(
        <>
            <h1>Contador con Hook { counter }</h1>
            <hr />
            {/* solo si lleva parametros le coloco la funcion flecha, 
            sino va  */}
            {/* <button onClick={ incrementar(2)}>+1</button> */}
            <button onClick={ () => incrementar(2)}>+1</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ () => decrementar(2) }>-1</button>
        </>
    )
}