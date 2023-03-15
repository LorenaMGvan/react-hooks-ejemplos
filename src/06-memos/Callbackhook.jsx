import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementarFather = useCallback(
        () => {
            setCounter( (value) => value + 1);
        },
        [],
    )
    // const incrementarFather = () => {
    //     setCounter( counter +1);
    // }

    return (
        <>
        <h1> useCallbak counter: { counter } </h1>
        <hr />
        <ShowIncrement incrementar={ incrementarFather }/>
        </>
    )
}