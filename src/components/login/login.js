import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN } from '../../api/api';
import '../../App.css';

export const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, {error}] = useMutation(LOGIN);
    const navigate = useNavigate();

    const onLogin = (event) => {
        event.preventDefault();
        login({
            variables: {
                input: {
                    password,  
                    username
                  }
            }
        }).then(({data}) => {
            if(!error) {
                console.log(data);
                localStorage.setItem('authToken', JSON.stringify(data.login.access_token));
                navigate('/users', {replace: true});
            }
        })
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
            <div>
                {
                props.title === 'Login' ?
                    <p>Don't have an account? <Link to="/auth" alt="Signup">Register now</Link></p>:
                    <p>Already have an account? Please <Link to="/login" alt="Login">Login</Link></p>
                }
            </div>
        </form>
    )
}