import { Link } from 'react-router-dom';
import '../../App.css';

export const Header = () => {
    return (
        <nav className="menu">
            <button onClick={()=> localStorage.clear('authToken')}><Link to="/login">Login</Link></button>
        </nav>
    )
}