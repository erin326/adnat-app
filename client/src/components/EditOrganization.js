import {useState} from 'react';
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function EditOrganization({user,  selectedOrg}) {

  
    const [errors, setErrors] = useState([]);

  
    const [name, setName] = useState(selectedOrg.name)
    const [hourlyRate, setHourlyRate] = useState(selectedOrg.hourly_rate);

    const navigate = useNavigate();

    console.log(selectedOrg.id);
    function handleUpdateOrg(e){
        e.preventDefault();
      
        fetch(`/api/organizations/${selectedOrg.id}`, {
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

    console.log(selectedOrg);
 



    // function handleUpdateSubmit(e){
    //     e.preventDefault()
    //     fetch(`api/organizations/${organization.id}`, {
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

        </div>
    )
}

export default EditOrganization;