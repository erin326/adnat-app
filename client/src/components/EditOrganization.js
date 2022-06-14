import {useState} from 'react';
import {useNavigate} from 'react-router-dom'


function EditOrganization({user,  selectedOrg}) {

    let org;
    if (!user.organization) {
            org = selectedOrg

    } else{
        org = user.organization
    }

    const [errors, setErrors] = useState([]);
    console.log(user.organization);

  
    const [name, setName] = useState(org.name)
    const [hourlyRate, setHourlyRate] = useState('');

    const navigate = useNavigate();


    function handleUpdateOrg(e){
        e.preventDefault();
      
        
        fetch(`/api/organizations/${org.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({name, hourly_rate: hourlyRate})
        })
        .then((r) => {
            if(r.ok) {
                navigate('/')
            }else {
                r.json().then((error) => setErrors(error.errors))
            }
        })
    
    }

    function handleDeleteOrg() {
        fetch(`/api/organizations/${org.id}`, {
            method: "DELETE"
        })
        navigate('/')
    }


    return(
        <div>
            <h2>Edit Organization</h2>
            <form onSubmit={handleUpdateOrg}>
                <label>Name: </label>
                <input
                type='text'
                value={name}
                onChange={(e)=> setName(e.target.value)}
                ></input>
                <br></br>
                <label>Hourly Rate: $</label>
                <input
                type='text'
                value={hourlyRate}
                onChange={(e)=> setHourlyRate(e.target.value)}
                ></input>per hour
                <br></br>
                <button type='submit'>Update</button>
            </form>

            <br></br>
            <button onClick={handleDeleteOrg}>Delete</button>

        </div>
    )
}

export default EditOrganization;