


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
             <h1 className='title'>
      
        </h1>
        <nav>
            <button id='logout-button' onClick={handleLogout}>Logout</button>
        </nav>
        </>
    )
}

export default NavBar;