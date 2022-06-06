import {Link} from 'react-router-dom';
import Organizations from './Organizations';
import NewOrganization from './NewOrganization';

function HomePage() {

    return (
    <>
    
    <h3>Organizations</h3>
    <Organizations />

    <h3>Create Organization</h3>
    <NewOrganization />

    </>
    )
}

export default HomePage;