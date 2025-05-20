import { useEffect, useState } from "react";
import axios from "axios";

function JobListing() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get("https://jsearch.p.rapidapi.com/search", {
      params: {
        query: "React developer", 
        page: "1",
        num_pages: "1"
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
      }
    })
    .then(response => {
      setJobs(response.data.data); 
      setLoading(false);
    })
    .catch(err => {
      setError("Failed to load jobs.");
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="p-8 text-center">Loading jobs...</p>;
  if (error) return <p className="p-8 text-center text-red-600">{error}</p>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Available Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <ul className="space-y-6">
          {jobs.map((job, idx) => (
            <li key={idx} className="border rounded-lg p-6 shadow hover:shadow-lg bg-white">
              <h3 className="font-bold text-xl mb-1 text-blue-700">{job.job_title}</h3>
              <p className="text-gray-700 mb-1">
                <strong>Company:</strong> {job.employer_name || "Unknown"}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Location:</strong> {job.job_city || "Remote/Not specified"}
              </p>
              <p className="text-gray-600 mb-2 italic">
                <strong>Type:</strong> {job.job_employment_type || "N/A"}
              </p>
              <p className="text-gray-800 mb-3">{job.job_description?.slice(0, 200) || "No description"}...</p>
              <a
                href={job.job_apply_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobListing;