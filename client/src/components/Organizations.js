import {useEffect, useState} from 'react';

function Organizations() {

    const [organizations, setOrganizations] = useState([]);

   useEffect(() => {
    fetch('api/organizations')
    .then((r) => r.json())
    .then((data) => {
        console.log(data);
        setOrganizations(data)})
   },[])

   const displayOrganizations = organizations.map((organization) => (
      
       <li key={organization.id}>{organization.name}</li>
   ))
       
    

    return(
        <div>
            {displayOrganizations}
               
        </div>
    )
}

export default Organizations;