import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CREATE_USER, LOGIN } from '../../api/api';
import '../../App.css';

export const LoginForm = (props) => {
    const loginFlow = () => props.title === 'Login';
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, {error}] = useMutation(LOGIN);
    const [signup, {signup_error}] = useMutation(CREATE_USER);
    const navigate = useNavigate();

    const onLogin = (event) => {
        event.preventDefault();
        if(loginFlow()){
           login({
                variables: {
                    input: {
                        password,  
                        username
                      }
                }
            }).then(({data}) => {
                if(!error) {
                    localStorage.setItem('authToken', JSON.stringify(data.login.access_token));
                    data.login.user.role === "admin" ? props.setIsAdmin(true) : props.setIsAdmin(false);                    
                    navigate('/users', {replace: true});
                }
            }) 
        } else {
            signup({
                variables:{
                    input: {
                        password,
                        username
                    }
                }
            }).then(({data}) => {
                if(!error && data) {
                    navigate('/login', {replace: true});
                }
            })
        }
    }

    return (
        <form className="form">
            <h3>{props.title}</h3>
            <div className="form-input">
                <label>Name:</label>
                <input value={username} onChange={event => setUsername(event.target.value)} placeholder="Enter your name" minLength={3} required/>
            </div>
            <div className="form-input">
                <label>Password:</label>
                <input value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter your password" type="password" minLength={6} required/>
            </div>
            <button onClick={onLogin} disabled={username.length < 3 || password.length < 6}>{props.title}</button>
            {error && <small className='error'>Error...{error.message}</small>}
            {signup_error && <small className='error'>Error...{signup_error.message}</small>}
            <div>
                {loginFlow() && <p>Don't have an account? <Link to="/auth" alt="Signup">Register now</Link></p>}
                {!loginFlow() && <p>Already have an account? Please <Link to="/login" alt="Login">Login</Link></p>}
            </div>
        </form>
    )
}