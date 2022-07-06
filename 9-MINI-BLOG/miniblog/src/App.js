import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

//hooks
import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

//context
import {AuthProvider} from './context/authContext';


function App() {

  const [user, setUSer] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user ===undefined

  useEffect(()=>{
      onAuthStateChanged(auth, (user) =>{
      setUSer(user);
    })
  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
