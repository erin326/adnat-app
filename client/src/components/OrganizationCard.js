import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';


function OrganizationCard({organization, onUpdateOrg, selectOrg, selectedOrg}) {
    

const id = organization.id
 console.log(selectedOrg);
    return(
        <div>
            <li>{organization.name}</li>
            <Link onClick={() => selectOrg(organization)} to={'/edit/' + id}>Edit</Link>
        
        </div>
    )
}

export default OrganizationCard;