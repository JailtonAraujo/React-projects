//CSS
import styles from './NavBar.module.css';

import {NavLink} from "react-router-dom";

//hooks
import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from '../context/authContext';

const NavBar = () => {

  const { user } = useAuthValue();

  const { logout } = useAuthentication();

  return (
   <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
          Mini <span>blog</span>    
      </NavLink>
      <ul className={styles.links_list}>
        <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink></li>

            {!user && (
              <>
                 <li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : '')}>Entrar</NavLink> </li>
                 <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink></li>
              </>
            )}
      
            {user && (
              <>
                  <li> <NavLink to="/dashboard" className = {({isActive}) =>(isActive ? styles.active : '')}>Dashboard</NavLink> </li>
                  <li> <NavLink to="/posts/createpost" className={({isActive})=>(isActive ? styles.active : '')}>Criar poster</NavLink> </li>  
              </>
            )}  

        <li><NavLink to="/about" className={({isActive})=>(isActive ? styles.active : '')}>Sobre</NavLink> </li>
              
        {user && (
          <li> <button onClick={logout}>Sair</button> </li>
        )}      
      </ul>
   </nav>
  )
}

export default NavBar