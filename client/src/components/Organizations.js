import {useEffect, useState} from 'react';
import OrganizationCard from './OrganizationCard';

function Organizations({user, selectOrg, selectedOrg}) {
    

    const [organizations, setOrganizations] = useState([]);
   
    useEffect(() => {
        fetch('api/organizations')
        .then((r) => r.json())
        .then((data) => {
            setOrganizations(data)})
    },[])

   const displayOrganizations = organizations.map((organization) => (
      
        <OrganizationCard user={user} selectedOrg={selectedOrg} selectOrg={selectOrg} key={organization.id}organization={organization} />  
 
   ))
    return(
        <div>
            { displayOrganizations}
        </div>
    )
}

export default Organizations;