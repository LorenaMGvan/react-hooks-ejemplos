import { useCounter, useFetch } from "../hooks";
import { LoadingQuote , Quote } from '../03-examples';


export const Layout = () => {
    const { counter, incrementar } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v${counter}/quotes`);
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>Breaking bad Quotes..</h1>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote quote={quote} author={author} />
            }
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={() => incrementar(1)}>
                Siguiente Quote
            </button>

        </>
    )
}