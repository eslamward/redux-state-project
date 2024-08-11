import Button from "./UI/Button"



const TodoItem = () => {

    return (
        <li className="flex gap-2  h-[30px]">
            <p className="flex-1 overflow-hidden hover:overflow-auto">
                Todo 1adaskda


            </p>
            <Button color="bg-green-600" hoverColor="bg-green-200">
                Done</Button>
            <Button color="bg-orange-500" hoverColor="bg-orange-600">
                Archive</Button>
            <Button color="bg-red-600" hoverColor="bg-red-700">
                Remove</Button>

        </li>
    )
}

export default TodoItem