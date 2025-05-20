import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate=useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://aijob-portal.onrender.com/api/auth/register', formData);
      console.log(res.data)
      localStorage.setItem('token', res.data.token);
      alert('Registered successfully');
       navigate('/dashboard')
    } catch (err) {
      alert(err.response.data.msg || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <input type="text" name="name" placeholder="Name" className="w-full mb-4 p-2 border" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full mb-4 p-2 border" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full mb-4 p-2 border" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button> 
      </form>
        <button onClick={()=> {
            navigate('/login')
        }} className="ml-8 flex items-center justify-center bg-gray-100    bg-green-500 text-white p-2 rounded">Login</button>
    </div>
  );
}

export default Register;
