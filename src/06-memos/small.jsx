import React from 'react';
// import {memo} from 'react';

// memo recibe como parametrosd un componen te
export const Small = React.memo(( {xValor} ) => {
    console.log('Me volvi a dibujar');
    return (
        <small>{ xValor }</small>
    )
})