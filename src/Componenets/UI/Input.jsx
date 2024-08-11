import Button from "./Button"

const Input = () => {

    return (
        <div className="flex flex-col p-2">
            <label htmlFor="todo" className="font-mono">Todo</label>
            <div className="flex justify-between gap-4">
                <input id="todo" name="todo" className="
            flex-1 p-2 font-mono text-slate-500
             rounded-md border-[1px] border-slate-400 
             focus:outline-none focus:border-slate-500"></input>
                <Button color="bg-orange-500" hoverColor="bg-orange-600">
                    Add</Button>
            </div>
        </div>
    )
}


export default Input