import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import PasswordReset from '../components/PasswordReset'


function LoginPage({ onLogin }) {

    const [showLoginForm, setShowLoginForm] = useState(true)
    const[showPasswordReset, setShowPasswordReset] = useState(false)
    const [passwordResetSuccess, setPasswordResetSuccess] = useState(false)

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
                    <PasswordReset  setPasswordResetSuccess={setPasswordResetSuccess}
                    setShowPasswordReset={setShowPasswordReset}/>
                     : null
                }

                {passwordResetSuccess ? <p>Password reset successful!  Please login with your new password.</p> : null}
        </div>
    )
    
}

export default LoginPage;