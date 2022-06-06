import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button } from 'semantic-ui-react'

function Login({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)

    return (
        <div className='login-page'>
         

            {showLoginForm ? (
                <>
                
                <LoginForm onLogin={onLogin}/>
                <h3>Don't have an account? 
                    <Button
                    onClick={() => setShowLoginForm(false)}> Sign Up
                    </Button>
                </h3>
      
                </>

            ) : (
                <>
                <SignupForm onLogin={onLogin}/>
                <br></br>
                <p>
                    Already have an account? 
                    <Button onClick={() => setShowLoginForm(true)}>
                        Log In
                    </Button>
                </p>
                
                </>
            )}
        </div>
    )
    
}



export default Login;