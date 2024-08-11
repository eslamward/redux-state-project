import logo from "../assets/react.svg"


export default function Header() {

    return (
        <header className="h-[78px] w-full bg-slate-900 text-white" >
            <div className="container mx-auto flex justify-between">
                <div className="flex gap-3 items-center h-[78px]">
                    <img src={logo} alt="app logos" />
                    <h2 className="text-xl font-semibold">
                        REAC<span className="text-orange-700 font-bold">T T</span>ODO</h2>
                </div>
                <ul className="h-[78px] flex gap-4 items-center
                font-mono text-orange-300">
                    <li>Home</li>
                    <li>Login</li>
                </ul>
            </div>
        </header>
    )
}