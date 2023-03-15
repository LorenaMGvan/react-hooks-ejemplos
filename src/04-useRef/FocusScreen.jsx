import { useRef } from "react";

export const FocusScreen = () => {


    const myInputRef = useRef();

    console.log(myInputRef);

    const onClick = () => {
        // document.querySelector('input').select();
        console.log( myInputRef.current.select() );
    }   

    return(
        <>
            <h1>Focus Screen!!</h1>

            <input 
                ref={ myInputRef }
                type="text"  
                placeholder="Nombre"
                className="form-control" />

            
            <button type="submit" onClick={ onClick }>
                Set Focus!1
            </button>
        </>
    )
}