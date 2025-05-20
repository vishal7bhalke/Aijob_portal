import Navbar from './Navbar';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Aidata from './Aidata';
import JobListing from './Joblisting';

function Dashboard() {
const navigate= useNavigate()

    useEffect(()=>{
        const token=localStorage.getItem('token');
        if(!token){
            navigate('/login')
        }
    })
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        <div>
          <Aidata />
        </div>
        <div>
          <JobListing/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
