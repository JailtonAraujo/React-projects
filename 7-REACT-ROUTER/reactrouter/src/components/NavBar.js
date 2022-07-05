import "./NavBar.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
        </nav>
    </div>
  )
}

export default NavBar