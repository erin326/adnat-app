import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function OrgPage({user}) {

    console.log(user);
   const navigate = useNavigate()

   function leaveOrg() {
       fetch(`/api/users/${user.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify({
                organization_id: null 
           })
       })
       navigate('/')
       window.location.reload()
   }

    return(
        <div>
            {user.organization ?    <div>
            <h2>{user.organization.name}</h2>
            <Link to={'/shifts/' + user.organization.id}>View Shifts </Link>
            <Link to={"/edit/" + user.organization.id} > Edit </Link>
            <Link  onClick={leaveOrg} to='/leave'> Leave </Link>
            </div> :null }
        </div>
    )
}

export default OrgPage;