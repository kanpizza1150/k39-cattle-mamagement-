import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import {
  Button,
  Collapse,
  IconButton,
  Navbar as MNavbar,
  Typography,
} from "@material-tailwind/react"
import React from "react"
import { useNavigate } from "react-router-dom"
import LoginModal from "./Login"
import SignupModal from "./Signup"

const NavList = () => {
  const navigagte = useNavigate()
  const redirect = (path: string) => {
    navigagte(path)
  }
  return (
    <ul className="my-2 flex flex-col gap-1 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
      <Button onClick={() => redirect("/cattle")} variant="text">
        วัว
      </Button>
      <Button onClick={() => redirect("/semen")} variant="text">
        น้ำเชื้อ
      </Button>

      <SignupModal />
      <LoginModal />
    </ul>
  )
}
const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false)

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false)

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])

  return (
    <MNavbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          K39 Ranch
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </MNavbar>
  )
}
export default Navbar
