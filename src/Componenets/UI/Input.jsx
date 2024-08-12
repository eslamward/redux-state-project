import { useRef } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { todosAction } from "../../store/todo_reducer"

const Input = () => {

    const inputRef = useRef()
    const dispatch = useDispatch()
    function handelAdd() {
        const title = inputRef.current
        if (title.value !== "") {
            dispatch(
                todosAction.addTodo({
                    id: Math.random(),
                    title: title.value,
                    complete: false,
                    archive: false,
                    date: Date.now(),


                })
            )
        }

        title.value = ""

    }

    return (
        <div className="flex flex-col p-2">
            <label htmlFor="todo" className="font-mono">Todo</label>
            <div className="flex justify-between gap-4">
                <input ref={inputRef} id="todo" name="todo" className="
            flex-1 p-2 font-mono text-slate-500
             rounded-md border-[1px] border-slate-400 
             focus:outline-none focus:border-slate-500"></input>
                <Button onClick={handelAdd} color="bg-orange-500" hoverColor="bg-orange-600">
                    Add</Button>
            </div>
        </div>
    )
}


export default Input