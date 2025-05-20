import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
     const navigate=useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      alert('Login successful');
      navigate('/dashboard')
    } catch (err) {
      alert(err.response.data.msg || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input type="email" name="email" placeholder="Email" className="w-full mb-4 p-2 border" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full mb-4 p-2 border" onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
      </form>
       <button onClick={()=>{
        navigate('/')
       }} className="ml-8 flex items-center justify-center bg-gray-100    bg-green-500 text-white p-2 rounded">Register</button> 
    </div>
  );
}

export default Login;