import {useEffect, useState} from 'react';


function PasswordReset({user}) {

    const [email, setEmail] = useState('');

    const [showTokenInput, setShowTokenInput] = useState(false)
    const [token, setToken] = useState('')



    function handleSubmitPasswordReset(e) {
        e.preventDefault()
        setShowTokenInput(true)
        fetch(`/api/forgot_password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                
                email_address: email
            })
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }
    // console.log(user);

    return (
        <>
        <form onSubmit={handleSubmitPasswordReset}
        type='submit'>
        Please enter your email address
        <input
        type='text'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        >
        </input>
        <button type='submit'>Reset Password</button>

        </form>
        {showTokenInput ?
        <> 
        <form>
            <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            >
            </input>
        </form>

        </>
        :null }
        </>
    )
}

export default PasswordReset;