import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import Input from "./UI/Input"

const Todos = () => {

    const todos = useSelector(state => state.todo.todos)
    const unArchivedTodos = todos.filter(todo => !todo.archive)
    const auth = useSelector(state => state.auth.authinticate)

    if (!auth) {
        return (
            <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 flex items-center justify-center">
                <p className="text-orange-500 font-mono text-2xl">Please Login First</p>
            </section>
        )
    }
    return (
        <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 ">
            <Input />
            <ul className="mt-10 flex flex-col gap-5">

                {
                    unArchivedTodos.map(todo => {
                        return (
                            <TodoItem key={todo.id} todo={todo} />
                        )
                    })
                }


            </ul>
        </section>

    )
}

export default Todos