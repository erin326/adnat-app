import {Link} from 'react-router-dom';
import Organizations from './Organizations';
import NewOrganization from './NewOrganization';

function HomePage({organizations, selectOrg, selectedOrg}) {

    return (
    <>
    
    <h3>Organizations</h3>
    <Organizations selectedOrg={selectedOrg} selectOrg={selectOrg} organizations={organizations} />

    <h3>Create Organization</h3>
    <NewOrganization organizations={organizations}  />

    </>
    )
}

export default HomePage;