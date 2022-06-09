import {Link} from 'react-router-dom';
import Organizations from './Organizations';
import NewOrganization from './NewOrganization';
import EditOrganization from './EditOrganization';

function HomePage({user, organizations, selectOrg, selectedOrg}) {

    // console.log(organizations.length);
    
    return (
    <>
    {/* {organizations > 0 ? */}
       {/* <div> */}
       <h3>Organizations</h3>
       <Organizations user={user} selectedOrg={selectedOrg} selectOrg={selectOrg} organizations={organizations} />

   {/* </div> : null } */}
 


    <h3>Create Organization</h3>
    <NewOrganization organizations={organizations}/>
    {/* {selectedOrg ? <EditOrganization  user={user} selectedOrg={selectedOrg} selectOrg={selectOrg}/> : null } */}
    

    </>
    )
}

export default HomePage;