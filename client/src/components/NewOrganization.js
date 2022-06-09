import {useState} from 'react';

function NewOrganization() {

    const [name, setName] = useState('');
    const [hourlyRate, setHourlyRate] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        fetch('/api/organizations', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name, hourly_rate: hourlyRate})
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                >
                </input>
                <br></br>
                <label>Hourly Rate: $</label>
                <input 
                type='text'
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                >
                </input>
                <button type='submit'>Create and Join</button>
            </form>
        

        </div>
    )
}

export default NewOrganization;