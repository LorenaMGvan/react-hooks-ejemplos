import { useState } from "react"

export const ShowIncrement = ({ incrementar }) => {

    console.log('me volvi a generar');
    
    return (
        <button className="btn"
            onClick={() => {
                incrementar();
            }}>
            Incrementar
        </button>
    )
}