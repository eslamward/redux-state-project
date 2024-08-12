import { useSelector } from "react-redux"
import TodoItem from "../Componenets/TodoItem"
import { useLoaderData, useParams } from "react-router"

const DetailsPage = () => {

    const quote = useLoaderData()

    const { id } = useParams()
    const todos = useSelector(state => state.todo.todos)
    const todo = todos.find(todo => todo.id == id)
    const auth = useSelector(state => state.auth.authinticate)
    console.log(id)
    console.log(todo)

    if (!auth) {
        return (
            <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 flex items-center justify-center">
                <p className="text-orange-500 font-mono text-2xl">Please Login First</p>
            </section>
        )
    }
    return (
        <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 ">
            <div className="mt-10 flex flex-col gap-5">

                <p>Title - {todo.title}</p>
                <p>Status - {todo.complete ? "complete" : todo.archive ? "archive" : "Pending"}</p>
                <p>----------------</p>
                <p>{quote.content}</p>

            </div>
        </section>

    )
}

export default DetailsPage

export const loader = async () => {

    const res = await fetch("https://api.quotable.io/random")

    if (!res.ok) {
        throw new Error(res.Error());

    }

    const data = await res.json()
    console.log(data)
    return data
}