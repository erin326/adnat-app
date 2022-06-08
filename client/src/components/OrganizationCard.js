import {Link, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';


function OrganizationCard({user, organization, onUpdateOrg, onJoin, selectOrg, selectedOrg}) {

    const navigate = useNavigate();
    // const [org, setOrg] = useState({})
    // const  orgId = organization.id
    
    function joinOrg(){
        const formData = {
            organization_id: organization.id
        }

        fetch(`/api/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            
            },
            body: JSON.stringify(formData)
        })
        navigate('/')
        window.location.reload()
    
        // window.location.reload()

        
    // .then((r) => r.json()).then((data) => setUpdatedUser(data))
    // setJoined(true)
    // navigate(`/join/${selectedOrg.id}`)
    
    }
//  selectOrg(org)

    // function joinOrg(orgObj) {
    //     // selectOrg(org)
    //     fetch(`/api/join/${orgObj.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json",
    //             "Accept" : "application/json"
    //         },
    //         body: JSON.stringify({organization_id: orgObj.id})
    //     })
    //     .then((r) => r.json()).then((data) => setOrg(data))
    //     navigate(`/join/${org.id}`)
        
    // }
    // console.log(org);
    const id = organization.id
    // const [joined, setJoined] = useState(false);

    // const [org, setOrg] = useState({})

     
//    function handleUpdateOrg(updatedOrg) {
//      const updatedOrgArray = organizations.map((org) => {
//        return org.id === updatedOrg.id ? updatedOrg : org;
//      });
//      setOrganizations(updatedOrgArray);
//    }
   
    //    function joinOrg() {
    //     //  selectOrg(org)

    //      fetch(`/api/join/${organization.id}`, {
    //          method: "PATCH",
    //          headers: {
    //              "Content-Type" : "application/json",
    //              "Accept" : "application/json"
    //          },
    //          body: JSON.stringify({organization_id: organization.id})
    //      })
    //      .then((r) => r.json()).then((data) => setOrg(data))
    //      setJoined(true);
    //      navigate(`/join/${organization.id}`)
         
    //  }
    //  console.log(org);
    return(
        <div>
            <li>{organization.name}</li>
            {/* <button onSubmit={}>Edit</button> */}
            <Link onClick={() => selectOrg(organization)} to={'/edit/' + id}>Edit  </Link>
            {/* <button onClick={() => joinOrg(organization)}>Join</button> */}
            <Link onClick={joinOrg} to={'/join/' + id}> Join</Link>
        
        </div>
    )
}

export default OrganizationCard;