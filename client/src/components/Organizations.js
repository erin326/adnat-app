import {useEffect, useState} from 'react';
import OrgPage from '../pages/OrgPage';
// import OrgPage from '../pages/OrgPage';
import OrganizationCard from './OrganizationCard';
function Organizations({user, selectOrg, selectedOrg}) {

    const [organizations, setOrganizations] = useState([]);
   
    
//   function handleUpdateOrg(updatedOrg) {
//     const updatedOrgArray = organizations.map((org) => {
//       return org.id === updatedOrg.id ? updatedOrg : org;
//     });
//     setOrganizations(updatedOrgArray);
//   }
    
  


   useEffect(() => {
    fetch('api/organizations')
    .then((r) => r.json())
    .then((data) => {
        setOrganizations(data)})
   },[])

   const displayOrganizations = organizations.map((organization) => (
      
        <OrganizationCard user={user} selectedOrg={selectedOrg} selectOrg={selectOrg} key={organization.id}organization={organization} />  
 
   ))
//    const displayOrgPage = organizations.map((organization) => (
      
//     <OrgPage user={user} selectedOrg={selectedOrg} selectOrg={selectOrg} key={organization.id}organization={organization} />  


       
    

    return(
        <div>
            
            { displayOrganizations}
           
               
        </div>
    )
}

export default Organizations;