import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <div className="w-screen flex flex-col bg-neutral-100 min-h-screen items-start">
      <Navbar />
      <div className="mx-auto w-full max-w-screen-xl px-5 py-5 xl:px-0 h-full">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
