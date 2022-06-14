import {useState} from 'react';
import {Link} from 'react-router-dom'

function SignUpForm({onLogin}) {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [errors, setErrors] = useState([]);

    function handleSignupSubmit(e) {
        e.preventDefault();
        fetch('/api/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                username, 
                email_address: emailAddress,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            }else{
                r.json().then((error) => setErrors(error.errors))
            }
        });
    }

    return(
        <form onSubmit={handleSignupSubmit}>
            <h1><Link to='/'>Adnat</Link></h1>
            <h2>Sign up</h2>
            <label>Name: </label>
            <input 
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
            <br></br>
            <label>Email: </label>
            <input 
            type="text"
            id="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            ></input>
            <br></br>
            <label>Password (<em>6 characters minimum</em>): </label>
            <input
            type="password"
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
            <br></br>
            <label>Password Confirmation: </label>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            ></input>
            <br></br>
            <button className="button" type='submit'>Sign Up</button>

            {errors ? errors.map((err) => (<p>{err}</p>)) 
          : null}
        </form>
    )
}

export default SignUpForm;