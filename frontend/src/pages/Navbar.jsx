import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">Jobportal Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/profile')}
          className="bg-blue-800 px-3 py-1 rounded hover:bg-blue-700"
        >
          Profile
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-400"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;