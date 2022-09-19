import './App.css';
import { LoginForm } from './components/login/login';
import { Route, Routes} from 'react-router-dom';
import { Users } from './components/users/users';
import { useState } from 'react';
import { Header } from './components/header/header';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      <Header/>
      <div className="container">
        <Routes>
          <Route path='/login' element={<LoginForm title="Login" setIsAdmin={setIsAdmin}/>} />
          <Route path='/auth' element={<LoginForm title="Create account" />} /> 
          <Route path='/users' element={<Users isAdmin={isAdmin}/>} />         
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
