import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoginPage from '../pages/LoginPage';
import NavBar from './NavBar';
import HomePage from './HomePage';
import EditOrganization from './EditOrganization';

function App() {

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);

  
  const [selectedOrg, setSelectedOrg] = useState({});

  function selectOrg(orgObj) {
      setSelectedOrg(orgObj)
  }


//   function handleUpdateOrg(orgObj){
//     fetch(`api/organizations/${orgObj.id}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type" : "application/json"
//         }, 
//         body: JSON.stringify({orgObj})
//     })
//     .then((r) => {
//         if(r.ok) {
//             navigate('/')
//         }else {
//             r.json().then((error) => setErrors(error.errors))
//         }
//     })

// }
  


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
        <Route exact path='/edit/:id' element={<EditOrganization  selectedOrg={selectedOrg}selectOrg={selectOrg} user={user} />}></Route>
        <Route exact path='/join/:id'></Route>
       <Route exact path='/' element={<HomePage user={user} selectedOrg={selectedOrg}selectOrg={selectOrg}/>}></Route>
      </Routes>

     {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
    </div>
  );
}

export default App;
