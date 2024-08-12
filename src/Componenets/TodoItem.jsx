import { useDispatch } from "react-redux"
import Button from "./UI/Button"
import { todosAction } from "../store/todo_reducer"
import { NavLink } from "react-router-dom"



const TodoItem = ({ todo }) => {


    const dispatch = useDispatch()

    function handelRemove(id) {
        dispatch(
            todosAction.removeTodo(id)
        )
    }

    function handelComplete(id) {
        dispatch(todosAction.completeTodo(id))
    }

    function handelArchive(id) {
        dispatch(todosAction.archiveTodo(id))
    }



    return (
        <li className="flex gap-2 px-2 h-[40px]">
            <p className={`flex-1 overflow-hidden
                 ${todo.complete ? "line-through" : ""}`}>
                <NavLink to={`/todo/${todo.id}`}>   {todo.title}</NavLink>
            </p>
            <Button onClick={() => handelComplete(todo.id)} color="bg-green-600" hoverColor="bg-green-200">
                Done</Button>
            <Button onClick={() => handelArchive(todo.id)} color="bg-orange-500" hoverColor="bg-orange-600">
                Archive</Button>
            <Button onClick={() => handelRemove(todo.id)} color="bg-red-600" hoverColor="bg-red-700">
                Remove</Button>

        </li>
    )
}

export default TodoItem