import { useDispatch, useSelector } from "react-redux"
import { getQuoteAction } from "../store/quote_reducer"
import { useEffect } from "react"

const QuotePage = () => {

    const dispatch = useDispatch()
    const quote = useSelector(state => state.quote)
    const auth = useSelector(state => state.auth.authinticate)

    useEffect(() => {
        dispatch(getQuoteAction())
    }, [])
    if (!auth) {
        return (
            <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 flex items-center justify-center">
                <p className="text-orange-500 font-mono text-2xl">Please Login First</p>
            </section>
        )
    }

    if (quote.loading) {
        return (
            <p>Loading...</p>
        )
    }


    console.log(quote)
    return (

        <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 ">
            <ul className="mt-10 flex flex-col gap-5">

                {quote.error ? <p>{quote.error}</p> : <p>{quote.quote}</p>}


            </ul>
        </section>

    )
}

export default QuotePage