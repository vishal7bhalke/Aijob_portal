import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function ProfileForm() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    location: '',
    yearsOfExperience: '',
    skills: '',
    preferredJobType: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      ...formData,
      skills: formData.skills.split(',').map((skill) => skill.trim()),
    };

    try {
      await axios.put('http://localhost:5000/api/auth/profile', updatedData);
      alert('Profile updated successfully');
    } catch (err) {
      alert(err.response?.data?.error || 'Error updating profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
      
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-500 hover:text-blue-700"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-6">Update Profile</h2>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full mb-4 p-2 border" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required className="w-full mb-4 p-2 border" />
        <input type="number" name="yearsOfExperience" placeholder="Years of Experience" value={formData.yearsOfExperience} onChange={handleChange} required className="w-full mb-4 p-2 border" />
        <input type="text" name="skills" placeholder="Skills (comma separated)" value={formData.skills} onChange={handleChange} required className="w-full mb-4 p-2 border" />
        <input type="text" name="preferredJobType" placeholder="Preferred Job Type" value={formData.preferredJobType} onChange={handleChange} required className="w-full mb-4 p-2 border" />

        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Update Profile</button>
      </form>
    </div>
  );
}

export default ProfileForm;