import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoginPage from '../pages/LoginPage';
import NavBar from './NavBar';
import Header from './Header';

function App() {

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    fetch('/api/me').then((r) => {
        if (r.ok) {
            r.json().then((user) => setUser(user));
        }
    });
}, []);

if (!user) return <LoginPage  onLogin={setUser} />;

  return (
    <div className="App">
           <Routes>
       <Route exact path='/' element={<Header />}></Route>
     </Routes>

    
     <NavBar user={user} setUser={setUser}/>
     

     {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
    </div>
  );
}

export default App;
