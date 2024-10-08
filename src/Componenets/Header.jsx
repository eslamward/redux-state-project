import { useDispatch, useSelector } from "react-redux"
import logo from "../assets/react.svg"
import { authAction } from "../store/auth_reducer"
import { NavLink } from "react-router-dom"


export default function Header() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth.authinticate)


    function handelLogin() {
        dispatch(authAction.login())
    }

    function handelLogout() {
        dispatch(authAction.logout())
    }
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
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-red-400" : ""} end ><li className="cursor-pointer" >Home</li></NavLink>

                    {auth ? <li className="cursor-pointer" onClick={handelLogout}>Logout</li> :
                        <li className="cursor-pointer" onClick={handelLogin}>Login</li>}
                    <NavLink to="archive" className={({ isActive }) => isActive ? "text-red-400" : ""}> {auth && <li className="cursor-pointer">Archive</li>}</NavLink>
                    <NavLink to="done" className={({ isActive }) => isActive ? "text-red-400" : ""}> {auth && <li className="cursor-pointer">Complete</li>}</NavLink>
                    <NavLink to="quote" className={({ isActive }) => isActive ? "text-red-400" : ""}> {auth && <li className="cursor-pointer">Quote</li>}</NavLink>


                </ul>
            </div>
        </header >
    )
}