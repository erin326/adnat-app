import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Button } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import PasswordReset from '../components/PasswordReset'


function LoginPage({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)
    const[showPasswordReset, setShowPasswordReset] = useState(false)

    // if(showPasswordReset) {
    //     <>
    //     <PasswordReset />
    //     </>
    // }
    // else{
    //     null
    // }
    // showPasswordReset ? setShowPasswordReset(!showPasswordReset) : showPasswordReset

    return (
        <div className='login-page'>
         

            {showLoginForm ? (
                <>
            
                <LoginForm onLogin={onLogin}/>
                <h3>Don't have an account? 
                    <button
                    onClick={() => setShowLoginForm(false)}> Sign Up
                    </button>
                </h3>
                <button onClick={() => setShowPasswordReset(true)}>Forgot your password?</button>

                
      
                </>

            ) : (
                <>
                <SignupForm onLogin={onLogin}/>
                <br></br>
                <p>
                    Already have an account? 
                    <button onClick={() => setShowLoginForm(true)}>
                        Log In
                    </button>
                </p>
                
        
         
                
                </>

                
            )}
            
            {showPasswordReset ? 
                    <PasswordReset /> : null
                }
         
        </div>
    )
    
}



export default LoginPage;