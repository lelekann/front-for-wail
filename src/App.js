import './App.css';
import { LoginForm } from './components/login/login';
import { Route, Routes} from 'react-router-dom';
import { Users } from './components/users/users';

function App() {
  return (
    <div>
      <div className="container">
        <Routes>
          <Route path='/login' element={<LoginForm title="Login" />} />
          <Route path='/auth' element={<LoginForm title="Create account" />} /> 
          <Route path='/users' element={<Users />} />         
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
