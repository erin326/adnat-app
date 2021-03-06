import { Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react'
import LoginPage from '../pages/LoginPage';
import NavBar from './NavBar';
import HomePage from './HomePage';
import EditOrganization from './EditOrganization';
import OrgPage from '../pages/OrgPage';
import Shifts from '../pages/Shifts';

function App() {

  const [user, setUser] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState({});

  function selectOrg(orgObj) {
      setSelectedOrg(orgObj)
  }

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
        <Route exact path='/edit/:id' element={<EditOrganization  selectedOrg={selectedOrg} user={user} />}></Route>
        <Route exact path='/join/:id' element={<OrgPage user={user}  />}></Route>
        <Route exact path='/leave' element={<HomePage user={user}/>}></Route>
        <Route exact path='/shifts/:id' element={<Shifts user={user}/>}></Route>
        {user.organization_id === null ? <Route exact path='/' element={<HomePage user={user} 
        selectedOrg={selectedOrg} selectOrg={selectOrg}
        />}></Route> : <Route exact path='/' element={<OrgPage user={user}/>}></Route>}
      </Routes>
    </div>
  );
}

export default App;
