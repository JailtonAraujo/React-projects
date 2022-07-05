import "./NavBar.css"

import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Produtos</NavLink>
        </nav>
    </div>
  )
}

export default NavBar