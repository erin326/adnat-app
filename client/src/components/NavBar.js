import {Link} from 'react-router-dom'


function NavBar({user, setUser}) {

    function handleLogout(){
        fetch('/api/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return(
        <>
         
             <h1><Link to='/'>Adnat</Link></h1>
      
       
        <nav>
            <p>Logged in as {user.username}</p>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
        </nav>

        {user.organization === null ? <p>You aren't a member of any organizations. Join an existing one or create a new one.</p> : null}
        </>
    )
}

export default NavBar;