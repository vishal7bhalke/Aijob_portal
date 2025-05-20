import React, { useState } from 'react';
import axios from 'axios';

function Aidata() {
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [preferences, setPreferences] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setJobs([]);

    const query = `${skills} ${preferences}`.replace(/,/g, ' ');
    const location = 'India'; 

    try {
      const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
        params: {
          query: query,
          location: location,
          page: '1',
          num_pages: '1',
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
      });

      const jobResults = response.data.data.slice(0, 3); 
      setJobs(jobResults);
    } catch (error) {
      console.error(error);
      setJobs([{ job_title: '❌ Failed to fetch jobs.', job_description: '' }]);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        🔍 Job Suggestions (Live API)
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Years of Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <input
          type="text"
          placeholder="Job Preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
        >
          {loading ? 'Loading...' : 'Find Jobs'}
        </button>
      </form>

      {jobs.length > 0 && (
        <div className="mt-8 bg-blue-50 p-4 rounded-md">
          <h3 className="text-lg font-bold mb-2 text-blue-900">Top Jobs:</h3>
          <ul className="space-y-4">
            {jobs.map((job, i) => (
              <li key={i} className="border p-3 rounded-md bg-white shadow-sm">
                <h4 className="font-semibold text-blue-800">{job.job_title}</h4>
                <p className="text-sm text-gray-600">{job.company_name} | {job.job_city}</p>
                <p className="mt-1 text-gray-800">{job.job_description?.slice(0, 200)}...</p>
                <a
                  href={job.job_apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline mt-2 inline-block"
                >
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Aidata;