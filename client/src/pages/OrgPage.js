import {Link} from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function OrgPage({user, organization, selectedOrg,selectOrg}) {

console.log(selectOrg);
console.log(organization);
console.log(user);
const [joined, setJoined] = useState(false);

   const [updatedUser, setUpdatedUser] = useState({});

   const navigate = useNavigate()

//    useEffect(() => {
//     selectOrg(user.organization)
//    },[])

//    const location = useLocation()
//    const {from}  = location.state

//    useEffect(() => {
//        fetch(`/api/organizations/${selectedOrg.id}`)
//        .then((r) => r.json())
//        .then((data) => setOrg(data))

    
//    },[])

//    console.log(from);
//    console.log(user);


  
    //     const formData = {
    //         organization_id: selectedOrg.id
    //     }

    //     fetch(`/api/users/${user.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json",
               
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     .then((r) => r.json()).then((data) => setUpdatedUser(data))
    //     setJoined(true)
    //     // navigate(`/join/${selectedOrg.id}`)
        
            
    // },[])
    // //  selectOrg(org)
    // console.log(updatedUser);

    // if (joined === true) {
    //     fetch(`/api/organizations/${selectedOrg.id}`)
    //     .then((r) => r.json())
    //     .then((organization) => setOrg(organization))
    // }


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
            <Link state={{from: "user.organization"}} to={"/edit/" + user.organization.id} > Edit </Link>
            <Link  onClick={leaveOrg} to='/leave'> Leave </Link>
           
            </div> :null }
          


        </div>
    )
}

export default OrgPage;