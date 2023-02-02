import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/CreatePost/CreatePost';

//hooks
import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

//context
import {AuthProvider} from './context/authContext';
import Search from './pages/Search/Search';
import Post from './pages/Post/Post';
import EditPost from './pages/EditPost/EditPost';


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
            <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route path='/search' element={<Search/>} />
            <Route path='/post/:id' element={<Post/>} />

            <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>

            <Route path='/post/edit/:id' element={user ? <EditPost/> : <Navigate to="/"/>}/>

            <Route path='/dashboard' element={user ?  <Dashboard/> : <Navigate to="/"/>}/>
            <Route path = '/posts/createpost' element={user ? <CreatePost/> : <Navigate to="/"/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
