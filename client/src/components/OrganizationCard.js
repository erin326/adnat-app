import {Link, useNavigate} from 'react-router-dom';

function OrganizationCard({user, organization, selectOrg}) {

    const navigate = useNavigate();
    const id = organization.id

    function joinOrg(){
        const formData = {
            organization_id: id
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
    }

    return(
        <div>
            <li>{organization.name}</li>
            <Link onClick={() => selectOrg(organization)} to={'/edit/' + id}>Edit  </Link>
            <Link onClick={joinOrg} to={'/join/' + id}> Join</Link>
        </div>
    )
}

export default OrganizationCard;