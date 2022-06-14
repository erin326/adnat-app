import Organizations from './Organizations';
import NewOrganization from './NewOrganization';

function HomePage({user, organizations, selectOrg, selectedOrg}) {

    console.log(user);
    return (
        <>
       <h3>Organizations</h3>
       <Organizations user={user} selectedOrg={selectedOrg} selectOrg={selectOrg} organizations={organizations} />
        <h3>Create Organization</h3>
        <NewOrganization organizations={organizations}/>
        </>
    )
}

export default HomePage;