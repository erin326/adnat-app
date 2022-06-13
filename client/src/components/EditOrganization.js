import {useState} from 'react';
import { useEffect } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'


function EditOrganization({user,  selectedOrg}) {

    const [organization, setOrganization] = useState({});
    const location = useLocation()
    const {from } = location.state

    // useEffect(() => {
    //     fetch(`/api/organizations/${user.organization.id}`)
    //     .then((r) => r.json())
    //     .then((data) => setOrganization(data))

    // },[user.organization])

  let org;
  if (!user.organization) {
        org = selectedOrg
    
      console.log('selected');
  } else{
    // fetch(`/api/organizations/${user.organization.id}`)
    // .then((r) => r.json())
    // .then((data) => setOrganization(data))
     org = user.organization
      console.log('notselected');
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

    console.log(org);
 
    function handleDeleteOrg() {
        fetch(`/api/organizations/${org.id}`, {
            method: "DELETE"
        })
        navigate('/')
        // window.location.reload()
    }


    // function handleUpdateSubmit(e){
    //     e.preventDefault()
    //     fetch(`api/anorganizationanizations/${organization.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }, 
    //         body: JSON.stringify({name, hourly_rate: hourlyRate})
    //     })
    //     .then((r) => {
    //         if(r.ok) {
    //             navigate('/')
    //         }else {
    //             r.json().then((error) => setErrors(error.errors))
    //         }
    //     })

    // }

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
                ></input>
                <button type='submit'>Update</button>
            </form>

            <button onClick={handleDeleteOrg}>Delete</button>

        </div>
    )
}

export default EditOrganization;