import './App.css';
import ImageList from './components/ImageList';
import { getImages } from './utils/imageService';
import auth from './utils/auth';
import {useEffect, useState} from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { logout, profile } from './utils/userService';
import PostImageForm from './components/PostImageForm';

const initialName = {
  username: ''
}

function App() {
  const initialState = auth.isAuthenticated();
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);
  const [username, setUsername] = useState(initialName);
  const [image, setImages] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPost, setPost] = useState(false);
  useEffect(() => {
        getImages().then(ImageList => setImages(ImageList))
    }, [])

  const handleLogout = () => {
    setIsAuthenticated(false);
    logout();
  }
 
  return (
    <div className="App" id="App">
      <header className="App-header">
      <h1 id="logo">Cats</h1>
      </header>
      
      {isAuthenticated ? 
        (<div>
          <button className='left menu-button' id="create-button" onClick={() => setPost(true)}>Create</button>
          { showPost ? <PostImageForm isShowed={setPost} cb={() => setPost(false)} setImages={setImages}/> : null }
          <div className='menu right'>
            <div id="username">{username.username.username}</div>
            <button className="menu-button" onClick={() => handleLogout()}>Logout</button>
          </div>
          
        </div>

        ) :
        (<div className="menu right">
        <button id="login-button" className="menu-button" onClick={() => setShowLogin(true)}>Login</button>
        <button className="menu-button" onClick={() => setShowRegister(true)}>Register</button>
        { showRegister ? <Register isShowed={setShowRegister} cb={() => setShowRegister(false)} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername}/> : null }
        { showLogin ? <Login isShowed={setShowLogin} cb={() => setShowLogin(false)} setIsAuthenticated={setIsAuthenticated} setUsername={setUsername} /> : null }</div>)
      }
      <ImageList image={image} setImages={setImages}/>
    </div>
  );
}

export default App;
