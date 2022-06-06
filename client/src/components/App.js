import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoginPage from '../pages/LoginPage';
import NavBar from './NavBar';
import HomePage from './HomePage';

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
      <NavBar user={user} setUser={setUser}/>
      <Routes>
       <Route exact path='/' element={<HomePage user={user}/>}></Route>
      </Routes>

     {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
    </div>
  );
}

export default App;
