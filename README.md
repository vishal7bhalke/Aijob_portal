AI Job Portal — Quick Specs
1. Setup Instructions
Clone the repo and run npm install.

Create a .env file with your OpenAI API key:
VITE_OPENAI_API_KEY=your_key_here

Start the app with npm run dev.

Open in browser at http://localhost:3000.

2. How AI is Used
Users enter their skills, experience, and job preferences.

The app sends this info to OpenAI’s GPT model.

The AI suggests 3 relevant jobs with short descriptions.

The prompt is simple and clear to get useful results.

3. API Used
OpenAI Chat Completion API for generating job suggestions.

Optionally, use JSearch API to get real job listings.

Calls are made directly from the frontend using Axios.

4. Code Structure
React app with two main components:

Aidata: Handles user input and AI job suggestions.

JobListing: Fetches and displays real job listings.

Uses React hooks (useState, useEffect) and Axios for API calls.

Tailwind CSS for styling.

5. Assumptions & Trade-offs
API keys are stored in environment variables (keep them safe).

AI suggestions depend on how well the user fills the form.

No backend server needed; everything runs in the browser.

API usage limits apply depending on your plan.

UI is simple for demonstration; can be improved later.
