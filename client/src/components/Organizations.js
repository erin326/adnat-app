import {useEffect, useState} from 'react';
import OrganizationCard from './OrganizationCard';
function Organizations({selectOrg, selectedOrg}) {

    const [organizations, setOrganizations] = useState([]);
   
    
  function handleUpdateOrg(updatedOrg) {
    const updatedOrgArray = organizations.map((org) => {
      return org.id === updatedOrg.id ? updatedOrg : org;
    });
    setOrganizations(updatedOrgArray);
  }
    


   useEffect(() => {
    fetch('api/organizations')
    .then((r) => r.json())
    .then((data) => {
        console.log(data);
        setOrganizations(data)})
   },[])

   const displayOrganizations = organizations.map((organization) => (
      
       <OrganizationCard selectedOrg={selectedOrg} selectOrg={selectOrg} key={organization.id}organization={organization} onUpdateOrg={handleUpdateOrg}/>
   ))
       
    

    return(
        <div>
            {displayOrganizations}
               
        </div>
    )
}

export default Organizations;