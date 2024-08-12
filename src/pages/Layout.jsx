import { Outlet } from "react-router"
import Header from "../Componenets/Header"


const Layout = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default Layout