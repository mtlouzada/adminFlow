import { useState } from 'react';
import axios from 'axios';


// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }: { children: JSX.Element }) => {
//   const token = localStorage.getItem('token');
//   return token ? children : <Navigate to="/login" />;
// };

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = await axios.post('/api/login', { email, password });
    localStorage.setItem('token', response.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
