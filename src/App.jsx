import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./pages/Layout"
import Home from "./pages/Home"
import ArchivePage from "./pages/Archive"
import DonePage from "./pages/Done"
import DetailsPage, { loader } from "./pages/Details"
import QuotePage from "./pages/Quots"




const router = createBrowserRouter([
  {
    path: "/", element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/todo/:id", element: <DetailsPage />, loader: loader },
      { path: "archive", element: <ArchivePage /> },
      { path: "done", element: <DonePage /> },
      { path: "quote", element: <QuotePage /> }

    ]
  }
])


const App = () => {



  return (
    <RouterProvider router={router} />
  )
}

export default App