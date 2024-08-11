import TodoItem from "./TodoItem"
import Input from "./UI/Input"

const Todos = () => {
    return (
        <section className="bg-wight border-[1px] text-slate-500 rounded-lg w-2/3 min-h-[100px] m-auto my-10 ">
            <Input />
            <ul className="mt-10 flex flex-col gap-5">
                <TodoItem />

            </ul>
        </section>

    )
}

export default Todos