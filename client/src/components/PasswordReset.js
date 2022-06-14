import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';


function PasswordReset({setPasswordResetSuccess, setShowPasswordReset}) {

    
    const [showTokenInput, setShowTokenInput] = useState(false)
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSubmitTokenSend(e) {
        e.preventDefault()
        fetch(`/api/forgot_password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email_address: email
            })
        })
        .then((r) => {
            if(r.ok) {
                setShowTokenInput(true)
            } else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleSubmitPasswordReset(e){
        e.preventDefault()
        fetch(`/api/reset_password`, {
            method: "POST", 
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token, 
                email_address: email,
                password, 
                passwordConfirmation
            })
        })
        .then((r) => {
            if(r.ok)  {
                setPasswordResetSuccess(true)
                setShowPasswordReset(false)
            }else{
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }


    return (
        <>
        <br></br>
        <form onSubmit={handleSubmitTokenSend}
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
        <form onSubmit={handleSubmitPasswordReset}>
            Token:  
             <input
            type="text"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            >
            </input>
            <br></br>
            <label>New Password (<em>6 characters minimum</em>): </label>
            <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <label>New Password Confirmation: </label>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            ></input>
            <br></br>
            <button className="button" type='submit'>Submit</button>
        </form>
        </>
        : null }

        {showTokenInput ? <p>Please check your email for a password reset token.</p> : null}
        
        {errors ? errors.map((err) => (<p>{err}</p>)) 
                : null}
        </>
    )
}

export default PasswordReset;